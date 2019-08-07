import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fields-setting-visibility',
  templateUrl: './fields-setting-visibility.component.html',
  styleUrls: ['./fields-setting-visibility.component.scss']
})
export class FieldsSettingVisibilityComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
