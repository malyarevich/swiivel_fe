import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  isFullWidth: true,
  editorMode: 'plain',
};

@Component({
  selector: 'app-v-long-text-settings',
  templateUrl: './long-text-settings.component.html',
  styleUrls: ['./long-text-settings.component.scss']
})
export class LongTextSettingsComponent implements OnInit {
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
      isFullWidth: [this.inputField.typeSettings.isFullWidth],
      editorMode: [this.inputField.typeSettings.editorMode],
    });
  }

  onChangesSettingsForm() {
    this.settingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
