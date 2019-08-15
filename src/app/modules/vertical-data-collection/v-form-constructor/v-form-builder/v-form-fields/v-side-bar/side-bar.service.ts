import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Field} from '../../../../model/field.model';
import {v4 as uuid} from 'uuid';
import {cloneDeep} from 'lodash';
import {Form} from '../../../../model/form.model';

@Injectable({
  providedIn: 'root'
})

export class SideBarService {

  constructor() {}

  public sectionSubject: BehaviorSubject<object> = new BehaviorSubject({});

  public onSectionToggle(event, section: Field, form: Field[]): void {
    section.exist = event.target.checked;
    this.onFieldToggle(section, form);
    const index = form.findIndex(el => el.name === section.name);
    section.fields.forEach((group: Field, groupIndex: number) => {
      group.exist = section.exist;
      if (form[index]) {
        this.addExistingData(group, form[index].fields);
      }
      if (group.type === 113) {
        group.fields.forEach((field: Field, fieldIndex: number) => {
          field.exist = section.exist;
          if (form[index]) {
            this.addExistingData(field, form[index].fields[groupIndex].fields);
          }
          if (field.type === 113) {
            field.fields.forEach((innerField: Field) => {
              innerField.exist = section.exist;
              if (form[index]) {
                this.addExistingData(innerField, form[index].fields[groupIndex].fields[fieldIndex].fields);
              }
            });
          }
        });
      }
    });
  }

  public onGroupToggle(event, group: Field, form: Field[]): void {
    group.exist = event.target.checked;
    this.onFieldToggle(group, form);
    const index = form.findIndex(el => el.name === group.name);
    group.fields.forEach((field: Field, fieldIndex: number) => {
      field.exist = group.exist;
      if (form[index]) {
        this.addExistingData(field, form[index].fields);
      }
      if (field.type === 113) {
        field.fields.forEach((innerField: Field) => {
          innerField.exist = group.exist;
          if (form[index]) {
            this.addExistingData(innerField, form[index].fields[fieldIndex].fields);
          }
        });
      }
    });
  }

  public onFieldToggle(field: Field, form: Field[]): void {
    const index = form.findIndex(el => el.name === field.name);
    if (index > -1) {
      form.splice(index, 1);
    } else {
      this.addExistingField(field, form);
    }
  }

  public addExistingField(field: Field, form: Field[]): void {
    const newField = cloneDeep(field);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
    form.push(newField);
  }

  public addExistingData(field: Field, form: Field[]): void {
    const newField = form.find(el => el.name === field.name);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
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
