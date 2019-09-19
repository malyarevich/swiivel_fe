import { ArrayDataSource, SelectionModel } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldService } from '@app/core/field.service';
import { fields, sidebar } from '@shared/fields';


@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class SidebarFieldsComponent implements OnInit {
  treeControl = new FlatTreeControl<any>(node => node.level, field => field.type === 113 || field.type === 114);
  fieldsTree = this.fs.toFlatTree(sidebar.slice()).reverse();
  treeSource = new ArrayDataSource(this.fieldsTree);
  filter: FormControl = new FormControl();

  dragNode: any;
  @ViewChild('emptyItem', {static: false}) emptyItem: ElementRef;
  dragNodeExpandOverNode: any;
  dragNodeExpandOverTime: number;
  dragNodeExpandOverWaitTimeMs: number;
  dragNodeExpandOverArea: string;

  checklistSelection = new SelectionModel<any>(true);
  
  constructor(private fs: FieldService) {

  }

  ngOnInit() { }

  hasChild = (_: number, node: any) => node.expandable;

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  // getParentNode(node: any) {
  //   const parentNode = this.fieldsTree.filter(field => field.type === 113 || field.type === 114).find((field) => {
  //     return field.prefix === node.prefix;
  //   });
  //   return parentNode;
  // }
  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.fieldsTree[i].level === node.level - 1) {
        return this.fieldsTree[i];
      }
    }
    return null;
  }
  shouldRender(node: any) {
    const parent = this.getParentNode(node);
    const should = !parent || parent.expanded;
    return should;
  }



  handleDragStart(event, node) {
    // Required by Firefox (https://stackoverflow.com/questions/19055264/why-doesnt-html5-drag-and-drop-work-in-firefox)
    event.dataTransfer.setData('foo', 'bar');
    event.dataTransfer.setDragImage(this.emptyItem.nativeElement, 0, 0);
    this.dragNode = node;
    this.treeControl.collapse(node);
  }

  handleDragOver(event, node) {
    event.preventDefault();

    // Handle node expand
    if (node === this.dragNodeExpandOverNode) {
      if (this.dragNode !== node && !this.treeControl.isExpanded(node)) {
        if ((new Date().getTime() - this.dragNodeExpandOverTime) > this.dragNodeExpandOverWaitTimeMs) {
          this.treeControl.expand(node);
        }
      }
    } else {
      this.dragNodeExpandOverNode = node;
      this.dragNodeExpandOverTime = new Date().getTime();
    }

    // Handle drag area
    const percentageX = event.offsetX / event.target.clientWidth;
    const percentageY = event.offsetY / event.target.clientHeight;
    if (percentageY < 0.25) {
      this.dragNodeExpandOverArea = 'above';
    } else if (percentageY > 0.75) {
      this.dragNodeExpandOverArea = 'below';
    } else {
      this.dragNodeExpandOverArea = 'center';
    }
  }

  handleDragEnd(event) {
    this.dragNode = null;
    this.dragNodeExpandOverNode = null;
    this.dragNodeExpandOverTime = 0;
  }

  descendantsAllSelected(node): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  descendantsPartiallySelected(node): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  todoItemSelectionToggle(node): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  // handleDrop(event, node) {
  //   event.preventDefault();
  //   if (node !== this.dragNode) {
  //     let newItem: any;
  //     if (this.dragNodeExpandOverArea === 'above') {
  //       newItem = this.database.copyPasteItemAbove(this.flatNodeMap.get(this.dragNode), this.flatNodeMap.get(node));
  //     } else if (this.dragNodeExpandOverArea === 'below') {
  //       newItem = this.database.copyPasteItemBelow(this.flatNodeMap.get(this.dragNode), this.flatNodeMap.get(node));
  //     } else {
  //       newItem = this.database.copyPasteItem(this.flatNodeMap.get(this.dragNode), this.flatNodeMap.get(node));
  //     }
  //     this.database.deleteItem(this.flatNodeMap.get(this.dragNode));
  //     this.treeControl.expandDescendants(this.nestedNodeMap.get(newItem));
  //   }
  //   this.dragNode = null;
  //   this.dragNodeExpandOverNode = null;
  //   this.dragNodeExpandOverTime = 0;
  // }

}
