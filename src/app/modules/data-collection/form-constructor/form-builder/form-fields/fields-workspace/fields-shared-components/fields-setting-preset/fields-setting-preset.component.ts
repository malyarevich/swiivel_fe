import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fields-setting-preset',
  templateUrl: './fields-setting-preset.component.html',
  styleUrls: ['./fields-setting-preset.component.css']
})
export class FieldsSettingPresetComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
