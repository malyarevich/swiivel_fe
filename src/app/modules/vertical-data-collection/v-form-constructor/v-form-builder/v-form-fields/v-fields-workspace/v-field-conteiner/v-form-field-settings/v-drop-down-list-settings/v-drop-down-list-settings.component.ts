import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  isFullWidth: false,
  fieldWidth: 1,
  fieldHeight: 1,
  selection: 'multiple',
};

@Component({
  selector: 'app-v-drop-down-list-settings',
  templateUrl: './v-drop-down-list-settings.component.html',
  styleUrls: ['./v-drop-down-list-settings.component.css']
})
export class VDropDownListSettingsComponent implements OnInit {
  @Input() inputField: Field;
  dropDownListSettingsForm: FormGroup;

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
    });
  }

  onChangesDropDownListSettingsForm() {
    this.dropDownListSettingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
