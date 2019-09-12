import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sw-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.scss']
})
export class GroupSettingsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
