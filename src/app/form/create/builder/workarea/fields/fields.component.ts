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

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, AfterViewChecked, OnInit, OnDestroy {
  trControl = new NestedTreeControl<FoodNode>(node => node.children);
  data = [];
  fields: any[] = [];
  destroyed$ = new Subject();
  fieldsTree: any[];
  treeSource = new TreeDataSource('Workarea');
  treeControl = new NestedTreeControl<any>(node => {
    let fields = node.get('fields');
    if (fields) {
      return (fields as FormArray).controls
    }
    return null;
  });


  


  form: FormArray = new FormArray([]);
  formSubscription: Subscription;
  dropListsIds = [];
  id = uniqueId('s_');
  constructor(private service: FormService, private api: ApiService, private cdr: ChangeDetectorRef, private fb: FormBuilder,
    private dd: DragDrop) {
  }

  mayEnter(drag, list) {
    let dragType = drag.data.type ? drag.data.type : drag.data.value.type;
    if (dragType === 114) {
      return true;
    } else {
      return false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container === event.previousContainer && event.previousIndex === event.currentIndex) {
      return false;
    }
    this.service.moveField(event);
  }

  ngOnInit() {
    this.service.form$.subscribe(form => {
      if (this.formSubscription) this.formSubscription.unsubscribe();
      this.formSubscription = form.valueChanges.subscribe((value) => {
        if (value && value['fields']) {
          this.form = this.service.form.get('fields') as FormArray;
          this.treeSource.nodes = this.form.controls;// (form.get('fields') as FormArray).controls;
        } else {
          this.treeSource.nodes = [];
        }
        this.cdr.detectChanges()
      });
      if (form.get('fields')) {
        this.form = form.get('fields') as FormArray;
        this.treeSource.nodes = this.form.controls;
        this.cdr.detectChanges()
      }
    });
    
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges()
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
