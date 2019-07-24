import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-fields-setting-option-checkboxes',
  templateUrl: './v-fields-setting-option-checkboxes.component.html',
  styleUrls: ['./v-fields-setting-option-checkboxes.component.css']
})
export class VFieldsSettingOptionCheckboxesComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
