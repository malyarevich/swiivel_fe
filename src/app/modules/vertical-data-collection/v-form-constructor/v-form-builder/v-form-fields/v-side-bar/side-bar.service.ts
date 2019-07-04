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


//TODO: this is not good code,  to put it mildly. should rewrite! I am sorry about this
  onChangeGroupBeing(group: Field,  section: Field,  form?: Form, rootGroup?: Field) {
    console.log(arguments);
    // console.log('formPeriods' in section);
    // console.log(section._id, form._id);
    if(section._id==form._id) this.pureAddAllFieldsToList(group, section.fields);
    // if(section._id==form._id) this.pureAddAllFieldsToList(group, section.fields);
    let  sectionNew = cloneDeep(section);
    let  groupNew = cloneDeep(group);
    let newRootGroup;
    let arr = form.fields.filter(f => f.name == section.name);
    if(rootGroup&&isEmpty(arr)){
      newRootGroup = cloneDeep(rootGroup);
      sectionNew.fields = [];
      newRootGroup.fields = [];
      groupNew.fields = [];
      group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
      this.addExistingField(groupNew, sectionNew.fields);
      this.addExistingField(sectionNew, form.fields);
      if(hasOwnProperty(section, 'type')){
        section.exist = true;
      }
    }
    if (isEmpty(arr)&&!rootGroup) {
      sectionNew.fields = [];

      groupNew.fields = [];
      group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
      this.addExistingField(groupNew, sectionNew.fields);
      this.addExistingField(sectionNew, form.fields);
      if(hasOwnProperty(section, 'type')){
         section.exist = true;
      }
    } else {
      console.log('else');
      console.log(arr);
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

  pureAddAllFieldsToList(field: Field, list: Field[]): Field[]
  {
    let newField: Field = cloneDeep(field);
    newField.fields = [];
    newField._id = uuid();
    if(newField.type==113 || newField.type==114){
       field.fields.forEach(f=>{
        this.pureAddAllFieldsToList(f, newField.fields);
      })
    }
    // list.push(newField);
    this.addExistingField(newField, list);
    console.log(newField);

    return list;
  }
  // onChangeGroupBeing(group: Field, section, form: Form) {
  //   let  sectionNew = cloneDeep(section);
  //   let  groupNew = cloneDeep(group);
  //   let arr = form.fields.filter(f => f.name == section.name);
  //   if (isEmpty(arr)) {
  //     sectionNew.fields = [];
  //     groupNew.fields = [];
  //     group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
  //     this.addExistingField(group, sectionNew.fields);
  //     this.addExistingField(sectionNew, form.fields);
  //     if(hasOwnProperty(section, 'type')){
  //        section.exist = true;
  //     }
  //   } else {
  //     console.log('else');
  //     console.log(arr);
  //     form.fields = form.fields.map(f => {
  //       if (f.name == sectionNew.name) {
  //         groupNew.fields = [];
  //         group.fields.forEach(field=>this.addExistingField(field, groupNew.fields));
  //         this.addExistingField(groupNew, f.fields);
  //       }
  //       return f;
  //     });
  //   }
  //
  // }

  addExistingField(field: Field, fields: Field[]) {
    let newField = cloneDeep(field);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
    fields.push(newField);

  }

  replaceExistinField(field: Field, fields: Field[]) {

    let newField = cloneDeep(field);
    newField._id = uuid();

    newField.isValid = true;
    newField.isValidName = true;

    return  fields.map(item => item.name==field.name&&item.prefix==field.prefix?newField:item);


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


  changeAllGroupAndNested(event: boolean, field: Field){
    field.fields.forEach(f=>{
      if(f.type==113) this.changeAllGroupAndNested(event, f);
      f.exist=event;
    })
  }

  onFieldUncheck(field:Field,filedList: Field[]){
    filedList.forEach(f=>{
      // console.log(f);
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
