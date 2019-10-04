import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form-creator/tree.datasource';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { Subject } from 'rxjs';
import { CdkDragDrop, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  i = 0;
  listIDs = {};

  constructor(private service: FormCreatorService, private api: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.sidebar.pipe(takeUntil(this.destroyed$)).subscribe(nodes => {
      this.treeSource = nodes;
      this.treeSource.changes.pipe(
        takeUntil(this.destroyed$),
        debounceTime(100)
      ).subscribe(value => {
        this.cdr.detectChanges();
      });
    });
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
    return !!node[CHILDREN_SYMBOL] && node[CHILDREN_SYMBOL].length > 0;
  }
  getId(str) {
    let id = str + '-' + this.i++;
    if (!Array.isArray(this.listIDs[str])) this.listIDs[str] = [id];
    this.listIDs[str].push(id);
    return id;
  }

  connectTo(str) {
    if (this.listIDs[str]) {
      return this.listIDs[str];
    } else {
      return [];
    }
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

  dropped(event: CdkDragDrop<any>) {
    let node = event.item.data;
    let dc = event.container;
    console.log(`dropped`, event);
    // if (dc.id !== 'fields-list') {
    //   if (node.type === 113 || node.type === 114) {
    //     this.closeParentNode(node);
    //   } else {
    //     this.closeNode(node);
    //   }
    // }
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



  sectionPredicate(item: CdkDrag<number>) {
    return item.data['type'] === 114;
  }
  groupPredicate(item: CdkDrag<number>) {
    return item.data['type'] === 113;
  }

  fieldPredicate(item: CdkDrag<number>) {
    console.log(item);
    return item.data['type'] !== 113 && item.data['type'] !== 114;
  }

  dropSection(event) {
    if (event.previousContainer === event.container) {
      if (event.item.data.type === 114) {
        this.treeSource.swapSections(event.previousIndex, event.currentIndex)
      } else if (event.item.data.type === 113) {
        console.log(`Move group`)
        // this.treeSource.MoveGroup(event.previousIndex, event.currentIndex)
      } else {
        console.log(`Move field`);
      }
      console.log();
    } else {
      let prevSection = this.treeSource.getSectionByIdx(event.currentIndex);
      this.treeSource.addSection(prevSection, event.container.data);
    }
  }

  dropGroup(event) {
    console.log(`group `, event);
  }

  settingsToggle(node: any)  {
    if (node) {
      node.showSettings = !node.showSettings;
      this.cdr.markForCheck();
    }
  }
  closeParentNode(node: any): void {
    const children = this.treeSource.getParentChildren(node);
    node.isActive = false;
    node.showSettings = false;
    for (let child of children) {
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
