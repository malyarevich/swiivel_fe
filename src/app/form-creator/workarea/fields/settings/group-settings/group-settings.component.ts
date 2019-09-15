import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'sw-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.scss']
})
export class GroupSettingsComponent implements OnInit {

  form: FormGroup;

  displayOptions = ['Directly Displayed', 'Pop Up'];

  @Input()
  set settings(obj: any) {
    if (obj) {
      // this.form.patchValue({
      //   showDefaultValue: !!obj['defaultValue'],
      //   showValidators: !!obj['validators'],
      //   allowList: obj['allowList'],
      //   defaultValue: obj['defaultValue'] || null,
      //   validators: obj['validators']
      // });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      required: new FormControl(false),
      hideLabel: new FormControl(false),
      showHint: new FormControl(false),
      hint: new FormControl(''),
      displayStrategy: new FormControl(null),
    });
  }

  ngOnInit() {
  }

}
