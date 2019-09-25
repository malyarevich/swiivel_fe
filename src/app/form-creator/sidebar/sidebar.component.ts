import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { TREE_ACTIONS, TreeNode } from 'angular-tree-component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TreeDataSource } from '../tree.datasource';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<any>(node => node.fields);
  expandedSection: string;
  sections: FormGroup;
  sidebarFields = new TreeDataSource();

  constructor(private service: FormCreatorService, private fb: FormBuilder, private api: ApiService) {
    this.api.getSidebarFields().subscribe((fields) => {
      // let a = new TreeDataSource(fields);
      // this.sidebarFields = [];
      this.sidebarFields.nodes = fields;
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

  hasChild(_: number, node) {
    console.log(`hasChild` ,_ ,  node);
    return false;
  }

  isExpanded(section: string) {
    return this.expandedSection === section;
  }

  onClick(section: string, event?: MouseEvent) {
    if (section !== this.expandedSection) {
      this.service.section = section;
    }
  }

  onCheckBoxClick(node, event) {
    console.log('cbclick', node, event)
  }

  onStatusChange(node, active?: boolean) {
    this.sidebarFields.setActive(node, !!active);
    console.log(node);
  }

  ngOnInit() { }


}
