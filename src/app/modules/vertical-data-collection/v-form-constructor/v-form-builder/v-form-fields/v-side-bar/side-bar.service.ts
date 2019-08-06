import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Field} from '../../../../model/field.model';
import {v4 as uuid} from 'uuid';
import {cloneDeep, isEmpty, isEqual} from 'lodash';
import {Form} from '../../../../model/form.model';

@Injectable({
  providedIn: 'root'
})

export class SideBarService {

  sectionSubject: BehaviorSubject<object> = new BehaviorSubject({});

  constructor() {}

  onChangeGroup(group, form) {
    form = cloneDeep(group);
    form.fields = [];
    group.fields.forEach(field => {
      this.addExistingField(field, form.fields);
    });
  }

  onChangeField(field, form) {
    const index = form.findIndex(el => el.name === field.name);
    if (index === -1) {
      this.addExistingField(field, form);
    } else {
      form.splice(index, 1);
    }
  }

  addExistingField(field, form) {
    const newField = cloneDeep(field);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
    form.push(newField);
  }

  // findIfPresent(field: Field, filedList: Field[]) {
  //   const arr = [];
  //   filedList.filter(f => {
  //     if (f.type == 113 || f.type == 114) {
  //       const a = this.findIfPresent(field, f.fields);
  //       // console.log(a, 'a');
  //       a.forEach(t => arr.push(t));
  //     }
  //     if (f.name == field.name && f.prefix == field.prefix) {
  //       arr.push(field);
  //     }
  //   });
  //   // console.log(arr);
  //   return arr;
  // }

  // onFieldByIdDelete(field: Field, filedList: Field[]) {
  //   filedList.forEach(f => {
  //     if (f.type == 113 || f.type == 114) { this.onFieldDelete(field, f.fields); }
  //     if (f._id == field._id ) { filedList.splice(filedList.indexOf(f), 1); }
  //   });
  // }


  // changeAllGroupAndNested(event: boolean, field: Field) {
  //   field.fields.forEach(f => {
  //     if (f.type == 113) { this.changeAllGroupAndNested(event, f); }
  //     f.exist = event;
  //   });
  // }

  // onFieldUncheck(field: Field, filedList: Field[]) {
  //   filedList.forEach(f => {
  //     // console.log(f);
  //     if (f.type == 113 || f.type == 114) { this.onFieldUncheck(field, f.fields); }
  //     if (f.name == field.name && f.prefix == field.prefix) { f.exist = false; }
  //   });
  // }

  // fieldCheck(field: Field, filedList: Field) {
  //   // console.log(field,filedList);
  //   filedList.fields.forEach(f => {
  //     if (f.type == 113 || f.type == 114) { this.fieldCheck(field, f); }
  //     if (f.name == field.name && f.prefix == field.prefix) { f.exist = true; }
  //   });
  // }

  // onSectionUnckeck(field: Field, filedList: Field[]) {
  //   filedList.forEach(f => {
  //     if (f.type == 113) { this.onFieldUncheck(field, f.fields); }
  //   });
  // }


  // getIdOfSection(fieldList: Field[]) {
  //   if (!fieldList) { return; }
  //   return  fieldList.map(groupSection => {
  //     if (groupSection.type == 113 || groupSection.type == 114) {
  //       this.getIdOfSection(groupSection.fields);
  //       // console.log(groupSection._id);
  //       return groupSection._id;
  //     }
  //   });
  //
  // }



}
