import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../../model/field.model';

@Component({
  selector: 'app-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.scss']
})
export class SectionSettingsComponent implements OnInit {
  @Input() section: Field;

  conditLogic = ['Hide', 'Visible'];

  constructor() {
  }

  ngOnInit() {
  }

}
