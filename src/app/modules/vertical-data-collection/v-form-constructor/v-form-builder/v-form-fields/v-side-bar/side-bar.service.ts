import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Field} from "../../../../model/field.model";
import {v4 as uuid} from 'uuid';
import {cloneDeep, isEmpty} from 'lodash';
import {Form} from "../../../../model/form.model";

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  sectionSubject = new BehaviorSubject({});

  constructor() {
  }


  addExistingField(field: Field, fields: Field[]) {

    let newField = cloneDeep(field);
    newField._id = uuid();
    // this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    fields.push(newField);
    // this.fieldsValidator();
    // this.changeExistingAllSection(true, this.section.fields);

  }

  changeExistingAllSection(event, fieldList: Field[]) {
    // console.log(event, fieldList);
    fieldList.forEach(field => {
      if (field.type == 113) this.changeExistingAllSection(event, field.fields);
      field.exist = event;
    })
  }

  onDelete(field: Field, filedList: Field | Form) {

    filedList.fields = filedList.fields.filter(sec => sec.name != field.name);
    // this.fields = this.findAndDelete(name, this.fields);
    // this.fields.map(group => group.type == 113 ? group.fields = this.findAndDelete(name, group.fields) : group);
    // this.sideBarService.changeExistingAllSection(false, this.section.fields);

    // this.fieldsValidator();

  }
}
