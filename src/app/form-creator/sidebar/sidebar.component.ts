import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { TREE_ACTIONS, TreeNode } from 'angular-tree-component';
import { Popup } from '@app/core/popup.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TreeDataSource } from '../tree.datasource';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<any>(node => node.fields);
  checklistSelection = new SelectionModel<any>(true);
  treeSource = new TreeDataSource();
  expandedSection: string;
  sections: FormGroup;
  sidebarFields = [];
  sidebarOptions = {
    idField: 'mongo_id',
    childrenField: 'fields',
    displayField: 'name',
    useCheckbox: true,
    allowDrop: false,
    allowDrag: true,
    actionMapping: {
      mouse: {
        checkboxClick: (tree, node: TreeNode, $event) => {
          TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
          if (node.isSelected) {
            if (node.isRoot) {
              node.expandAll();
            }
            this.service.addField(node);
          } else {
            if (node.isRoot) {
              node.collapseAll();
            }
            this.service.removeField(node);
          }
        }
      }
    }
  };
  delFieldName: string;
  delInput: FormControl = new FormControl('MIDDLE NAME');
  ref: any;
  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(private service: FormCreatorService, private fb: FormBuilder, private api: ApiService, private popup: Popup) {
    this.api.getSidebarFields().subscribe((fields) => {
      console.log('Get fields', fields);
      this.treeSource = fields;
    })
    this.service.section$.subscribe(section => {
      this.expandedSection = section;
    });
    this.sections = this.fb.group({
      intro: [null],
      fields: [null]
    });
    this.sections.valueChanges.subscribe(value => {
      this.service.sections = value;
    });
  }

  isExpanded(section: string) {
    return this.expandedSection === section;
  }

  onClick(section: string, event?: MouseEvent) {
    if (section !== this.expandedSection) {
      this.service.section = section;
    }
  }

  ngOnInit() { }

  hasChild = (_: number, node: any) => !!node.fields && node.fields.length > 0;

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
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
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  descendantsAllSelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  descendantsPartiallySelected(node: any): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  toggleNode(node: any) {
    this.checklistSelection.toggle(node);
  }

  isSelectedNode(node: any) {
    return this.checklistSelection.isSelected(node);
  }



}
