import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/data-collection/field.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  maxSizeChar: null,
  validateEmail: true,
  confirmationTextBox: true,
  emailBlocks: true,
  disallowFreeAddress: true,
  blockDomains: '',
};

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.css']
})
export class EmailSettingsComponent implements OnInit {
  @Input() inputField: Field;

  settingsForm: FormGroup;

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
      maxSizeChar: [this.inputField.typeSettings.maxSizeChar],
      validateEmail: [this.inputField.typeSettings.validateEmail],
      confirmationTextBox: [this.inputField.typeSettings.confirmationTextBox],
      emailBlocks: [this.inputField.typeSettings.emailBlocks],
      disallowFreeAddress: [this.inputField.typeSettings.disallowFreeAddress],
      blockDomains: [this.inputField.typeSettings.blockDomains],
    });
  }

  onChangesSettingsForm() {
    this.settingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
