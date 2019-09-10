import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { flatMapDeep } from 'lodash';
import { FieldType } from '@shared/enums/fields.enum';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }
  toFlatTree(fields: any[], level = 0) {
    // fields = fields.slice();
    // for (let field of fields) {
      let res = flatMapDeep(fields.slice(), (field) => {
        field.level = level;
        if (field.type === FieldType.SECTION || field.type === FieldType.GROUP) {
          if (field.fields && field.fields.length > 0) {
            field.expandable = true;
            let children = this.toFlatTree(field.fields, level+1);
            field.fields = null;
            children.push(field);
            return children;
          } else {
            return field;
          }
        // } else if (field.type === FieldType.GROUP) {
        //   if (field.fields && field.fields.length > 0) {
        //     field.expandable = true;
        //     let children = this.toFlatTree(field.fields, level+1);
        //     field.fields = null;
        //     children.push(field);
        //     return children;
        //   } else {
        //     return field;
        //   }
        } else {
          return field;
        }
      });
      // if (field.type === FieldType.GROUP || field.type === FieldType.SECTION) {
      // console.table(res)
      return res;
      // }
    // }
  }
  fromArray(fields: any[], recursive?): FormGroup | any[] {
    let form = {};
    for (let field of fields) {
      let key = field.mapped || field.name;
      if (field.type === FieldType.GROUP || field.type === FieldType.SECTION) {
        if (!field.fields) field.fields = [];
        if (field.fields.length > 0) {
          form[key] = this.fromArray(field.fields, true);
          field.control = form[key];
        } else {
          console.info(`${FieldType[field.field]} ${field.name} is empty`);
          form[key] = new FormGroup({});
          field.control = form[key];
        }
      } else {
        let state = null;
        let validators = [];
        if (field.value) state = {value: field.value, disabled: false};
        if (field.options) {
          if (!!field.options.required) validators.push(Validators.required);
          if (field.typeSettings) {
            if ('minSizeChar' in field.typeSettings) {
              validators.push(Validators.minLength(field.typeSettings.minSizeChar));
            }
            if ('maxSizeChar' in field.typeSettings) {
              validators.push(Validators.maxLength(field.typeSettings.maxSizeChar));
            }
          }
        }
        // if (field.validators && field.validators.length > 0) {
        //   for (let validator of field.validators) {
        //     validators.push(validator);
        //   }
        // }
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
