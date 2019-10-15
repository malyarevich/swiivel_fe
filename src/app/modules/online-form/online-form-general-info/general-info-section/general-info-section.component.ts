import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/data-collection/field.model';
import { FormGroup, FormControl } from '@angular/forms';
import { OnlineFormService } from '../../services/online-form.service';
import { GenerateErrorsService } from '../../utils/generate-errors.service';
import { Form } from '@app/models/data-collection/form.model';

@Component({
  selector: 'sw-general-info-section',
  templateUrl: './general-info-section.component.html',
  styleUrls: ['./general-info-section.component.scss']
})
export class GeneralInfoSectionComponent implements OnInit {
  // TODO: Remove after create custom table
  @Input() form: Form;
  @Input() section: Field;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;

  groups: Field[];
  fields: Field[];

  constructor() {}

  ngOnInit() {
    this.initGroups();
    this.initFields();
  }

  initGroups() {
    this.groups = this.section.fields.filter(item => {
      return item.type === 113;
    });
  }

  initFields() {
    this.fields = this.section.fields.filter(item => {
      return item.type && item.type !== 113;
    });
  }

  getFormErrorsById(id) {
    return this.formErrors[id] ? this.formErrors[id] : {};
  }
}
