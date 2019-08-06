import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  @Input() inputField: Field;
  lenguage = ['english', 'hebrew'];
  settingsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initSettings();
    this.initSettingsForm();
    this.onChangesSettingsForm();
  }

  initSettings() {
    if (!this.inputField.options.hasOwnProperty('placeholder')) {
      this.inputField.options['placeholder'] = "";
    }
    if (!this.inputField.options.hasOwnProperty('language')) {
      this.inputField.options['language'] = "";
    }
    if (!this.inputField.options.hasOwnProperty('isSupportText')) {
      this.inputField.options['isSupportText'] = false;
    }
    if (!this.inputField.options.hasOwnProperty('supportText')) {
      this.inputField.options['supportText'] = '';
    }
    if (!this.inputField.options.hasOwnProperty('supportTextDisplayed')) {
      this.inputField.options['supportTextDisplayed'] = 'directly';
    }
  }

  initSettingsForm() {
    this.settingsForm = this.fb.group({
      label: [this.inputField.name],
      placeholder: [this.inputField.options.placeholder],
      language: [this.inputField.options.language],
      isSupportText: [this.inputField.options.isSupportText],
      supportText: [this.inputField.options.supportText],
      supportTextDisplayed: [this.inputField.options.supportTextDisplayed],
    });
  }

  onChangesSettingsForm() {
    this.settingsForm.valueChanges.subscribe((val) => {
      this.inputField.name = val.label;
      this.inputField.options.placeholder = val.placeholder;
      this.inputField.options.language = val.language;
      this.inputField.options.isSupportText = val.isSupportText;
      this.inputField.options.supportText = val.supportText;
      this.inputField.options.supportTextDisplayed = val.supportTextDisplayed;
    });
  }

}
