import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  isFullWidth: false,
  fieldWidth: 1,
  fieldHeight: 1,
  selection: 'multiple',
  options: [{name: ''}],
  isSelectedDefault: false,
  selectedDefault: {name: ''},
};

@Component({
  selector: 'app-v-drop-down-list-settings',
  templateUrl: './v-drop-down-list-settings.component.html',
  styleUrls: ['./v-drop-down-list-settings.component.css']
})
export class VDropDownListSettingsComponent implements OnInit {
  @Input() inputField: Field;
  dropDownListSettingsForm: FormGroup;

  get options() {
    return this.dropDownListSettingsForm.get('options') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initDropDownListSettings();
    this.initDropDownListSettingsForm();
    this.onChangesDropDownListSettingsForm();
  }

  initDropDownListSettings() {
    if (!this.inputField.hasOwnProperty('typeSettings')) {
      this.inputField.typeSettings = Object.assign(defaultSettings);
    }
  }

  initDropDownListSettingsForm() {
    this.dropDownListSettingsForm = this.fb.group({
      isFullWidth: [this.inputField.typeSettings.isFullWidth],
      fieldWidth: [this.inputField.typeSettings.fieldWidth],
      fieldHeight: [this.inputField.typeSettings.fieldHeight],
      selection: [this.inputField.typeSettings.selection],
      options: this.fb.array(this.initOptions()),
      isSelectedDefault: [this.inputField.typeSettings.isSelectedDefault],
      selectedDefault: [this.inputField.typeSettings.selectedDefault],
    });
  }

  initOptions() {
    let options = [];
    this.inputField.typeSettings.options.map((option) => {
      options.push(this.fb.group({
        name: [option.name]
      }));
    });
    return options;
  }

  addOption() {
    this.options.push(this.fb.group({
      name: ''
    }));
  }

  removeOption(index) {
    this.options.removeAt(index);
  }

  onChangesDropDownListSettingsForm() {
    this.dropDownListSettingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
