import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-fields-setting-preset',
  templateUrl: './v-fields-setting-preset.component.html',
  styleUrls: ['./v-fields-setting-preset.component.css']
})
export class VFieldsSettingPresetComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
