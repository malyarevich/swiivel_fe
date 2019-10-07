import { Component, Input, OnDestroy, OnInit, ChangeDetectorRef, ViewChild, AfterViewChecked } from "@angular/core";
import { isEmpty } from "lodash";
import { Form } from "src/app/models/data-collection/form.model";
import { SideBarService } from "../side-bar.service";
import { TreeDataSource, CHILDREN_SYMBOL } from '../tree.datasource';
import { NestedTreeControl } from '@angular/cdk/tree';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { Popup } from '@app/core/popup.service';


@Component({
  selector: "app-fields-side-bar",
  templateUrl: "./fields-side-bar.component.html",
  styleUrls: ["./fields-side-bar.component.scss"]
})
export class FieldsSideBarComponent implements OnInit, OnDestroy, AfterViewChecked {
  filterValue: string = null;
  filterControl = new FormControl();
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;
  _sideBar;
  @Input() set sideBar(fields) {
    this.treeSource.build(fields);
    this._sideBar = this.treeSource.nodes;
  }
  @Input() form: Form;
  @Input() idSectionForDragDrop: string[];
  isTree: boolean = true;
  sectionDetailed;
  searchText: string;
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl(node => node[CHILDREN_SYMBOL]);
  @ViewChild('filter', { static: false}) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(
    private service: SideBarService,
    private popup: Popup,
    private cdr: ChangeDetectorRef,) {}

  ngAfterViewChecked(): void {
      this.cdr.detectChanges()
  }
  ngOnInit() {
    this.treeControl = new NestedTreeControl<any>(node => {
      let children = node[CHILDREN_SYMBOL];
      return children;
    });
    // console.log(this.sideBar.slice());
    console.log(this.form);
    this.service.sectionSubject.subscribe(data => {
      this.sectionDetailed = data;
      this.isTree = isEmpty(this.sectionDetailed);
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
      children = this.treeSource.getParentChildren(node);
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
    // if (node.isActive) this.service.event = {action: 'expand', target: node}
  }

  toggleNode(node: any): void {
    const ancestors = this.treeSource.getAncestors(node);
    node.isActive = !node.isActive;
    for (let ancestor of ancestors) {
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

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(node => node['isActive']);
    return result && !this.descendantsAllSelected(node);
  }

  ngOnDestroy(): void {
    this.isTree = true;
  }
}
