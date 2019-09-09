import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FieldType } from '@shared/enums/fields.enum';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }
  toForm(fields: any[]) {
    let form = {};
    for (let field of fields) {
      if (field.type === FieldType.GROUP || field.type === FieldType.SECTION) {
        if (!field.fields) field.fields = [];
        if (field.fields.length > 0) {
          form[field.name] = this.toForm(field.fields);
          field.control = form[field.name];
        } else {
          console.info(`${FieldType[field.field]} ${field.name} is empty`);
          form[field.name] = new FormGroup({});
          field.control = form[field.name];
        }
      } else {
        let state = null;
        let validators = [];
        if (field.options) {
          state = {};
          if (field.options.value) state['value'] = field.options.value;
          state = null; // temporary
          if (!!field.options.readonly) state['disabled'] = true;
          if (field.options.required) validators.push(Validators.required);

        }
        if (field.validators && field.validators.length > 0) {
          for (let validator of field.validators) {
            validators.push(validator);
          }
        }
        console.log(state)
        form[field.name] = new FormControl(state, validators);
        field.control = form[field.name];
      }
    }
    return new FormGroup(form);
  }
}
