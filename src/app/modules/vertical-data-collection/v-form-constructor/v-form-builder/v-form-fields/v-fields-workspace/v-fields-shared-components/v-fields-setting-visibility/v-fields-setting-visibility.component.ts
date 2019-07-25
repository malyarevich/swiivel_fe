import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-fields-setting-visibility',
  templateUrl: './v-fields-setting-visibility.component.html',
  styleUrls: ['./v-fields-setting-visibility.component.scss']
})
export class VFieldsSettingVisibilityComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
