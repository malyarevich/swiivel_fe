import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-v-section-settings',
  templateUrl: './v-section-settings.component.html',
  styleUrls: ['./v-section-settings.component.scss']
})
export class VSectionSettingsComponent implements OnInit {


  sectionSettings: FormGroup = new FormGroup({
    settings: new FormGroup({
      groupPresent: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])}),
      isSupportText: new FormControl(true, Validators.required),
      isSupportTextData: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])}),
      isDirectlyDisplayed: new FormControl(true, Validators.required),
      isHidden: new FormControl(true, Validators.required),
      isMakeExpandButtonVisible: new FormControl(true, Validators.required),

    }),

  });

//   export interface SectionOption {
//   size? : number,
//   settings: SectionOptionSettings,
//   conditionLogic: any
// }
//
// export interface SectionOptionSettings {
//   groupPresent?: string,
//   isSupportText?: boolean,
//   isSupportTextData?: string
//   isDirectlyDisplayed?: boolean,
//   isMakeExpandButtonVisible?: boolean,
// }


settingsLabel = 'Group Presets';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.sectionSettings.value);
  }
}
