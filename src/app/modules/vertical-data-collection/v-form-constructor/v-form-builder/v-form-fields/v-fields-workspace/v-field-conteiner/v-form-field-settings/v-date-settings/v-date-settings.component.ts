import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  ITypeFieldSettings
} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  separator: {label: '- (Dash)', value: 'dash'},
  dateFormat:  {label: 'mm-dd-yyyy', value: 'mm-dd-yyyy'},
  monthDisplay: {label: 'January', value: 'full'},
  defaultDate: {label: '', value: ''},
  defaultDateValue: '',
  isSeparateFields: false,
};

@Component({
  selector: 'app-v-date-settings',
  templateUrl: './v-date-settings.component.html',
  styleUrls: ['./v-date-settings.component.css']
})
export class VDateSettingsComponent implements OnInit {
  @Input() inputField: Field;
  settingsForm: FormGroup;

  separators = [
    {label: '- (Dash)', value: 'dash'},
    {label: '/ (Backslash)', value: 'backslash'},
    {label: '. (Dot)', value: 'dot'},
  ];

  dateFormats = [
    {label: 'mm-dd-yyyy', value: 'mm-dd-yyyy'},
    {label: 'dd-mm-yyyy', value: 'dd-mm-yyyy'},
    {label: 'yyyy-mm-dd', value: 'yyyy-mm-dd'},
  ];

  monthDisplay = [
    {label: '1', value: 'number'},
    {label: 'January', value: 'full'},
    {label: 'Jan', value: 'short'},
  ];

  defaultDates = [
    {label: 'None', value: 'none'},
    {label: 'Current Date', value: 'current'},
    {label: 'Custom', value: 'custom'},
  ];

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initSettings();
    this.initSettingsForm();
    this.onChangesSettingsForm();
  }

  initSettings() {
    if (!this.inputField.hasOwnProperty('typeSettings')) {
      this.inputField.typeSettings = Object.assign(defaultSettings);
    }
  }

  initSettingsForm() {
    this.settingsForm = this.fb.group({
      separator: [this.inputField.typeSettings.separator.value],
      dateFormat: [this.inputField.typeSettings.dateFormat.value],
      monthDisplay: [this.inputField.typeSettings.monthDisplay.value],
      defaultDate: [this.inputField.typeSettings.defaultDate.value],
      defaultDateValue: [this.inputField.typeSettings.defaultDateValue],
      isSeparateFields: [this.inputField.typeSettings.isSeparateFields],
    });
  }

  onChangesSettingsForm() {
    Object.keys(this.settingsForm.controls).forEach(key => {
      this.settingsForm.get(key).valueChanges.subscribe((val) => {
        this.inputField.typeSettings[key] = val;
      });
    });
  }

}
