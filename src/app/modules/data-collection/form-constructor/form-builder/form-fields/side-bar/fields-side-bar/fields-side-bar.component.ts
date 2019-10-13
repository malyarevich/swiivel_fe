import { Component, Input, OnDestroy, OnInit, ChangeDetectorRef, ViewChild, AfterViewChecked } from '@angular/core';
import { isEmpty, flattenDeep } from 'lodash';
import { Form } from 'src/app/models/data-collection/form.model';
import { SideBarService } from '../side-bar.service';
import { TreeDataSource, CHILDREN_SYMBOL } from '../tree.datasource';
import { NestedTreeControl } from '@angular/cdk/tree';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { FormControl, FormBuilder } from '@angular/forms';
import { Popup } from '@app/core/popup.service';
import { v4 as uuid } from 'uuid';


const flatten = (acc, field) => {
  if (field.fields && field.fields.length > 0) {
    return field.fields.reduce(flatten, acc);
  }
  console.log(field)
  acc.push(field.path);
  return acc;

  // else {
  //   if (field.type === 113 || field.type === 114) {
  //     return acc.concat(field.path);
  //   } else {
  //     return acc;
  //   }
  // }
  // else if (field.type === 114 || field.type === 113) {
  //   return acc.concat(field.path);
  // }
  //  return flat;
};
@Component({
  selector: 'app-fields-side-bar',
  templateUrl: './fields-side-bar.component.html',
  styleUrls: ['./fields-side-bar.component.scss']
})
export class FieldsSideBarComponent implements OnInit, OnDestroy, AfterViewChecked {
  filterValue: string = null;
  filterControl = new FormControl();
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;
  _sideBar;
  _form;
  nodeForDel: any;
  // _sideBarFields = [];
  // _formFields = [];

  @Input() set sideBar(fields) {
    // this._sideBarFields = fields;
    // this.treeSource.build(this._sideBarFields.concat(this._formFields));
    this.treeSource.build(fields);
    this._sideBar = this.treeSource.nodes;
  }
  // @Input() form;
  @Input() set form(form) {
    this._form = form;
    // this.treeSource.build(this._sideBar.concat(form.fields));
    // this._formFields = this._form.fields;
    // this.treeSource.build(this._sideBarFields.concat(this._formFields));
    this._sideBar = this.treeSource.nodes;
  }
  @Input() set section(what) {
    console.log(what);
  }
  @Input() idSectionForDragDrop: string[];
  isTree = true;
  sectionDetailed;
  searchText: string;
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl(node => node[CHILDREN_SYMBOL]);
  @ViewChild('filter', { static: false}) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  typeOptions = [ 
    { title: 'Short text field', type: 101 },
    { title: 'Textarea field', type: 102 },
    { title: 'Number field', type: 103 },
    { title: 'Dropdown field', type: 104 },
    { title: 'English date field', type: 106 },
    { title: 'Hebrew date field', type: 110 },
    { title: 'Checkbox field', type: 107 },
    { title: 'Email field', type: 108 },
    { title: 'Phone number filed', type: 109 },
    { title: 'Fields group', type: 113 },
  ];

  widthOptions = [
    { title: '4 columns', value: 'full' },
    { title: '3 columns', value: 'three-quarter' },
    { title: '2 columns', value: 'half' },
    { title: '1 column', value: 'quarter' }
  ];


