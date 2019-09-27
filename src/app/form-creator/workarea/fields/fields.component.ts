import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { TreeDataSource } from '@app/form-creator/tree.datasource';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { Subject } from 'rxjs';

// import { fields } from '@shared/fields';

@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, OnInit, OnDestroy {
  options = {
    idField: 'mongo_id',
    childrenField: 'fields',
    displayField: 'name',
    useCheckbox: true,
    allowDrop: true,
    allowDrag: true
  };
  fields: any[] = [];
  destroyed$ = new Subject();
  fieldsTree: any[];
  treeSource;
  // treeSource = new TreeDataSource('Form');
  treeControl = new NestedTreeControl<any>(node => node.fields);

  constructor(private service: FormCreatorService, private api: ApiService, private cdr: ChangeDetectorRef) {
    this.service.sidebar.subscribe(sidebar => {
      this.treeSource = sidebar;
      this.cdr.markForCheck();
      console.log(this.treeSource);
      // console.log(sidebar.nodes)
      // this.treeSource = new TreeDataSource('Form', sidebar.nodes);
      // sidebar.selectedFields.subscribe((fields) => {
      //
      //   this.treeSource.update(fields);
      // });
    })
    // this.treeSource.changes.subscribe(change => {
    //   console.log('cha', change)
    // });
  }

  ngOnInit() {

  }
  ngOnDestroy() {
    // this.service.fields = this.tree.treeModel.getState()
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    // this.service.fieldChanges.pipe(takeUntil(this.destroyed$)).subscribe((change) => {
    //   if (change) {
    //     if (change.added) {
    //       this.tree.treeModel.nodes.push(change.field.data);
    //     } else {
    //       this.tree.treeModel.nodes.filter(node => node.data === change.field.data)
    //     }
    //     this.tree.treeModel.update();
    //     this.cdr.markForCheck();
    //   }
    // })

  }

  hasChild = (_: number, node: any) => !!node.fields && node.fields.length > 0;

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);
  }

  getHint(node: any) {
    console.log('Node Hint', node);
    return 'Group type';
  }
  shouldRender(node: any) {
    // console.log(node)
    // this.treeControl.
    // const parent = this.getParentNode(node);
    // const should = !parent || parent.expanded;
    // return should;
    return !!node.isSelected;
    // return true;
  }

  settingsTogle(node: any)  {
    if (node) {
      node.showSettings = !node.showSettings;
      this.cdr.markForCheck();
    }
  }
}
