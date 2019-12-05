import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormService } from '@app/form/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-field-placeholder',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldPlaceholderComponent  {
  _field;
  @Input() set field(fg: any) {
    this._field = fg;
  }
  widthOptions = [
    '1/4 page',
    '2/4 page',
    '3/4 page',
    'Full page'
  ];
  constructor() { }

}
