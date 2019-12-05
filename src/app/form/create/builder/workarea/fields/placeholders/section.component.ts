import { Component, OnInit, Input, AfterViewChecked, OnChanges, ChangeDetectorRef, ViewChildren, ContentChild, ViewChild, ElementRef, QueryList, AfterViewInit, Output, EventEmitter, ChangeDetectionStrategy, HostBinding, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, DragDrop, CdkDrag, DropListRef, DragRef, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormService } from '@app/form/form.service';
import { uniqueId } from 'lodash';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-section-placeholder',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaSectionPlaceholderComponent {  
  _section: FormGroup;
  @Input() set section(fg: FormGroup) {
    this._section = fg;
  }
  widthOptions = [
    '1/4 page',
    '2/4 page',
    '3/4 page',
    'Full page'
  ];
}
