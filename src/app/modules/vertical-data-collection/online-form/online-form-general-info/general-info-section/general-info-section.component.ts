import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/vertical-data-collection/field.model';
import { FormGroup, FormControl } from '@angular/forms';
import { OnlineFormService } from '../../services/online-form.service';

@Component({
  selector: 'app-general-info-section',
  templateUrl: './general-info-section.component.html',
  styleUrls: ['./general-info-section.component.scss']
})
export class GeneralInfoSectionComponent implements OnInit {
  @Input() section: Field;
  @Input() sectionId: string;

  groups: Field[];
  fields: Field[];

  constructor() { }

  ngOnInit() {
    this.initGroups();
    this.initFields();
  }

  initGroups() {
    this.groups = this.section.fields.filter((item) => {
      return item.type === 113;
    })
  }

  initFields() {
    this.fields = this.section.fields.filter((item) => {
      return item.type && item.type !== 113;
    })
  }

}
