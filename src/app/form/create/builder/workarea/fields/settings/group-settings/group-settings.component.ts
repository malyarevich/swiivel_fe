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
    'hideLabel',
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
        this.form.get('required').valueChanges.subscribe((value) => {
          if (value === true) {
            this.setChildren.emit({key: 'required', value: true});
          }
        });
        this.form.get('hideLabel').valueChanges.subscribe((value) => {
          if (value === true) {
            this.setChildren.emit({key: 'hideLabel', value: true});
          }
        })
      }
    }
  }
  @Output() fieldSettings = new EventEmitter();
  @Output() setChildren = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    
  }

  checkOptions(obj: FormGroup) {
    return this.optionsMap.filter((key) => {
      if (!obj.get(key)) {
        console.error(`Does not exist ${key} in options.`);
        return true;
      }
    });
  }

  prepareForm(value) {
    this.fieldSettings.emit(value);
  }

}
