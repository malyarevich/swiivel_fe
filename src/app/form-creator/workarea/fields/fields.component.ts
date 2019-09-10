import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { fields, sidebar } from '@shared/fields';


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class WorkareaFieldsComponent implements OnInit {
  treeControl = new FlatTreeControl<any>(node => node.level, node => !!node.expandable);
  fieldsTree = this.fs.toFlatTree(sidebar);
  treeSource = new ArrayDataSource(this.fieldsTree);
  constructor(private fs: FieldService) {

  }

  ngOnInit() {
    console.table(this.fs.toFlatTree(sidebar));
    console.table(sidebar);

  }

  hasChild = (_: number, node: any) => node.expandable;

  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.fieldsTree.level === node.level - 1) {
        return this.fieldsTree;
      }
    }

    return null;
  }
  shouldRender(node: any) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }

}
