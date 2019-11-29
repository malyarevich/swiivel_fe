import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, AfterViewChecked, ContentChildren, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form/create/tree.datasource';
import { FormService } from '@app/form/form.service';
import { Subject, Subscription } from 'rxjs';
import { CdkDragDrop, CdkDropList, DragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { uniqueId } from 'lodash';
import { takeUntil } from 'rxjs/operators';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, OnDestroy {
  destroyed$ = new Subject();
  treeSource = new TreeDataSource('Workarea');
  dropListsIds = [];
  id = 'root-list';
  constructor(private service: FormService, private api: ApiService, private cdr: ChangeDetectorRef, private fb: FormBuilder,
    private dd: DragDrop) {
      this.service.dropLists$.subscribe((ids) => {
        this.dropListsIds = Array.from(ids);
      });
      this.service.addDropListId(this.id);
  }

  mayEnter(drag, list) {
    let item;
    if (drag.data instanceof FormGroup) {
      item = drag.data.value;
    } else if (drag.data instanceof Object) {
      item = drag.data;
    }
    return item.type === 114;// || (item.type === 113 && !this.treeSource) || (item.type === 113 && this.treeSource.nodes.length === 0);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.item.data instanceof FormGroup) {
      if (event.container === event.previousContainer && event.previousIndex === event.currentIndex) {
        return false;
      }
      this.service.moveField(event);
    } else if (event.item.data instanceof Object) {
      this.service.addFieldToWorkarea(event);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    // this.cdr.detectChanges();
    this.service.form$.pipe(takeUntil(this.destroyed$)).subscribe(form => {
      form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
        if (value && value['fields']) {
          this.treeSource.nodes = (this.service.form.get('fields') as FormArray).controls;
        } else {
          this.treeSource.nodes = [];
        }
        this.cdr.detectChanges()
      });
      if (form.get('fields')) {
        this.treeSource.nodes = (form.get('fields') as FormArray).controls;
        this.cdr.detectChanges();
      }
    });
  }

}
