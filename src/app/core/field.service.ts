import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldType } from '@shared/fields.enum';
import { flatMapDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }
  toFlatTree(fields: any[], level = 0) {
      const res = flatMapDeep(fields.slice(), (field) => {
        field.level = level;
        if (field.type === FieldType.SECTION || field.type === FieldType.GROUP) {
          if (field.fields && field.fields.length > 0) {
            field.expandable = true;
            field.expanded = false;
            const children = this.toFlatTree(field.fields, level + 1);
            field.fields = null;
            children.push(field);
            return children;
          } else {
            return field;
          }
        } else {
          return field;
        }
      });
      return res;
  }
  fromArray(fields: any[], recursive?): FormGroup | any[] {
    const form = {};
    for (const field of fields) {
      const key = field.mapped || field.name;
      if (field.type === FieldType.GROUP || field.type === FieldType.SECTION) {
        if (!field.fields) { field.fields = []; }
        if (field.fields.length > 0) {
          form[key] = this.fromArray(field.fields, true);
          field.control = form[key];
        } else {
          form[key] = new FormGroup({});
          field.control = form[key];
        }
      } else {
        let state = null;
        const validators = [];
        if (field.value) { state = {value: field.value, disabled: false}; }
        if (field.options) {
          if (!!field.options.required) { validators.push(Validators.required); }
          if (field.typeSettings) {
            if ('minSizeChar' in field.typeSettings) {
              validators.push(Validators.minLength(field.typeSettings.minSizeChar));
            }
            if ('maxSizeChar' in field.typeSettings) {
              validators.push(Validators.maxLength(field.typeSettings.maxSizeChar));
            }
          }
        }
        form[key] = new FormControl(state, validators);
        field.control = form[key];
      }
    }
    if (recursive) {
      return new FormGroup(form);
    } else {
      return fields;

    }
  }
}
