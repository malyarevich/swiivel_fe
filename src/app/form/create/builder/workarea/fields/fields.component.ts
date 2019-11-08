import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form/create/tree.datasource';
import { FormService } from '@app/form/form.service';
import { Subject } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, AfterViewChecked, OnInit, OnDestroy {
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
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl<any>(node => node.value.workspace);

  constructor(private service: FormService, private api: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.form$.subscribe( val => {
      this.treeSource.nodes = val.value.workspace.value;
      console.log('TREE SOURSE NODES', this.treeSource.nodes, )
    })
    this.service.events$.subscribe((event: any) => {
      if (event.action === 'update') {
        console.log('FORM VAL', this.service.form);
        let fields = cloneDeep(this.service.form.value.workspace);
        if (!!fields && fields.length > 0) {
          let section = fields.find(field => field.type === 114);
          if (!section) {
            console.warn(`No section wrapper, skip fields redraw`);
          } else {
            this.fields = fields;
            this.treeSource.nodes = this.fields;
            console.log('WORKAREA FIELDS',this.fields);
          }
          this.cdr.markForCheck();
        } else {
          this.fields = [];
          this.treeSource.nodes = [];
          this.cdr.markForCheck();
        }
      }
    })

    this.service.events$.pipe(takeUntil(this.destroyed$)).subscribe(event => {
      if (event.action === 'expand') {
        this.treeControl.expand(event.target);
      } else if (event.action === 'collapse') {
        this.treeControl.collapse(event.target);
      }
      console.log(`events`, event)
    })
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges()
  }

  ngAfterViewInit() {

  }

  hasChild = (_: number, node: any) => {
    return !!node.fields && node.fields.length > 0;
  }

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

  drop(event: CdkDragDrop<any>) {
    let node = event.item.data;
    let dc = event.container;
    if (dc.id !== 'fields-list') {
      if (node.type === 113 || node.type === 114) {
        this.closeParentNode(node);
      } else {
        this.closeNode(node);
      }
    }
  }

  settingsToggle(node: any) {
    if (node) {
      node.showSettings = !node.showSettings;
      this.cdr.markForCheck();
    }
  }
  closeParentNode(node: any): void {
    // const children = this.treeSource.getParentChildren(node);
    node.isActive = false;
    node.showSettings = false;
    // for (let child of children) {
    //   child.isActive = false;
    //   child.showSettings = false;
    // }
    // this.treeSource.refresh();
    this.cdr.markForCheck();
  }

  closeNode(node: any): void {
    node.isActive = false;
    node.showSettings = false;
    // this.treeSource.refresh();
    this.cdr.markForCheck();
  }
}
