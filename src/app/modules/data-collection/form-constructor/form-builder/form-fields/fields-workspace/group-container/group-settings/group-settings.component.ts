import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../../../model/form.model";

@Component({
  selector: 'app-v-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.scss']
})
export class GroupSettingsComponent implements OnInit {
  @Input() inputGroup;
  @Input() form: Form;

  tab: string = 'settings';

  constructor() {
  }

  ngOnInit() {
  }

}
