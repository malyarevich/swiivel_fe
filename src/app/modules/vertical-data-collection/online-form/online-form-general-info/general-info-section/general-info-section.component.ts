import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../../model/field.model';

@Component({
  selector: 'app-general-info-section',
  templateUrl: './general-info-section.component.html',
  styleUrls: ['./general-info-section.component.scss']
})
export class GeneralInfoSectionComponent implements OnInit {
  @Input() section: Field;

  constructor() { }

  ngOnInit() {
  }

}
