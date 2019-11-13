import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form/create/tree.datasource';
import { FormService } from '@app/form/form.service';
import { Subject, Subscription } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { visitValue } from '@angular/compiler/src/util';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

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
  sizeOptions = [
    {value: 0, title: '1 quarter'},
    {value: 1, title: 'Half'},
    {value: 2, title: '3 quarters'},
    {value: 3, title: 'Full width'},
  ]
  fields: any[] = [];
  destroyed$ = new Subject();
  fieldsTree: any[];
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl<any>(node => {
    let fields = node.get('fields');
    if (fields) {
      return (fields as FormArray).controls
    }
    return null;
  });
  formSubscription: Subscription;
  constructor(private service: FormService, private api: ApiService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.service.form$.subscribe(form => {
      if (this.formSubscription) this.formSubscription.unsubscribe();
      this.formSubscription = form.valueChanges.subscribe((value) => {
        if (value && value['fields']) {
          this.treeSource.nodes = [];
          this.cdr.markForCheck();
          // this.cdr.detectChanges();
          this.treeSource.nodes = (form.get('fields') as FormArray).controls;
        } else {
          this.treeSource.nodes = [];
        }
        // this.treeControl.dataNodes = this.treeSource.nodes;
        this.cdr.markForCheck();
        // this.cdr.detectChanges();
      });

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

  getListsIds() {
    let listIds = this.service.getListsIds();
    listIds.push('sidebar-list', 'root-list')
    return listIds
  }
  getListId(node) {
    let listId = [...this.service.getParentPaths(node), node.get('name').value].join('');
    return listId;
  }
  hasChild = (_: number, node: any) => {
    return !!node.get('fields')
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

  drop(event) {
    console.log('field drop', event)
    // if (event.container.id === 'sidebar-list') {
      // this.sideBarService.events$.next({ action: 'remove', target: event.item.data });
    // }
  }


  settingsToggle(node: any) {
    if (node) {
      let showSettingsControl = node.get('showSettings');
      if (!showSettingsControl) {
        (node as FormGroup).addControl('showSettings', this.fb.control(true));
        return true
      }
      showSettingsControl.setValue(!showSettingsControl.value);
      this.cdr.markForCheck();
      return showSettingsControl.value;
      // node.showSettings = !node.showSettings;
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
