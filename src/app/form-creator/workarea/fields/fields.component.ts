import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { FieldService } from '@app/core/field.service';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form-creator/tree.datasource';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  treeSource;
  treeControl = new NestedTreeControl<any>(node => node[CHILDREN_SYMBOL]);

  constructor(private service: FormCreatorService, private api: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.events$.pipe(takeUntil(this.destroyed$)).subscribe(event => {
      if (event.action === 'expand') {
        this.treeControl.expand(event.target);
      } else if (event.action === 'collapse') {
        this.treeControl.collapse(event.target);
      }
      console.log(`events`, event);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {

  }

  hasChild = (_: number, node: any) => {
    return !!node[CHILDREN_SYMBOL] && node[CHILDREN_SYMBOL].length > 0;
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
    const node = event.item.data;
    const dc = event.container;
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
    const children = this.treeSource.getParentChildren(node);
    node.isActive = false;
    node.showSettings = false;
    for (const child of children) {
      child.isActive = false;
      child.showSettings = false;
    }
    this.treeSource.refresh();
    this.cdr.markForCheck();
  }

  closeNode(node: any): void {
    node.isActive = false;
    node.showSettings = false;
    this.treeSource.refresh();
    this.cdr.markForCheck();
  }
}
