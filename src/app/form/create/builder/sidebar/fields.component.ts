import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, CdkDragExit, moveItemInArray, transferArrayItem, CdkDragStart } from '@angular/cdk/drag-drop';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewChecked, OnDestroy, Input, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, Form, Validators } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormService } from '@app/form/form.service';
import { TreeDataSource, CHILDREN_SYMBOL } from '../../tree.datasource';
import { Popup } from '@app/core/popup.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep, flattenDeep, flatMapDeep, defaultsDeep } from 'lodash';
import * as icons from '@app/core/icons';
import { ActivatedRoute } from '@angular/router';
// import fields from '@app/shared/fields';


@Component({
  selector: 'sw-form-create-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit, AfterViewChecked, OnDestroy {
  icons = icons;
  filterValue: string = null;
  filterControl = new FormControl();
  treeSource = new TreeDataSource('Sidebar');
  treeControl = new NestedTreeControl((node: any) => node.fields);
  activeTree: any[];
  breadcrumbs: any[] = null;
  canCreateField = false;
  fieldTypes = [];
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  customForm: FormGroup;
  ref: any;
  fieldToDelete;
  destroyed$ = new Subject();
  id = 'sidebar-list';
  showForm = false;
  dropListsIds = [];
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  @ViewChild('filter', { static: false }) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;
  @ViewChild('widget', { static: true }) widget;
  @Input() form;
  constructor(
    private service: FormService,
    private fb: FormBuilder,
    private api: ApiService,
    private popup: Popup,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {
    this.service.dropLists$.subscribe((ids) => {
      this.dropListsIds = Array.from(ids);
    });
    this.customForm = this.fb.group({
      'name': ['', [Validators.required]],
      'type': [101, [Validators.required]],
      'options': this.fb.group({
        'size': [3, [Validators.required]],
      }),
    });
    // this.customForm
  }


  activate(node, event) {
    return event;
  }
  ngOnDestroy() {
    if (typeof(this.widget.close) === 'function') this.widget.close();
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }



  ngOnInit() {
    this.service.sidebar.subscribe((sidebar) => {
      this.treeSource.nodes = cloneDeep(sidebar);
      if (!!sidebar && !this.activeTree) {
        this.activeTree = this.treeSource.nodes;
        if (!this.treeControl.dataNodes) {
          this.treeControl.dataNodes = this.activeTree;
          this.treeControl.expandAll();
        }
      }
      this.fieldTypes = this.service.fieldTypes.schema.map((type) => {
        return {value: type.type, title: type.name}
      });
      this.cdr.markForCheck();
    });
    this.treeControl.getDescendants = (dataNode) => {
      return dataNode.fields;
    };
    this.route.paramMap.subscribe(params => {

      if (params.has('mongo_id')) {
        this.treeControl = new NestedTreeControl<any>(node => {
          const children = node[CHILDREN_SYMBOL];
          return children;
        });
      }
    });

    
    


    this.filterControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      if (value && value.length > 0) {
        this.filterValue = value.toLowerCase();
      } else {
        this.filterValue = null;
      }
    });
  }

  get customType() {
    if (this.customForm.get('type').valid) {
      let selected = this.customForm.get('type').value;
      return this.fieldTypes.find(field => {
        return field.value === selected;
      });
    }
    return null;
  }

  isHidden(field) {
    if (!this.filterValue) return false;
    return !(this.filterValue && field.name.toLowerCase().includes(this.filterValue));
  }

  isGroupHidden(group) {
    if (!this.isHidden(group)) return false;
    else {
      let childVisible = group.fields.find((field) => {
        return !this.isHidden(field);
      });
      if (!childVisible) return true;
      else return false;
    }
  }



  onBreadcrumbClick(idx) {
    let paths = this.breadcrumbs.slice(0, idx + 1);
    let fields = this.treeSource.nodes;
    let next: any;
    paths.forEach((path) => {
      next = fields.find(field => field['name'] === path);
      if (next) fields = next['fields'];
    });
    this.setActiveTree(next);
  }

  setActiveTree(root?) {
    if (root === null) {
      this.activeTree = this.treeSource.nodes;
      this.breadcrumbs = null;
      this.canCreateField = null;
    } else {
      this.activeTree = root.fields;
      this.breadcrumbs = root.path;
      this.canCreateField = root;
    }
    this.cdr.markForCheck();
  }

  getListId(node) {
    const listId = [...this.service.getParentPaths(node), node.name, node.type].join('');
    return listId;
  }

  start(event: CdkDragStart){
    console.log(event);
  }

  expandAll(node) {
    if (!!node.isExpanded) {
      node.isExpanded = false;
    } else {
      node.isExpanded = true;
    }
    // this.treeSource.child
  }

  clone(node) {
    return cloneDeep(node);
  }
  exit(event) {
    // if (event.container.id === 'sidebar-list') {
    //   debugger;
    // }
    console.log(event);
  }

  getListsIds(node?) {
    let listIds = this.service.getListsIds();
    if (!node) {
      listIds = listIds.filter((id) => id.endsWith('114') || id.endsWith('113'));
      listIds.push('root-list');
      // listIds.push('sidebar-list')
      return listIds;
    }
    const filterType = node.type;
    const nodeId = this.getListId(node);
    if (filterType === 113) {
      listIds = listIds.filter((id) => id.endsWith('113') || id.endsWith('114'));
      listIds.push('root-list');
    }
    return listIds.filter(id => id !== nodeId);
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  hasChild = (_: number, node: any) => !!node.fields && node.fields.length > 0;



  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  customFieldToggle(node) {
    node.formVisible = !(!!node.formVisible);
  }

  showCreateField(node) {
    return node.formVisible;
  }

  drop(event: CdkDragDrop<any>) {
    if (event.container.id !== 'sidebar-list') {
      console.log(`${event.item.data.name} to ${event.container.id} at ${event.currentIndex}`, event.container.data);
      if (event.container.data instanceof FormArray) {
        console.log(event.currentIndex, event.previousIndex);
        this.service.addFieldFromSBToFormArray(event.item.data, event.container.data);
      } else if (event.container.data instanceof FormGroup) {
        this.service.addFieldFromSBToFormGroup(event.item.data, event.container.data);
      }
    }
  }





  onExit(event: CdkDragExit<any>) {
    console.log(event);
  }

  nodeIsIndeterminate(node) {
    const tree = this.treeSource.tree.treeIterator(node);
    tree.next();
    const children = Array.from(tree);
    const active = children.filter((child: any) => child.isActive);
    const isIndeterminate = node.isActive === true && active.length > 0 && active.length < children.length;
    return isIndeterminate;
  }

  onDelete(field) {
    if (field) {
      this.fieldToDelete = field;
      this.ref = this.popup.open({
        origin: null,
        content: this.deletePop,
        panelClass: 'centered-panel'
      });
      this.ref.afterClosed$.subscribe(confirm => {
        if (confirm) this.deleteField(field);
        this.ref = null;
      });
    }
  }

  checkDeleteInput() {
    let result =  this.delInput.value === this.fieldToDelete.name.toUpperCase();
    if (result === true) {
      this.ref.close(true);
    }
  }

  deleteField(field) {
    console.log(`delete field`, field);
    this.treeSource.deleteNode(field);
    this.service.removeFieldFromSB(field);
    this.canCreateField['fields'] = this.canCreateField['fields'].filter(cfield => cfield !== field);
    this.activeTree = this.canCreateField['fields'];
    this.cdr.detectChanges();
  }

  closePop() {
    this.ref.close();
  }

  isFiltered(node) {
    if (this.filterValue) {
      if (node.type < 113) {
        let found = (node.name as string).toLowerCase().includes(this.filterValue);
        if (found) {
          for (let parent of this.treeSource.tree.ancestorsIterator(node)) {
            if (parent.type && parent.type > 112) {
              parent.isFiltered = true;
            }
          }
        }
        if (!!found) console.log(node.name);
        return !!found;
      } else {
        return !node.isFiltered;
      }
    } else {
      return !!this.filterValue;
    }
  }


  shouldRender(node) {
    if (!this.filterControl.value) { return true; }
    return this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  enableForm(){
    this.showForm = true;
    this.customForm.enable();
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }

  disableForm(){
    this.showForm = false;
    this.customForm.disable();
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }

  toggleExpand(node) {
    node.isExpanded = !node.isExpanded;
    if (node.isExpanded) {
      this.treeControl.collapseDescendants(node);
    } else {
      this.treeControl.expandDescendants(node);
    }
  }

  toggleNode(node: any): void {
    this.treeSource.toggle(node);
    if (!node.isActive) {
      this.service.removeFieldFromSB({...node});
      let topInactive: any;
      for (const ancestor of this.treeSource.parentsOf(node)) {
        if (!ancestor.isActive) {
          topInactive = ancestor;
        }
      }
      this.treeControl.collapse(topInactive);
    } else {
      this.service.addFieldFromSB({...node}, this.treeSource.indexOf(node));
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }

  toggleParentNode(node: any): void {
    this.treeSource.toggle(node);
    if (node.isActive) {
      this.service.addFieldFromSB({...node}, this.treeSource.indexOf(node));
      if (!this.treeControl.isExpanded(node)) {
        this.treeControl.expandDescendants(node);
      }
    } else {
      this.service.removeFieldFromSB({...node});
      if (this.treeControl.isExpanded(node)) {
        this.treeControl.collapseDescendants(node);
      }
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }
  
  addCustomField(event) {
    if (this.customForm.valid) {
      let newField = cloneDeep(this.customForm.value);
      defaultsDeep(newField, {custom: true, textType: this.customType.title});
      let proto = this.service.fieldTypes.schema.find(schema => schema.type === newField.type);
      newField.options = proto.options;
      newField.path = this.canCreateField['path'].concat(newField.name);
      this.canCreateField['fields'].push(newField);
      this.cdr.markForCheck();
    } else {
      console.log(this.customForm);
    }
  }

  nodeIsChecked(node) {
    if (!node.isActive) { return false; }
    if (node.type === 113 || node.type === 114) {
      const isChecked = node.isActive === true && Array.from(this.treeSource.tree.treeIterator(node)).every((field: any) => field.isActive);
      return isChecked;
    } else {
      return node.isActive;
    }
  }


}
