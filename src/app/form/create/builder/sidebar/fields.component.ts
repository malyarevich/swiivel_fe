import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewChecked, OnDestroy, Input, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormService } from '@app/form/form.service';
import { CdkDragDrop, CdkDragExit } from '@angular/cdk/drag-drop';
import { TreeDataSource, CHILDREN_SYMBOL } from '../../tree.datasource';
import { Popup } from '@app/core/popup.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
// import fields from '@app/shared/fields';


@Component({
  selector: 'sw-form-create-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit, AfterViewChecked, OnDestroy {
  filterValue: string = null;
  filterControl = new FormControl();
  treeSource = new TreeDataSource('Sidebar');
  treeControl = new NestedTreeControl((node: any) => node.fields);
  activeTree: any[];
  breadcrumbs: any[] = null;
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;
  destroyed$ = new Subject();
  id = 'sidebar-list';
  dropListsIds = [];
  @ViewChild('filter', { static: false }) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;
  @ViewChild('widget', { static: true }) widget;
  @Input()
  set form(_form) {
    // _form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
    //   if (this.firstRun && !!value.activeSections.formFields.showSideIndo) {
    //     this.treeControl.expandAll();
    //     console.log('expand');
    //     this.firstRun = false;
    //   }
    // });
    // console.log('Fields INput form', _form);
  }

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
      this.cdr.markForCheck();
    });
    this.treeControl.getDescendants = (dataNode) => {
      return dataNode.fields;
    }
    this.route.paramMap.subscribe(params => {
      
      if (params.has('mongo_id')) {
        this.treeControl = new NestedTreeControl<any>(node => {
          let children = node[CHILDREN_SYMBOL];
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
    } else {
      this.activeTree = root.fields;
      this.breadcrumbs = root.path;
    }
    this.cdr.markForCheck();
  }

  getListId(node) {
    let listId = [...this.service.getParentPaths(node), node.name, node.type].join('');
    return listId;
  }

  clone(node) {
    return cloneDeep(node);
  }
  exit(event) {
    // if (event.container.id === 'sidebar-list') {
    //   debugger;
    // }
    console.log(event)
  }

  getListsIds(node?) {
    let listIds = this.service.getListsIds();
    if (!node) {
      listIds = listIds.filter((id) => id.endsWith('114') || id.endsWith('113'));
      listIds.push('root-list');
      // listIds.push('sidebar-list')
      return listIds;
    }
    let filterType = node.type;
    let nodeId = this.getListId(node);
    if (filterType === 113) {
      listIds = listIds.filter((id) => id.endsWith('113') || id.endsWith('114'));
      listIds.push('root-list')
    }
    return listIds.filter(id => id !== nodeId);
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges()
  }

  hasChild = (_: number, node: any) => !!node.fields && node.fields.length > 0;



  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  canCreateField(node) {
    return (node.type === 113 || node.type === 114) && this.treeControl.isExpanded(node);
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
    console.log(event)
  }

  nodeIsIndeterminate(node) {
    let tree = this.treeSource.tree.treeIterator(node);
    tree.next();
    let children = Array.from(tree);
    let active = children.filter((child: any) => child.isActive);
    const isIndeterminate = node.isActive === true && active.length > 0 && active.length < children.length;
    return isIndeterminate;
  }


  openDeletePop(node: any) {
    if (!node && !node.data) return;

    this.delInput.reset();
    this.delFieldName = node.data.name.toUpperCase();
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
    }
    this.closePop();
  }

  isExpanded(node) {
    if (this.filterValue !== null) return true;
    else {
      return this.treeControl.isExpanded(node);
    }
  }

  isFiltered(node) {
    if (this.filterValue) {
      return !(node.name as string).toLowerCase().includes(this.filterValue)
    } else {
      return !!this.filterValue;
    }
  }


  shouldRender(node) {
    if (!this.filterControl.value) return true;
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
  addCustomField(node) {
    console.log(`custom`, node)
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


}
