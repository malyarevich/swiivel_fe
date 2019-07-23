import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../../../model/form.model";

@Component({
  selector: 'app-v-group-settings',
  templateUrl: './v-group-settings.component.html',
  styleUrls: ['./v-group-settings.component.scss']
})
export class VGroupSettingsComponent implements OnInit {
  @Input() inputGroup;
  @Input() form: Form;

  tab: string = 'settings';

  constructor() {
  }

  ngOnInit() {
  }

}
