import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  ILabelValueSelect,
  ITypeFieldSettings
} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  numberFormat: {label: 'None', value: 'none'},
  country: {label: 'United States of America', value: 'usa'},
  isCellphone: false,
  isVerify: false,
  isInputMask: false,
  inputMask: '',
  isDefaultValue: false,
  defaultValue: '',
};

@Component({
  selector: 'app-phone-number-settings',
  templateUrl: './phone-number-settings.component.html',
  styleUrls: ['./phone-number-settings.component.css']
})
export class PhoneNumberSettingsComponent implements OnInit {
  @Input() inputField: Field;
  settingsForm: FormGroup;

  numberFormats: ILabelValueSelect[] = [
    {label: 'National', value: 'national'},
    {label: 'International', value: 'international'},
    {label: 'Both', value: 'both'},
    {label: 'None', value: 'none'},
  ];
  countries: ILabelValueSelect[] = [{label: 'United States of America', value: 'usa'},];

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
      numberFormat: [this.inputField.typeSettings.numberFormat.value],
      country: [this.inputField.typeSettings.country.value],
      isCellphone: [this.inputField.typeSettings.isCellphone],
      isVerify: [this.inputField.typeSettings.isVerify],
      isInputMask: [this.inputField.typeSettings.isInputMask],
      inputMask: [this.inputField.typeSettings.inputMask],
      isDefaultValue: [this.inputField.typeSettings.isDefaultValue],
      defaultValue: [this.inputField.typeSettings.defaultValue],
    });
  }

  onChangesSettingsForm() {
    this.settingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
