import { ArrayDataSource, DataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { TreeDataSource } from '../tree.datasource';


@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class SidebarFieldsComponent implements OnInit {
  treeControl = new FlatTreeControl<any>(node => node.level, field => field.type === 113 || field.type === 114);
  sidebar: any[] = [];
  fieldsTree: any[];
  treeSource = new TreeDataSource();
  filter: FormControl = new FormControl();

  constructor(private fs: FieldService, private api: ApiService) {
    this.api.getSidebarFields().subscribe((sidebar) => {
      this.sidebar = sidebar;
      this.fieldsTree = this.fs.toFlatTree(this.sidebar.slice());
      this.fieldsTree.reverse();
      this.treeSource.data = this.fieldsTree;
    })
  }

  ngOnInit() {
    this.filter.valueChanges.subscribe((filter: string) => {
      if (filter && filter.length > 0) {
        this.treeSource.data = this.fieldsTree.filter(field => field.name.includes(filter));
      } else {
        this.treeSource.data = this.fieldsTree;
      }
    });
  }

  hasChild = (_: number, node: any) => node.expandable;

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


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

}
