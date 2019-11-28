import { Component, OnInit, Input, ChangeDetectorRef, ContentChild, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, CdkDrag, DragDrop, DropListRef } from '@angular/cdk/drag-drop';
import { uniqueId } from 'lodash';
import { FormService } from '@app/form/form.service';

@Component({
  selector: 'sw-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class WorkareaGroupComponent implements OnInit {
  dropRef: DropListRef;
  _group: FormGroup;
  children: FormArray;
  dropListsIds = [];
  id = uniqueId('g_');
  @Input() set group(fg: FormGroup) {
    this._group = fg;
    this.children = this._group.get('fields') as FormArray;
    this.cdr.markForCheck();
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];

  @ContentChild('list', {read: CdkDropList, static: false}) list; 
  @ViewChild('drop', {read: ElementRef, static: true}) drop: ElementRef;
  @ViewChildren(CdkDrag, {read: CdkDrag}) drags: QueryList<any>;
  constructor(private service: FormService, private cdr: ChangeDetectorRef, private dd: DragDrop) {
    this.service.addDropListId(this.id);
    this.service.dropLists$.subscribe((ids) => {
      this.dropListsIds = Array.from(ids).filter((cid: string) => {
        return true;// cid !== this.id;
      });
      this.cdr.markForCheck();
    });
  }

  mayEnter(drag, list) {
    // console.log(drag, list)
    let dragType = drag.data.type ? drag.data.type : drag.data.value.type;
    if (dragType < 113) {
      return list.id.startsWith('g_');
    } else if (dragType === 113) {
      return true;
      // if (list.id === 'cdk-drop-list-0') {
      //   return list.data.value.length === 0;
      // } else {
      //   return (list.id.endsWith('113') || list.id.endsWith('114'));
      // }
    } else if (dragType === 114) {
      return list.id.startsWith('g_') || list.id.startsWith('s_');
    } else {
      console.log(dragType)
    }
  }

  ngAfterViewInit() {
    this.drags.changes.subscribe((drags) => {
      if (this.dropRef) {
        this.dropRef.withItems(drags);
      }
      this.cdr.detectChanges();
      console.log(this.dropRef)
    })
  }
  ngOnInit() {
  }

  get showSettings() {
    return this._group && this._group.value.showSettings;
  }

  get hasChildren() {
    return this._group && this.children.length > 0;
  }

  toggleExpanded() {
    if (this._group.get('isExpanded') === null) {
      this._group.addControl('isExpanded', new FormControl(true));
    } else {
      this._group.get('isExpanded').setValue(!this._group.value.isExpanded, {onlySelf: false, emitEvent: true});
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
      }
    }
  }

}
