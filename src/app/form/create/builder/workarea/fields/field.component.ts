import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormService } from '@app/form/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldComponent implements AfterViewInit {
  _field: FormGroup;
  subscription: Subscription;
  @Input() set field(fg: FormGroup) {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this._field = fg;
    this.subscription = this._field.valueChanges.subscribe((value) => {
      if (value !== this._field.value) {
        // console.log('fi', value);
        if (this._field.parent.parent.get('isExpanded').value) {
          this.cdr.markForCheck();
        }
      }
    });
    this.cdr.markForCheck();
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  constructor(private cdr: ChangeDetectorRef, private service: FormService) { }

  ngAfterViewInit() {
    this._field.get('options').valueChanges.subscribe((value) => {
      if (value.required === false && this._field.value.options.required !== value.required) {
        if (this._field.parent.parent.get('options.required').value) {
          this._field.parent.parent.get('options.required').setValue(false), {onlySelf: true};
        }
      } else if (value.hideLabel === false && this._field.value.options.hideLabel !== value.hideLabel) {
        if (this._field.parent.parent.get('options.hideLabel').value) {
          this._field.parent.parent.get('options.hideLabel').setValue(false, {onlySelf: true});
        }
      }
    })
  }

  setParent(el, key, val) {
  }

  toggleSettings() {
    if (this._field.get('showSettings') === null) {
      this._field.addControl('showSettings', new FormControl(true));
    } else {
      this._field.get('showSettings').setValue(!this._field.value.showSettings, {onlySelf: false, emitEvent: true});
    }
  }


  removeField() {
    this.service.removeField(this._field);
  }

  get showSettings() {
    return this._field && this._field.value.showSettings
  }

}
