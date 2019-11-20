import { Component, OnInit, Input } from '@angular/core';
import { Field } from '@models/data-collection/field.model';
import { FormGroup, FormControl } from '@angular/forms';
import { OnlineFormService } from '../../services/online-form.service';
import { GenerateErrorsService } from '../../utils/generate-errors.service';
import { FormModel } from '@models/data-collection/form.model';

@Component({
  selector: 'sw-general-info-section',
  templateUrl: './general-info-section.component.html',
  styleUrls: ['./general-info-section.component.scss']
})
export class GeneralInfoSectionComponent implements OnInit {
  // TODO: Remove after create custom table
  @Input() form: FormModel;
  @Input() section: Field;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;
  @Input() isViewOnly: boolean;

  groups: Field[];
  fields: Field[];

  constructor() {}

  ngOnInit() {
    this.initGroups();
    this.initFields();
  }

  initGroups() {
    this.groups = this.section.fields.filter(item => {
      return item.type === 113 || item.type === 114;
    });
  }

  initFields() {
    this.fields = this.section.fields.filter(item => {
      return item.type && item.type !== 113 && item.type !== 114;
    });
  }

  getFormErrorsById(id) {
    return this.formErrors[id] ? this.formErrors[id] : {};
  }

  getWidth(field: Field): string {
    return field.width ? field.width : 'quarter';
  }

  isShowTitle(): boolean {
    return !this.section.options.hideLabel;
  }

  getSectionTitle(): string {
    return this.section.name;
  }

  getSectionHint(): string {
    return this.section.options.hint;
  }

}
