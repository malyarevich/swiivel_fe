import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../../../../../model/field.model';

@Component({
  selector: 'app-v-section-settings',
  templateUrl: './v-section-settings.component.html',
  styleUrls: ['./v-section-settings.component.scss']
})
export class VSectionSettingsComponent implements OnInit {
  @Input() customFields: Field[];
 customFieldsName: string[] = [];

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

conditLogic = ['Hide', 'Visible'];
fieldLabelType = 'Field type ';

settingsLabel = 'Group Presets';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.customFieldsName = this.customFields.map( f => {
    // if(f.type!=113 && f.type!=112 && f.type!=114){
    //   console.log(f.name);
    //   return  f.name;
    // }
    // });
  }

  onSubmit(){
    console.log(this.sectionSettings.value);
  }
}
