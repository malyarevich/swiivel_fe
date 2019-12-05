import { Component, OnInit, Input, ChangeDetectorRef, ContentChild, ViewChild, ElementRef, ViewChildren, QueryList, ChangeDetectionStrategy, OnDestroy, AfterViewInit, HostBinding } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CdkDropList, CdkDrag, DragDrop, DropListRef, CdkDragDrop, CdkDragEnter } from '@angular/cdk/drag-drop';
import { uniqueId, cloneDeep } from 'lodash';
import { FormService } from '@app/form/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-group-placeholder',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaGroupPlaceholderComponent {
  _group: any;
  @Input() set group(fg: any) {
    this._group = fg;
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];

  constructor() {}

}
