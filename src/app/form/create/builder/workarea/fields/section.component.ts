import { Component, OnInit, Input, AfterViewChecked, OnChanges, ChangeDetectorRef, ViewChildren, ContentChild, ViewChild, ElementRef, QueryList, AfterViewInit, Output, EventEmitter, ChangeDetectionStrategy, HostBinding, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, DragDrop, CdkDrag, DropListRef, DragRef, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormService } from '@app/form/form.service';
import { uniqueId } from 'lodash';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaSectionComponent implements OnDestroy, AfterViewInit {  
  _section: FormGroup;
  children: FormArray;
  subscription: Subscription;
  destroyed$ = new Subject();
  dropListsIds = [];
  id: string;
  @Input() set section(fg: FormGroup) {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this._section = fg;
    this.children = this._section.get('fields') as FormArray;
    this.subscription = this._section.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((_value) => {
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
  @ViewChildren(CdkDrag) drags: QueryList<any>;
  @Output() dragRef = new EventEmitter();
  @HostBinding('class.empty') get empty() { return !this.hasChildren; }
  constructor(private service: FormService, private cdr: ChangeDetectorRef, private dd: DragDrop, private el: ElementRef) {
    this.service.dropLists$.pipe(takeUntil(this.destroyed$)).subscribe((ids) => {
      this.dropListsIds = Array.from(ids);
      this.cdr.markForCheck();
    });
  }

  mayEnter(drag, _list) {
    let item: {[key: string]: any};
    if (drag.data instanceof FormGroup) {
      item = drag.data.value;
    } else if (drag.data instanceof Object) {
      item = drag.data;
    } else {
      return false;
    }
    if (item.type >= 113) {
      return true;
    } else {
      return false;
    }
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

  get showSettings() {
    return this._section && this._section.value && this._section.value.showSettings;
  }
  get hasChildren() {
    return this._section && this.children && this.children.length > 0;
  }


  ngAfterViewInit(){
    this.id = uniqueId('s_');
    this.service.addDropListId(this.id);
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.service.removeDropListId(this.id);
  }


  toggleExpanded() {
    if (this._section.get('isExpanded') === null) {
      this._section.addControl('isExpanded', new FormControl(true));
    } else {
      this._section.get('isExpanded').setValue(!this._section.value.isExpanded, {onlySelf: false, emitEvent: true});
    }
    if (this._section.value.isExpanded) {
      this.cdr.detectChanges();
    }
  }

  toggleSettings() {
    if (this._section.get('showSettings') === null) {
      this._section.addControl('showSettings', new FormControl(true));
    } else {
      this._section.get('showSettings').setValue(!this._section.value.showSettings, {onlySelf: false, emitEvent: true});
    }
  }

  removeSection() {
    let parent = this._section.parent as FormArray;
    if (parent) {
      let idx = parent.value.indexOf(this._section.value);
      if (idx !== -1) {
        parent.removeAt(idx);
        this.cdr.markForCheck();
      }
    }
  }

}
