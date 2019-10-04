import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormCreatorService } from '../form-creator.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { TreeDataSource, CHILDREN_SYMBOL } from '../tree.datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { Popup } from '@app/core/popup.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import fields from '@app/shared/fields';


@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit, AfterViewChecked, OnDestroy {
  filterValue: string = null;
  filterControl = new FormControl();
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl(node => node[CHILDREN_SYMBOL]);
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  nodeForDel: any;
  ref: any;
  destroyed$ = new Subject();

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

  @ViewChild('filter', { static: false}) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(
    private service: FormCreatorService,
    private fb: FormBuilder,
    private api: ApiService,
    private popup: Popup,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    ) {

  }

  activate(node, event) {
    return event;
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.treeSource.changes.pipe(takeUntil(this.destroyed$)).subscribe(value => {
        this.cdr.markForCheck();
      })
      if (params.has('mongo_id')) {
        this.treeControl = new NestedTreeControl<any>(node => {
          let children = node[CHILDREN_SYMBOL];
          return children;
        });
        this.service.formTemplate$.pipe(takeUntil(this.destroyed$)).subscribe(value => {
          if (value) {
            this.treeSource.build(value.fields);
            this.service.sidebar = this.treeSource;
            this.cdr.markForCheck();
          }
        })
      } else {
        this.api.getSidebarFields().pipe(takeUntil(this.destroyed$)).subscribe((fields) => {
          this.treeControl = new NestedTreeControl<any>(node => {
            let children = node[CHILDREN_SYMBOL];
            return children;
          });
          this.treeSource.build(fields);
          this.service.sidebar = this.treeSource;
        });
      }
    });


    this.filterControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      if (value && value.length > 0) {
        this.filterValue = value.toLowerCase();
      } else {
        this.filterValue = null;
      }
      console.log(this.filterValue);
    });
  }
  ngAfterViewChecked(): void {
      this.cdr.detectChanges()
  }

  hasChild = (_: number, node: any) => !!node[CHILDREN_SYMBOL] && node[CHILDREN_SYMBOL].length > 0;



  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  canCreateField(node) {
    return (node.type === 113 || node.type === 114) && this.treeControl.isExpanded(node);
  }

  customFieldToggle(node) {
    node.formVisible = !(!!node.formVisible);
    if (node.formVisible) {
      node.customFieldForm = this.fb.group({
        name: [null],
        type: [null],
        width: [null]
      });
    } else {
      delete node.customFieldForm;
    }
  }

  showCreateField(node) {
    return node.formVisible;
  }


  drop(event: CdkDragDrop<any>) {

    let node = event.item.data;
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
    console.log(event)
  }




  openDeletePop(node: any) {
    if (!node) return;

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
    console.log(this.delFieldName === this.delInput.value);
    if (this.delFieldName === this.delInput.value) {
      this.treeSource.deleteNode(this.nodeForDel);
    }
    this.closePop();
  }

  isFiltered(node) {
    if (this.filterValue) {
      return !node.name.toLowerCase().startsWith(this.filterValue)
    } else {
      return !!this.filterValue;
    }
  }


  shouldRender(node) {
    if (!this.filterControl.value) return true;
    return  this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  toggleParentNode(node: any): void {
    let children = this.treeSource.getParentChildren(node);
    if (this.descendantsAllSelected(node)) {
      node.isActive = false;
    } else if (this.descendantsPartiallySelected(node)) {
      node.isActive = false;
    } else {
      node.isActive = true;
      children = this.treeSource.getChildren(node);
    }
    for (let child of children) {
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
  }

  toggleNode(node: any): void {
    const ancestors = this.treeSource.getAncestors(node);
    node.isActive = !node.isActive;
    for (let ancestor of ancestors) {
      if (node.isActive) {
        if (ancestor.type && (ancestor.type === 113 || ancestor.type === 114)) {
          ancestor.isActive = true;
          this.service.event = {action: 'expand', target: ancestor};
        }
      } else {
        if (!this.descendantsPartiallySelected(ancestor)) {
          ancestor.isActive = false;
          this.treeControl.collapse(ancestor);
          this.service.event = {action: 'collapse', target: ancestor};
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

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(node => node['isActive']);
    return result && !this.descendantsAllSelected(node);
  }

  addCustomField(node: any) {
    const formValue = node.customFieldForm.value;
    let newField = {
      name: formValue.name,
      type: formValue.type ? formValue.type[0].type : null,
      width: formValue.width ? formValue.width[0].value : null,
      mapped: formValue.name.toLowerCase().replace(' ', '_'),
      customField: true,
      isActive: false
    };
    node.fields.push(newField);
    this.customFieldToggle(node);
    // console.log('Node', node);
  }


}
