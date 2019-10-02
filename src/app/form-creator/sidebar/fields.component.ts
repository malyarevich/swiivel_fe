import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormCreatorService } from '../form-creator.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TreeDataSource, CHILDREN_SYMBOL } from '../tree.datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { Popup } from '@app/core/popup.service';
// import fields from '@app/shared/fields';


@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit {
  filterControl = new FormControl();
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl(node => node[CHILDREN_SYMBOL]);
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;
  @ViewChild('filter', { static: false}) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(
    private service: FormCreatorService,
    private fb: FormBuilder,
    private api: ApiService,
    private popup: Popup,
    private cdr: ChangeDetectorRef
    ) {

  }

  activate(node, event) {
    return event;
  }

  ngOnInit() {
    this.api.getSidebarFields().subscribe((fields) => {
      this.treeSource.build(fields);
      this.service.sidebar = this.treeSource;
      this.treeControl = new NestedTreeControl<any>(node => {
        let children = node[CHILDREN_SYMBOL];
        debugger
        return children;
      });
    });
    this.treeSource.changes.subscribe(value => {
      this.cdr.detectChanges();
    })
    this.filterControl.valueChanges.subscribe(value => {

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
    node.formVisible = !(!!node.formVisible);
  }

  showCreateField(node) {
    return node.formVisible;
  }


  drop(event: CdkDragDrop<any>) {
    if (!event.item.data.isSelected) {
      this.toggleNode(event.item.data);
    }
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


  shouldRender(node) {
    if (!this.filterControl.value) return true;
    return  this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  toggleParentNode(node: any): void {
    const children = this.treeSource.getChildren(node);
    if (this.descendantsAllSelected(node)) {
      node.isActive = false;
      // for (let child of children) {
      //   child.isActive = false;
      // }
    } else if (this.descendantsPartiallySelected(node)) {
      node.isActive = false;
    } else {
      node.isActive = true;
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
        }
      } else {
        if (!this.descendantsPartiallySelected(ancestor)) {
          ancestor.isActive = false;
          this.treeControl.collapse(ancestor);
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


}
