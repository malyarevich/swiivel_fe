import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../../model/field.model';

@Component({
  selector: 'app-v-section-settings',
  templateUrl: './v-section-settings.component.html',
  styleUrls: ['./v-section-settings.component.scss']
})
export class VSectionSettingsComponent implements OnInit {
  @Input() section: Field;

  conditLogic = ['Hide', 'Visible'];

  constructor() {
  }

  ngOnInit() {
  }

}
