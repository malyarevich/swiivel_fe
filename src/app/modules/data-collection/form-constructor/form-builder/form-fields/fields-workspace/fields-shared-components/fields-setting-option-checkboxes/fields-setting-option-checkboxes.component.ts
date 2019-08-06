import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-fields-setting-option-checkboxes',
  templateUrl: './fields-setting-option-checkboxes.component.html',
  styleUrls: ['./fields-setting-option-checkboxes.component.css']
})
export class FieldsSettingOptionCheckboxesComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