  constructor(
    private service: SideBarService,
    private popup: Popup,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  ngAfterViewChecked(): void {
      this.cdr.detectChanges();
  }

  getConnectedIds () {
    const sections = this.treeSource.getActiveSections().map(section => section['path'].join('|'));
    const groups = this.treeSource.getActiveGroups().map(group => group['path'].join('|'));
    return ['root-list', ...sections, ...groups]
  }

  ngOnInit() {
    this.treeControl = new NestedTreeControl<any>(node => {
      const children = node[CHILDREN_SYMBOL];
      return children;
    });


    this.treeSource.changes.subscribe(nodes => {
      if (this._form) {
        this._form.fields = this.treeSource.toForm();
      }
    });
    this.service.sectionSubject.subscribe(data => {
      console.log('sect', data);
      this.sectionDetailed = data;
      this.isTree = isEmpty(this.sectionDetailed);
    });
    this.service.events$.subscribe(event => {
      if (event['action'] === 'remove') {
        console.log(`event`, event['target']);
        event['target'].isActive = false;
        if (event['target'].type === 113 || event['target'].type === 114) {

          let children = this.treeSource.getParentChildren(event['target']);
          if (children.length === 1 && children[0] === event['target']) {
            console.log('114?')
            event['target']['fields'].forEach(field => {
              for (let child of this.treeSource.getParentChildren(field)) {
                child.isActive = false;
              }
              this.treeControl.collapseDescendants(field);
            })
          } else {
            for (const child of children) {
              child.isActive = false;
              this.treeControl.collapseDescendants(event['target']);
            }

          }
          this.treeSource.refresh();
          this.cdr.markForCheck();
        }
        // const f = this._form.fields.find(field => field === event.target);
        // console.log(f);
        // // event['target']['fields']
        // this._form.fields = this._form.fields.filter(field => field.path !== event['target']['path']);
      }
    });
  }
  hasChild = (_: number, node: any) => !!node[CHILDREN_SYMBOL] && node[CHILDREN_SYMBOL].length > 0;


  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  canCreateField(node) {
    return (node.type === 113 || node.type === 114) && this.treeControl.isExpanded(node);
  }

  customFieldToggle(node) {
    if (!node.formVisible) {
      node.customFieldForm = this.fb.group({
        name: [null],
        type: [null],
        width: [null]
      });
    } else {
      delete node.customFieldForm;
    }
    node.formVisible = !(!!node.formVisible);
  }

  showCreateField(node) {
    return node.formVisible;
  }


  drop(event: CdkDragDrop<any>) {
    console.log('drop', event);

    const node = event.item.data;
    if (event.container.id !== 'sidebar-list') {
      if (!node.isActive) {
        if (node.type === 113 || node.type === 114) {
          this.toggleParentNode(node);
        } else {
          this.toggleNode(node);
        }
      }
    }

  }

  onExit(event: CdkDragExit<any>) {
    console.log(event);
  }




  openDeletePop(node: any) {
    console.log('Node for del',node);
    if (!node) { return; }

    this.delInput.reset();
    this.nodeForDel = node;
    this.delFieldName = node.name.toUpperCase();
    this.ref = this.popup.open({
      origin: null,
      content: this.deletePop,
      panelClass: 'centered-panel'
    });
    this.ref.afterClosed$.subscribe(result => {
      this.ref = null;
    });
  }

  closePop() {
    this.ref.close();
  }

  deleteNode() {
    if (this.delFieldName === this.delInput.value) {
      console.log('Delete field', this.delFieldName);
      this.treeSource.deleteNode(this.nodeForDel);
    }
    this.closePop();
  }

  isFiltered(node) {
    if (this.filterValue) {
      return !node.name.toLowerCase().startsWith(this.filterValue);
    } else {
      return !!this.filterValue;
    }
  }


  shouldRender(node) {
    if (!this.filterControl.value) { return true; }
    return  this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  toggleParentNode(node: any): void {
    let children = this.treeSource.getParentChildren(node);
    if (this.descendantsAllSelected(node)) {
      node.isActive = false;
    } else if (this.descendantsNotSelected(node)) {
      node.isActive = !node.isActive;
    } else if (this.descendantsPartiallySelected(node)) {
      node.isActive = false;
    } else {
      node.isActive = true;
      children = this.treeSource.getParentChildren(node);
    }
    for (const child of children) {
      child.isActive = node.isActive;
    }
    if (node.isActive) {
      if (!node.isExpanded) {
        this.treeControl.expandDescendants(node);
      }
    } else {
      if (node.isExpanded) {
        this.treeControl.collapseDescendants(node);
      }
    }
    this.treeSource.refresh();
    this.cdr.markForCheck();
    // if (node.isActive) this.service.event = {action: 'expand', target: node}
  }

  nodeIsChecked(node) {
    const isChecked = node.isActive === true && this.descendantsAllSelected(node);
    return isChecked;
  }

  nodeIsIndeterminate(node) {
    const isIndeterminate = node.isActive === true && this.descendantsPartiallySelected(node);
    return isIndeterminate;
  }

  toggleNode(node: any): void {
    const ancestors = this.treeSource.getAncestors(node);
    node.isActive = !node.isActive;
    for (const ancestor of ancestors) {
      if (node.isActive) {
        if (ancestor.type && (ancestor.type === 113 || ancestor.type === 114)) {
          ancestor.isActive = true;
          // this.service.event = {action: 'expand', target: ancestor};
        }
      } else {
        if (!this.descendantsPartiallySelected(ancestor)) {
          ancestor.isActive = false;
          this.treeControl.collapse(ancestor);
          // this.service.event = {action: 'collapse', target: ancestor};
        }
      }
    }
    this.treeSource.refresh();
  }

  descendantsAllSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const allSelected =  descendants.every(node => node['isActive']);
    return allSelected;
  }

  descendantsNotSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const notSelected =  descendants.every(node => !node['isActive']);
    return notSelected;
  }

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(node => node['isActive']);
    return result && !this.descendantsAllSelected(node);
  }

  addCustomField(node: any) {
    const formValue = node.customFieldForm.value;
    let newField = {
      type: formValue.type ? formValue.type[0].type : null,
      name: formValue.name,
      width: formValue.width ? formValue.width[0].value : null,
      mapped: formValue.name.toLowerCase().replace(' ', '_'),
      customField: true,
      isActive: false,
      exist: false
    };
    this.treeSource.addCustomField(node, newField);
    this.customFieldToggle(node);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.isTree = true;
  }
}
