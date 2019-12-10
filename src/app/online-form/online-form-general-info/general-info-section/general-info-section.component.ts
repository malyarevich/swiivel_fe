import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';
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

  hoveredPopupHint = false;

  constructor() {}

  ngOnInit() {
    this.initGroups();
    this.initFields();
  }

  initGroups() {
    if (this.section.fields) {
      this.groups = this.section.fields.filter(item => {
        return item.type === 113 || item.type === 114;
      });
    }
  }

  initFields() {
    if (this.section.fields) {
      this.fields = this.section.fields.filter(item => {
        return item.type && item.type !== 113 && item.type !== 114;
      });
    }
  }

  getFormErrorsById(id) {
    return this.formErrors[id] ? this.formErrors[id] : {};
  }

  getWidth(field: Field): string {
    let widths = ['quarter','half', 'three-quarter', 'full'];
    return widths[field.options.size];
  }

  isShowTitle(): boolean {
    return !this.section.options.hideLabel;
  }

  getSectionTitle(): string {
    return this.section.name;
  }

  isShowHint(): boolean {
    return this.section.options.showHint;
  }

  isShowDirectly(): boolean {
    return this.section.options.displayStrategy === 'Directly Displayed';
  }

  getSectionHint(): string {
    return this.section.options.hint;
  }

  hoverHint(): void {
    this.hoveredPopupHint = true;
  }

  unHoverHint(): void {
    this.hoveredPopupHint = false;
  }

  isHintHovered(): boolean {
    return this.hoveredPopupHint;
  }

  hasCustomTable(): boolean {
    return false;
  }
}
