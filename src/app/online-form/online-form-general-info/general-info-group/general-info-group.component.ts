import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';

@Component({
  selector: 'sw-general-info-group',
  templateUrl: './general-info-group.component.html',
  styleUrls: ['./general-info-group.component.scss']
})
export class GeneralInfoGroupComponent implements OnInit {
  @Input() group: Field;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;
  @Input() groupCaption: string;
  @Input() isViewOnly: boolean;

  groups: Field[];
  fields: Field[];

  hoveredPopupHint = false;

  constructor() {}

  ngOnInit() {
    this.groupCaption = this.groupCaption
      ? `${this.groupCaption}   /   ${this.group.name}`
      : this.group.name;
    this.initNestedGroups();
    this.initFields();
  }

  initNestedGroups() {
    if (this.group.fields) {
      this.groups = this.group.fields.filter(item => {
        return item.type === 113 || item.type === 114;
      });
    }
  }

  initFields() {
    if (this.group.fields) {
      this.fields = this.group.fields.filter(item => {
        return item.type && item.type !== 113 && item.type !== 114;
      });
    }
  }

  isShowGroupHint() {
    return this.group.options.showHint;
  }

  isGroupHintDirectly() {
    return this.group.options.displayStrategy === 'Directly Displayed';
  }

  getGroupHint(): string {
    return this.group.options.hint;
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

  hasErrors() {
    // console.log( this.formErrors );
    // console.log( Object.values(this.formErrors).length !== 0 );
    // console.log( this.formErrors.constructor === Object);
    return (
      Object.values(this.formErrors).length !== 0 &&
      this.formErrors.constructor === Object
    );
  }

  getGroupErrors() {
    return this.formErrors ? this.formErrors : {};
  }

  getFormErrorsById(id) {
    return this.formErrors[id] ? this.formErrors[id] : {};
  }

  getErrorByNodeId(id, targetNode = this.formErrors) {
    let errors = {};
    if (
      !(
        Object.values(targetNode).length === 0 &&
        targetNode.constructor === Object
      )
    ) {
      if (
        this.fg.contains(id) ||
        (this.fg.controls[id] && this.fg.controls[id].disabled)
      ) {
        errors[id] = targetNode[id];
      } else {
        if (targetNode[id]) {
          Object.keys(targetNode[id]).forEach(key => {
            errors = {
              ...errors,
              ...this.getErrorByNodeId(key, targetNode[id])
            };
          });
        } else {
          Object.keys(targetNode).forEach(key => {
            errors = {
              ...errors,
              ...this.getErrorByNodeId(key, targetNode)
            };
          });
        }
      }
    }
    return errors;
  }

  getWidth(field: Field): string {
    return field.width ? field.width : 'quarter';
  }
}
