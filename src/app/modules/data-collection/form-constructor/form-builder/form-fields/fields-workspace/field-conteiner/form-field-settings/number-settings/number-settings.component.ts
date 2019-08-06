import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  ILabelValueSelect,
  ITypeFieldSettings
} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  minValue: null,
  maxValue: null,
  numberType: {label: 'decimal', value: 'decimal'},
  decimalRange: 3,
  isCurrency: false,
  currency: {label: 'United States Dollar', value: 'usd'},
  isDisplay: true,
  displayType: 'slider',
};

@Component({
  selector: 'app-v-number-settings',
  templateUrl: './number-settings.component.html',
  styleUrls: ['./number-settings.component.css']
})
export class NumberSettingsComponent implements OnInit {
  @Input() inputField: Field;
  settingsForm: FormGroup;

  numberFormat = [{label: 'Decimal Places', value: 'decimal'}, {label: 'Is Percentage', value: 'percentage'}];
  currency = [{label: 'United States Dollar', value: 'usd'}];

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
      minValue: [this.inputField.typeSettings.minValue],
      maxValue: [this.inputField.typeSettings.maxValue],
      numberType: [this.inputField.typeSettings.numberType.value],
      decimalRange: [this.inputField.typeSettings.decimalRange],
      isCurrency: [this.inputField.typeSettings.isCurrency],
      currency: [this.inputField.typeSettings.currency.value],
      isDisplay: [this.inputField.typeSettings.isDisplay],
      displayType: [this.inputField.typeSettings.displayType],
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
