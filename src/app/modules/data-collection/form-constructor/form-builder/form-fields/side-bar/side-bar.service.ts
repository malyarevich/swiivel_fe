import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { cloneDeep } from 'lodash';
import { Form } from 'src/app/models/data-collection/form.model';
import { Field } from 'src/app/models/data-collection/field.model';

@Injectable({
  providedIn: 'root'
})

export class SideBarService {

  constructor() {}

  public sectionSubject: BehaviorSubject<object> = new BehaviorSubject({});

  public changeExistGroupFields(group: Field, exist: boolean) {
    group.fields.forEach((field: Field, i) => {
      field.exist = exist;
      if (field.type === 113) {
        return this.changeExistGroupFields(group.fields[i], exist);
      }
    });
  }

  public getForm(section: Field): Field {
    const newSection = cloneDeep(section);
    this.renderForm(newSection);
    return newSection;
  }

  public renderForm(group: Field) {
    if (group.exist) {
      group.fields = group.fields.filter((field: Field) => field.exist === true);
      group.fields.forEach((field: Field) => {
        if (field.type !== 113) {
          field._id = uuid();
          field.isValid = true;
          field.isValidName = true;
        } else {
          return this.renderForm(field);
        }
      });
    }
  }

  replaceExistinField(field: Field, fields: Field[]) {
    const newField = cloneDeep(field);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
    return  fields.map(item => item.name === field.name && item.prefix === field.prefix ? newField : item);
  }

  changeExistingAllSection(event, fieldList: Field[]) {
    fieldList.forEach(field => {
      if (field.type === 113) { this.changeExistingAllSection(event, field.fields); }
      field.exist = event;
    });
  }

  onSectionDelete(field: Field, filedList: Field | Form) {
    filedList.fields = filedList.fields.filter(sec => sec.name !== field.name);
  }

  onFieldDelete(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type === 113 || f.type === 114) { this.onFieldDelete(field, f.fields); }
      if (f.name === field.name && f.prefix === field.prefix) { filedList.splice(filedList.indexOf(f), 1); }
    });
  }

  findIfPresent(field: Field, filedList: Field[]) {
    const arr = [];
    filedList.filter(f => {
      if (f.type === 113 || f.type === 114) {
        const a = this.findIfPresent(field, f.fields);
        a.forEach(t => arr.push(t));
      }
      if (f.name === field.name && f.prefix === field.prefix) {
        arr.push(field);
      }
    });
    return arr;
  }

  onFieldByIdDelete(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type === 113 || f.type === 114) { this.onFieldDelete(field, f.fields); }
      if (f._id === field._id ) { filedList.splice(filedList.indexOf(f), 1); }
    });
  }

  changeAllGroupAndNested(event: boolean, field: Field) {
    field.fields.forEach(f => {
      if (f.type === 113) { this.changeAllGroupAndNested(event, f); }
      f.exist = event;
    });
  }

  onFieldUncheck(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type === 113 || f.type === 114) { this.onFieldUncheck(field, f.fields); }
      if (f.name === field.name && f.prefix === field.prefix) { f.exist = false; }
    });
  }

  fieldCheck(field: Field, filedList: Field) {
    filedList.fields.forEach(f => {
      if (f.type === 113 || f.type === 114) { this.fieldCheck(field, f); }
      if (f.name === field.name && f.prefix === field.prefix) { f.exist = true; }
    });
  }

  onSectionUnckeck(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type === 113) { this.onFieldUncheck(field, f.fields); }
    });
  }

  getIdOfSection(fieldList: Field[]) {
    if (!fieldList) { return; }
    return  fieldList.map(groupSection => {
      if (groupSection.type === 113 || groupSection.type === 114) {
        this.getIdOfSection(groupSection.fields);
        return groupSection._id;
      }
    });
  }
}
