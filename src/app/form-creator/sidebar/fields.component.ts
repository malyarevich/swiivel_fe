import { Component, OnInit } from '@angular/core';
import { fields, sidebar } from '@shared/fields';
import { FieldService } from '@app/core/field.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';


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
  constructor(private fs: FieldService) {

  }

  ngOnInit() {
  }

  hasChild = (_: number, node: any) => node.expandable;

  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);
    console.log(nodeIndex, node)
    const parentNode = this.fieldsTree.filter(field => field.type === 113 || field.type === 114).find((field) => {
      return field.prefix === node.prefix;
    })
    // for (let i = nodeIndex - 1; i >= 0; i--) {
    //   if (this.fieldsTree.level === node.level - 1) {
    //     return this.fieldsTree;
    //   }
    // }

    return parentNode;
  }
  shouldRender(node: any) {
    const parent = this.getParentNode(node);
    const should = !parent || !parent.expanded;
    console.log(should);
    return should
  }

}
