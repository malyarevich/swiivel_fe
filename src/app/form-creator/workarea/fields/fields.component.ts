import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { fields } from '@shared/fields';


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements OnInit {
  treeControl = new FlatTreeControl<any>(node => node.level, field => field.type === 113 || field.type === 114);
  fieldsTree = this.fs.toFlatTree(fields.slice()).reverse();
  treeSource = new ArrayDataSource(this.fieldsTree);
  constructor(private fs: FieldService) {

  }

  ngOnInit() {
  }

  hasChild = (_: number, node: any) => node.expandable;

  getParentNode(node: any) {
    const parentNode = this.fieldsTree.filter(field => field.type === 113 || field.type === 114).find((field) => {
      return field.prefix === node.prefix;
    });
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
    return should;
  }

}
