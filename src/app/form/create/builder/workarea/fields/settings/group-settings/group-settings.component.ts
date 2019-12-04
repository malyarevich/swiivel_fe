import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.scss']
})
export class GroupSettingsComponent {

  form: FormGroup;
  displayOptions = ['Directly Displayed', 'Pop Up'];
  repeatOptions = ['For Each Student in Family', 'Other'];
  private optionsMap = [
    'required',
    'hideTitle',
    'showHint',
    'hint',
    'displayStrategy',
    'repeatGroup',
    'repeatStrategy',
    'prefill',
    'minRep',
    'maxRep',
    'numOfRep'
  ];

  @Input()
  set settings(obj: any) {
    if (obj) {
      if (this.checkOptions(obj).length === 0) {
        this.form = obj;
      }
    }
  }
  @Output() fieldSettings = new EventEmitter();
  @Output() setChildren = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      required: new FormControl(false),
      hideTitle: new FormControl(false),
      showHint: new FormControl(false),
      hint: new FormControl('', {updateOn: 'blur'}),
      displayStrategy: new FormControl(null),
      repeatGroup: new FormControl(false),
      repeatStrategy: new FormControl(null),
      prefill: new FormControl(false),
      minRep: new FormControl(null, {updateOn: 'blur'}),
      maxRep: new FormControl(null, {updateOn: 'blur'}),
      numOfRep: new FormControl(null, {updateOn: 'blur'})
    });
  }

  checkOptions(obj: FormGroup) {
    return this.optionsMap.filter((key) => {
      if (!obj.get(key)) {
        console.error(`Does not exist ${key} in options.`);
        return true;
      }
    });
  }

}
