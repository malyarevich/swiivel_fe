import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  FieldSettingConditional,
  GroupOptions
} from "../../../../../../../../../models/vertical-data-collection/field.model";

const defaultSettingOptions: GroupOptions = {
  groupPreset: string;
required: boolean,
  readonly: boolean,
  hideLabel: boolean,
  unique: boolean;
isSupportText: boolean;
supportText: string;
supportTextDisplayed: 'popup' | 'directly';
};

@Component({
  selector: 'app-v-group-setting-options',
  templateUrl: './v-group-setting-options.component.html',
  styleUrls: ['./v-group-setting-options.component.css']
})
export class VGroupSettingOptionsComponent implements OnInit {
  @Input() inputGroup: Field;

  groupPreset: string = 'Preset 1';
  supportText: string = 'Actually Student\'s Address';

  constructor() { }

  ngOnInit() {
    this.initSettingOptions();
  }

  initSettingOptions() {
    if (!this.inputGroup.settings.options) {
      this.inputGroup.settings['options'] = Object.assign(defaultSettingOptions);
    }
  }

}
