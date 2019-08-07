import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fields-setting-support-text',
  templateUrl: './fields-setting-support-text.component.html',
  styleUrls: ['./fields-setting-support-text.component.css']
})
export class FieldsSettingSupportTextComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
