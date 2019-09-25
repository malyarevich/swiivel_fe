import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { TREE_ACTIONS, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
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
  constructor(private service: FormCreatorService, private fb: FormBuilder, private api: ApiService) {
    this.api.getSidebarFields().subscribe((fields) => {
      this.sidebarFields = fields;
    });
    this.service.section$.subscribe(section => {
      this.expandedSection = section;
    });
    this.sections = this.fb.group({
      intro: [null],
      fields: [null],
      consent: [null]
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


}
