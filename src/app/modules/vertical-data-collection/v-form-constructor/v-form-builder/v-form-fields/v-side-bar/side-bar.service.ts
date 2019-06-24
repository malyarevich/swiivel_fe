import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Field} from "../../../../model/field.model";
import {v4 as uuid} from 'uuid';
import {cloneDeep, isEmpty} from 'lodash';
import {Form} from "../../../../model/form.model";
import {hasOwnProperty} from 'tslint/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  sectionSubject = new BehaviorSubject({});

  constructor() {
  }



  onChangeGroupBeing(group: Field, section, form: Form) {
     console.log(section, group, 'onChangeGroupBeing');
    let  sectionNew = cloneDeep(section);
    let  groupNew = cloneDeep(group);
    let arr = form.fields.filter(f => f.name == section.name);
    if (isEmpty(arr)) {
      console.log(arr);
      sectionNew.fields = [];
      groupNew.fields = [];
      group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
      // console.log(groupNew);
      this.addExistingField(group, sectionNew.fields);
      this.addExistingField(sectionNew, form.fields);
      if(hasOwnProperty(section, 'type')){
  section.exist = true;
}
    } else {
      console.log('else');
      form.fields = form.fields.map(f => {
        if (f.name == sectionNew.name) {
          groupNew.fields = [];
          group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
          this.addExistingField(groupNew, f.fields);
        }
        return f;
      });
    }

  }

  addExistingField(field: Field, fields: Field[]) {
    console.log(field);
    let newField = cloneDeep(field);
    newField._id = uuid();
    // this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    fields.push(newField);
     // fields.map(item => item.name==field.name&&item.prefix==field.prefix?newField:item)
    // this.fieldsValidator();
    // this.changeExistingAllSection(true, this.section.fields);

  }

  replaceExistinField(field: Field, fields: Field[]) {

    let newField = cloneDeep(field);
    newField._id = uuid();
    // this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    // fields.push(newField);
    return  fields.map(item => item.name==field.name&&item.prefix==field.prefix?newField:item);
     // console.log(fields);
    // this.fieldsValidator();
    // this.changeExistingAllSection(true, this.section.fields);

  }

  changeExistingAllSection(event, fieldList: Field[]) {
    // console.log(fieldList);
    fieldList.forEach(field => {
      if (field.type == 113) this.changeExistingAllSection(event, field.fields);
      // console.log(field, event);
      field.exist = event;
      // console.log(field, event);

    })
  }

  onSectionDelete(field: Field, filedList: Field | Form) {
  // console.log(field, filedList);
    filedList.fields = filedList.fields.filter(sec => sec.name != field.name);
    // if (field.type == 113 || field.type == 114){
    //   this.onDelete(fi)
    // }
    // this.fields = this.findAndDelete(name, this.fields);
    // this.fields.map(group => group.type == 113 ? group.fields = this.findAndDelete(name, group.fields) : group);
    // this.sideBarService.changeExistingAllSection(false, this.section.fields);

    // this.fieldsValidator();

  }

  onFieldDelete(field: Field, filedList: Field[]){

    filedList.forEach(f=>{
      if (f.type == 113 || f.type == 114) this.onFieldDelete(field, f.fields);
      // console.log(f);
      if(f.name==field.name && f.prefix==field.prefix) filedList.splice(filedList.indexOf(f), 1)
    })
  }

  onFieldByIdDelete(field: Field, filedList: Field[]){

    filedList.forEach(f=>{
      if (f.type == 113 || f.type == 114) this.onFieldDelete(field, f.fields);
      // console.log(f);
      if(f._id==field._id ) filedList.splice(filedList.indexOf(f), 1)
    })
  }


  onFieldUncheck(field:Field,filedList: Field[]){
    filedList.forEach(f=>{
      if (f.type == 113 || f.type == 114) this.onFieldUncheck(field, f.fields);
      if(f.name==field.name && f.prefix==field.prefix) f.exist = false;
    })
  }

  fieldCheck(field:Field,filedList: Field){
    // console.log(field,filedList);
    filedList.fields.forEach(f=>{
      if (f.type == 113 || f.type == 114) this.fieldCheck(field, f);
      if(f.name==field.name && f.prefix==field.prefix) f.exist = true;
    })
  }

  onSectionUnckeck(field:Field,filedList: Field[]) {
    filedList.forEach(f=>{
      if (f.type == 113) this.onFieldUncheck(field, f.fields);
    })
  }


  getIdOfSection(fieldList: Field[]){
    if(!fieldList) return;
   return  fieldList.map(groupSection =>{
      if(groupSection.type==113 || groupSection.type==114){
        this.getIdOfSection(groupSection.fields);
        // console.log(groupSection._id);
        return groupSection._id;
      }
    })

  }

  ////////////////////////

  // addEntityByParams(form: Form, field:Field, group?: Field, section?: Field ){
  //   let newGroup: Field, newSection: Field ;
  //   if(group) newGroup = cloneDeep(group);
  //   if(section) newSection = cloneDeep(section);
  //   if()
  //
  // }
  //
  // addField(field: Field, fieldList: Field[]):void{
  //   let newField = cloneDeep(field);
  //   newField._id = uuid();
  //   newField.fields=[];
  //   newField.isValid = true;
  //   newField.isValidName = true;
  //   fieldList.push(newField);
  //
  // }
  //
  // checkEntityExisting(field: Field, fieldList: Field[]):boolean{
  //  let list = fieldList.filter(f=> {
  //    if(f.name == field.name && f.prefix==field.prefix) return f;
  //  });
  //   return list.length>0;
  // }
  //
  // deleteField(field: Field, fieldList: Field[]):void{
  //
  //   fieldList.forEach(f=>{
  //     if (f.type == 113 || f.type == 114) this.deleteField(field, f.fields);
  //
  //     if(f.name==field.name && f.prefix==field.prefix) fieldList.splice(fieldList.indexOf(f), 1)
  //   })
  // }
  //
  // deleteFieldById(id: string, form: Form| Field){
  //   form.fields.forEach(f=>{
  //     if (f.type == 113 || f.type == 114) this.deleteFieldById(id, f);
  //
  //     if(id==f._id) form.fields.splice(form.fields.indexOf(f), 1)
  //   })
  //
  // }

}
