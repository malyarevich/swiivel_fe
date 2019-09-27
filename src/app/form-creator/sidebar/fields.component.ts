import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormCreatorService } from '../form-creator.service';
// import { FieldService } from '@app/core/field.service';
import { TreeDataSource } from '../tree.datasource';
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

  checklistSelection = new SelectionModel<any>(true);
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl<any>(node => node.fields);
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;

  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(
    private service: FormCreatorService,
    private fb: FormBuilder,
    private api: ApiService,
    private popup: Popup,
    private cdr: ChangeDetectorRef
    ) {
      this.api.getSidebarFields().subscribe((fields) => {
        this.treeSource.build(fields);
      });
    // this.service.fieldChanges.subscribe(fields => {
    //
    //   // console.log('service value changes', fields)
    //   // if (fields) { this.treeSource.nodes = fields; }
    //   this.cdr.markForCheck()
    // });
  }

  // getChildren(node) {
  //   console.log(this);
  //   console.log(this.treeSource)
  //   console.log(node)
  //   // console.log(this);
  //   // let c = node[].childrenToArray(node);
  //   // console.log(c);
  //   return node.getChildren();
  //   // return node
  // }

  activate(node, event) {
    console.log(node)
    return event;
  }

  ngOnInit() {
    this.service.selectedFields.next(this.treeSource);
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
    // node.formVisible = !(!!node.formVisible);
    return node.formVisible;
    // return false;
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

  filterTree(filter: string) {
    console.log('filterTree', filter, this.treeControl);
  }

  toggleParentNode(node: any): void {
    const descendants = this.treeControl.getDescendants(node);
    node.isSelected = !node.isSelected;
    for (let descendant of descendants) {
      descendant.isSelected = node.isSelected;
    }
    if (node.isSelected) {
      if (!node.isExpanded) {
        this.treeControl.expandDescendants(node);
      }
    } else {
      if (node.isExpanded) {
        this.treeControl.collapseDescendants(node);
      }
    }
      this.service.selectedFields.next(this.treeControl.expansionModel.selected.filter(field => field.isSelected));
  }

  toggleNode(node: any): void {
    const ancestors = this.treeSource.getAncestors(node);
    node.isSelected = !node.isSelected;
    for (let ancestor of ancestors) {
      ancestor.isSelected = node.isSelected;
    }
    if (node.isSelected) {
      if (!node.isExpanded) {
        this.treeControl.expand(node);
      }
    } else {
      if (node.isExpanded) {
        this.treeControl.collapse(node);
      }
    }
    this.service.selectedFields.next(this.treeControl.expansionModel.selected.filter(field => field.isSelected));

  }

  descendantsAllSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => child.isSelected);
  }

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => child.isSelected);
    return result && !this.descendantsAllSelected(node);
  }

  isSelectedNode(node: any) {
    return this.checklistSelection.isSelected(node);
  }

}
