import { Component, OnInit, Input, AfterViewChecked, OnChanges, ChangeDetectorRef, ViewChildren, ContentChild, ViewChild, ElementRef, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, DragDrop, CdkDrag, DropListRef, DragRef, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { WorkareaGroupComponent } from './group.component';
import { WorkareaFieldComponent } from './field.component';
import { FormService } from '@app/form/form.service';
import { uniqueId } from 'lodash';

@Component({
  selector: 'sw-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class WorkareaSectionComponent implements OnInit, AfterViewInit, AfterViewChecked {
  dropRef: DropListRef;
  
  children: FormArray;
  _section: FormGroup;
  dragRefs = new Map<any, DragRef>();
  dropListsIds = [];
  id = uniqueId('s_');
  @Input() set section(fg: FormGroup) {
    this._section = fg;
    this.children = this._section.get('fields') as FormArray;
    this.dragRef.emit({
      child: fg,
      ref: this.dd.createDrag(this.el.nativeElement)
    })
    console.log(this.dropListsIds);
    this.cdr.markForCheck();
  }
  @Input() set list(dl: any){
    console.log(dl);
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  // @ViewChild('drop', {read: ElementRef, static: true}) drop: ElementRef;
  @ViewChildren(CdkDrag) drags: QueryList<any>;
  @Output() dragRef = new EventEmitter();
  constructor(private service: FormService, private cdr: ChangeDetectorRef, private dd: DragDrop, private el: ElementRef) {
    this.service.addDropListId(this.id);
    this.service.dropLists$.subscribe((ids) => {
      this.dropListsIds = Array.from(ids).filter(cid => cid !== this.id);
      this.cdr.markForCheck();
    });
    // this.dragRef.emit(this._section,this.dd.createDrag(el));
  }

  mayEnter(drag, list) {
    // console.log('s', drag, list);
    let dragType = drag.data.type ? drag.data.type : drag.data.value.type;
    if (dragType < 113) {
      return false
    } else if (dragType === 113) {
      return true;
    } else if (dragType === 114) {
      return true;
    } else {
      console.log(dragType)
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container === event.previousContainer && event.previousIndex === event.currentIndex) {
      return false;
    }
    this.service.moveField(event);
  }

  addDragRef(data) {
    this.dragRefs.set(data.child, data.ref);
  }

  getChildComponentType(type) {
    if (type === 114) return WorkareaSectionComponent;
    else if (type === 113) return WorkareaGroupComponent;
    else return WorkareaFieldComponent;
  }

  get showSettings() {
    return this._section && this._section.value.showSettings;
  }
  get hasChildren() {
    return this.children && this.children.controls;
  }

  ngAfterViewInit() {
    // this.dropRef.withItems(Array.from(this.dragRefs.values()));
    // this.cdr.detectChanges();
    // this.dropRef.dropped.subscribe((item) => {
    //   debugger;
    //   // return true;
    // });
    // this.drags.changes.subscribe((drags) => {
    //   if (this.dropRef) {
    //     this.dropRef.withItems(drags);
    //   }
    //   this.cdr.detectChanges();
    //   console.log(this.dropRef)
    // })
  }

  ngAfterViewChecked() {

  }

  ngOnInit() {
  }

  dragit(ch) {
    console.log(ch)
  }

  toggleExpanded() {
    if (this._section.get('isExpanded') === null) {
      this._section.addControl('isExpanded', new FormControl(true));
    } else {
      this._section.get('isExpanded').setValue(!this._section.value.isExpanded, {onlySelf: false, emitEvent: true});
    }
    this.cdr.markForCheck();
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
      }
    }
  }

}
