import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

const defaultSettings: ITypeFieldSettings = {
  minSizeChar: 1,
  maxSizeChar: 30,
  inputMask: '',
  isDefaultValue: false,
  defaultValue: '',
};

@Component({
  selector: 'app-short-text-settings',
  templateUrl: './short-text-settings.component.html',
  styleUrls: ['./short-text-settings.component.css']
})
export class ShortTextSettingsComponent implements OnInit {
  @Input() inputField: Field;
  shortTextSettingsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initShortTextSettings();
    this.initShortTextSettingsForm();
    this.onChangesShortTextSettingsForm();
  }

  initShortTextSettings() {
    if (!this.inputField.hasOwnProperty('typeSettings' )) {
      this.inputField.typeSettings = Object.assign(defaultSettings);
    }
  }

  initShortTextSettingsForm() {
    this.shortTextSettingsForm = this.fb.group({
      minSizeChar: [this.inputField.typeSettings.minSizeChar],
      maxSizeChar: [this.inputField.typeSettings.maxSizeChar],
      inputMask: [this.inputField.typeSettings.inputMask],
      isDefaultValue: [this.inputField.typeSettings.isDefaultValue],
      defaultValue: [this.inputField.typeSettings.defaultValue],
    });
  }

  onChangesShortTextSettingsForm() {
    this.shortTextSettingsForm.valueChanges.subscribe((val) => {
      this.inputField.typeSettings = Object.assign(val);
    });
  }

}
