import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-v-fields-setting-support-text',
  templateUrl: './v-fields-setting-support-text.component.html',
  styleUrls: ['./v-fields-setting-support-text.component.css']
})
export class VFieldsSettingSupportTextComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
