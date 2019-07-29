import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  GroupSectionOptions
} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {isEmpty} from "lodash";

const defaultSettingOptions: GroupSectionOptions = {
  groupPreset: 'Preset 1',
  required: true,
  readonly: false,
  hideLabel: true,
  unique: true,
  isSupportText: true,
  supportText: 'Actually Student\'s Address',
  supportTextDisplayed: 'directly',
};

@Component({
  selector: 'app-v-group-setting-options',
  templateUrl: './v-group-setting-options.component.html',
  styleUrls: ['./v-group-setting-options.component.css']
})
export class VGroupSettingOptionsComponent implements OnInit {
  @Input() inputGroup: Field;
  groupSettingOptionsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initGroupSettingOptions();
    this.initGroupSettingOptionsForm();
    this.onChangesGroupSettingOptionsForm()
  }

  initGroupSettingOptions() {
    if (isEmpty(this.inputGroup.settings.options)) {
      this.inputGroup.settings.options = Object.assign(defaultSettingOptions);
    }
  }

  initGroupSettingOptionsForm() {
    this.groupSettingOptionsForm = this.fb.group({
      groupPreset: [this.inputGroup.settings.options.groupPreset],
      required: [this.inputGroup.settings.options.required],
      readonly: [this.inputGroup.settings.options.readonly],
      hideLabel: [this.inputGroup.settings.options.hideLabel],
      unique: [this.inputGroup.settings.options.unique],
      isSupportText: [this.inputGroup.settings.options.isSupportText],
      supportText: [this.inputGroup.settings.options.supportText],
      supportTextDisplayed: [this.inputGroup.settings.options.supportTextDisplayed],
    });
  }

  onChangesGroupSettingOptionsForm() {
    this.groupSettingOptionsForm.valueChanges.subscribe((val) => {
      this.inputGroup.settings.options = Object.assign(val);
    });
  }

}
