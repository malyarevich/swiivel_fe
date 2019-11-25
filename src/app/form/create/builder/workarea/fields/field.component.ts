import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'sw-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class WorkareaFieldComponent implements OnInit {
  @Input() field: FormGroup;
  widthOptions = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  constructor() { }

  ngOnInit() {
  }

  setParent(el, key, val) {
    
  }
  toggleExpanded() {
    if (this.field.get('isExpanded') === null) {
      this.field.addControl('isExpanded', new FormControl(true));
    } else {
      this.field.get('isExpanded').setValue(!this.field.value.isExpanded, {onlySelf: false, emitEvent: true});
    }
  }

  toggleSettings() {
    if (this.field.get('showSettings') === null) {
      this.field.addControl('showSettings', new FormControl(true));
    } else {
      this.field.get('showSettings').setValue(!this.field.value.showSettings, {onlySelf: false, emitEvent: true});
    }
  }


  removeField() {
    let parent = this.field.parent as FormArray;
    if (parent) {
      let idx = parent.value.indexOf(this.field.value);
      if (idx !== -1) {
        parent.removeAt(idx);
      }
    }
  }

  get showSettings() {
    return this.field && this.field.value.options
  }

}
