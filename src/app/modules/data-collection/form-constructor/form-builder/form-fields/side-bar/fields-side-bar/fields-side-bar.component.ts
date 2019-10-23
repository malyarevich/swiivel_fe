import { Component, Input, OnDestroy, OnInit, ChangeDetectorRef, ViewChild, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { isEmpty, flattenDeep } from 'lodash';
import { Form } from 'src/app/models/data-collection/form.model';
import { SideBarService } from '../side-bar.service';
import { TreeDataSource, getActive } from '../tree.datasource';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { FormControl, FormBuilder } from '@angular/forms';
import { Popup } from '@app/core/popup.service';
import { v4 as uuid } from 'uuid';

const unwrap = (fields) => {
  let result = [];
  fields.forEach((field) => {
    if (field.type === 114) {
      result.push(...unwrap(field.fields));
    } else {
      result.push(field);
    }
  });
  return result;
}

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
    const unwrap = (fields) => {
      let result = [];
      fields.forEach((field) => {
        if (field.type === 114) {
          result.push(...unwrap(field.fields));
        } else {
          result.push(field);
        }
      });
      return result;
    }
    if (fields) {
      this._sideBar = fields;

      this.treeSource.nodes = this._sideBar;
      this.cdr.markForCheck();
    }
  }

  @Input() set form(form) {



    this._form = form;
    this.service.form = form;
    // this.service.fields = form.fields;
    // if (this._sideBar) {
    // this.treeSource.nodes = this._form.fields;
    // this.treeSource.reload()
    // }

    // this.cdr.markForCheck()
    console.log(JSON.parse(JSON.stringify(this.treeSource.nodes)))
  }
  @Input() set section(what) {
    console.log(what);
  }
  @Input() displayOnly = false;
  @Input() idSectionForDragDrop: string[];
  @Output() selectedField: EventEmitter<any> = new EventEmitter<any>();
  isTree = true;
  sectionDetailed;
  searchText: string;
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl((node: any) => node.fields);
  @ViewChild('filter', { static: false }) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  typeOptions = [
    { title: 'Short text field', type: 101 },
    { title: 'Textarea field', type: 102 },
    { title: 'Number field', type: 103 },
    { title: 'Dropdown field', type: 105 },
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
  ) { }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  getConnectedIds() {
    const sections = this.treeSource.getActiveSections().map(section => section['path'].join('|'));
    const groups = this.treeSource.getActiveGroups().map(group => group['path'].join('|'));
    return ['root-list', ...sections, ...groups]
  }

  getGroupPathIds() {
    return this.service.pathIds.slice(0, -3).concat('root-list');
  }

  ngOnInit() {
    this.treeControl.getDescendants = (dataNode) => {
      return dataNode.fields;
    }
    this.treeSource.activeFields$.subscribe((fields) => {

      // if (this._form.fields.length > 0) {
      //   let wp = this.treeSource.isWrappedBySection(this._form.fields);
      //   console.log(wp);
      //   if (wp) {
      //     unwrap(this._form.fields)
      //     console.log(unwrap(this._form.fields), getActive(fields));
      //   }
      // }
      if (fields.length > 0) {
        fields = JSON.parse(JSON.stringify(fields));
        this.service.fields = getActive(fields);
        // console.log('afs', fields)
        // let wrapped = this.treeSource.wrapIfNeeded(fields);
        // console.log(fields, wrapped, getActive(wrapped), getActive(fields));
      } else {
        this.service.fields = [];
      }
    });
    this.service.events$.subscribe((event: any) => {
      if (event.action === 'remove') {
        let target = this.treeSource.findNodeByPathId(event.target.pathId);
        if (target) {
          if (target.type === 113 || target.type === 114) {
            this.toggleParentNode(target);
          } else {
            this.toggleNode(target);
          }
          this.cdr.markForCheck();
        } else if (event.target.type === 114) {
          event.target.fields.forEach((field: any) => {
            this.toggleParentNode(this.treeSource.findNodeByPathId(field.pathId))
          })
        }
      }
    });
  }
  hasChild = (_: number, node: any) => {
    return !!node && !node.isWrapper && Array.isArray(node.fields) && node.type > 111;
  }


  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  canCreateField(node) {
    return ((node.type === 113 || node.type === 114) && !this.displayOnly) && node.isExpanded;
  }

  selectField(node: any) {
    this.selectedField.emit(node);
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
    console.log('Node for del', node);
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
      this.treeSource.remove(this.nodeForDel);
      this.treeSource.reload();
      this.cdr.markForCheck();
      this.service.events$.next({ action: 'update', data: this.treeSource.nodes });
      this.closePop();
    }
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
    return this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  toggleExpand(node) {
    node.isExpanded = !node.isExpanded;
    if (node.isExpanded) {
      this.treeControl.collapseDescendants(node);
    } else {
      this.treeControl.expandDescendants(node);
    }
  }

  toggleParentNode(node: any): void {
    this.treeSource.toggle(node);
    if (node.isActive) {
      if (!this.treeControl.isExpanded(node)) {
        this.treeControl.expandDescendants(node);
      }
    } else {
      if (this.treeControl.isExpanded(node)) {
        this.treeControl.collapseDescendants(node);
      }
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }

  nodeIsChecked(node) {
    if (!node.isActive) return false;
    if (node.type === 113 || node.type === 114) {
      const isChecked = node.isActive === true && Array.from(this.treeSource.tree.treeIterator(node)).every((field: any) => field.isActive);
      return isChecked;
    } else {
      return node.isActive;
    }
  }

  nodeIsIndeterminate(node) {
    let tree = this.treeSource.tree.treeIterator(node);
    tree.next();
    let children = Array.from(tree);
    let active = children.filter((child: any) => child.isActive);
    const isIndeterminate = node.isActive === true && active.length > 0 && active.length < children.length;
    return isIndeterminate;
  }

  toggleNode(node: any): void {
    this.treeSource.toggle(node);
    if (!node.isActive) {
      let topInactive: any;
      for (const ancestor of this.treeSource.parentsOf(node)) {
        if (!ancestor.isActive) {
          topInactive = ancestor;
        }
      }
      this.treeControl.collapse(topInactive);
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }

  descendantsAllSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const allSelected = descendants.every(node => node['isActive']);
    return allSelected;
  }

  descendantsNotSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const notSelected = descendants.every(node => !node['isActive']);
    return notSelected;
  }

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(node => node['isActive']);
    return result && !this.descendantsAllSelected(node);
  }

  addCustomField(node: any) {
    const formValue = node.customFieldForm.value;
    if (!formValue.type || !formValue.width) return false;
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
    this.service.events$.next({ action: 'update', data: this.treeSource.nodes });
  }

  ngOnDestroy(): void {
    this.isTree = true;
  }
}
