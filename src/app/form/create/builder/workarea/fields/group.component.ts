import { Component, OnInit, Input, ChangeDetectorRef, ContentChild, ViewChild, ElementRef, ViewChildren, QueryList, ChangeDetectionStrategy, OnDestroy, AfterViewInit, HostBinding } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, CdkDrag, DragDrop, DropListRef, CdkDragDrop, CdkDragEnter } from '@angular/cdk/drag-drop';
import { uniqueId, cloneDeep } from 'lodash';
import { FormService } from '@app/form/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaGroupComponent implements AfterViewInit, OnDestroy {
  _group: FormGroup;
  subscription: Subscription;
  children: FormArray;
  dropListsIds = [];
  id: string;
  @Input() set group(fg: FormGroup) {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this._group = fg;
    this.children = this._group.get('fields') as FormArray;
    this.subscription = this._group.valueChanges.subscribe((value) => {
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];

  @ViewChild(CdkDropList, {read: CdkDropList, static: false}) dropList: CdkDropList; 
  @ViewChildren(CdkDrag, {read: CdkDrag}) drags: QueryList<any>;
  @HostBinding('class.empty') get empty() {
    return !this.hasChildren;
  }
  constructor(private service: FormService, private cdr: ChangeDetectorRef, private dd: DragDrop) {
    this.service.dropLists$.subscribe((ids) => {
      this.dropListsIds = Array.from(ids);
      this.cdr.markForCheck();
    });
    
    
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
  ngAfterViewInit() {
    this.id = uniqueId('g_');
    this.service.addDropListId(this.id);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.service.removeDropListId(this.id);
    if (this.subscription) this.subscription.unsubscribe();
  }


  get showSettings() {
    return this._group && this._group.value.showSettings;
  }

  get hasChildren() {
    return this._group && this.children && this.children.length > 0;
  }

  toggleExpanded() {
    if (this._group.get('isExpanded') === null) {
      this._group.addControl('isExpanded', new FormControl(true));
    } else {
      this._group.get('isExpanded').setValue(!this._group.value.isExpanded, {onlySelf: false, emitEvent: true});
    }
    if (this._group.value.isExpanded) {
      this.cdr.detectChanges();
    }
  }

  toggleSettings() {
    if (this._group.get('showSettings') === null) {
      this._group.addControl('showSettings', new FormControl(true));
    } else {
      this._group.get('showSettings').setValue(!this._group.value.showSettings, {onlySelf: false, emitEvent: true});
    }
  }

  removeGroup() {
    let parent = this._group.parent as FormArray;
    if (parent) {
      let idx = parent.value.indexOf(this._group.value);
      if (idx !== -1) {
        parent.removeAt(idx);
        this.cdr.markForCheck();
      }
    }
  }

}
