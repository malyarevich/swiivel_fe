import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormService } from '@app/form/form.service';

@Component({
  selector: 'sw-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class WorkareaFieldComponent implements OnInit {
  _field: FormGroup;
  @Input() set field(fg: FormGroup) {
    this._field = fg;
    this.cdr.markForCheck();
  }
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  constructor(private cdr: ChangeDetectorRef, private service: FormService) { }

  ngOnInit() {
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
