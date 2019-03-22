import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {Field} from '../../../data-collection/reducers/field/field.model';
import {VFormService} from '../../v-form.service';
import {Form} from '../../../data-collection/reducers/forms/form.model';
import {ActivatedRoute, Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import { cloneDeep,isEmpty } from 'lodash';
import {Location} from '@angular/common';
import {VFieldsService} from "../../v-fields.service";

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-builder..html',
  styleUrls: ['./v-form-builder..css'],
})
export class VFormBuilderComponent implements OnInit {

  formId: string='';
warningVisible: boolean = false;
showWarningMessage: string = 'Please correct existing errors';

  fields: Field[] = [];
  formName: string = '';
  customFields: Field[];
  existingFields: Field[];

  constructor(private formService: VFormService,
              private fieldsService: VFieldsService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit() {
    this.route.parent.url.subscribe((urlPath) => {
      const url =  urlPath[urlPath.length - 1].path;
      this.formId = url!='v-form-constructor'?url:'';
    });


    this.loadBasicFields();
    this.loadMappedFields();
    this.formInit();

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.addField(this.fields[event.currentIndex]);
    }
  }


  loadBasicFields() {
    this.fieldsService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
    });
  }

  loadMappedFields() {
    this.fieldsService.getExistingList().subscribe((fields: Field[]) => {
      this.existingFields = fields;
    });
  }

  addField(field: Field) {
    let newField = cloneDeep(field);
    newField._id = uuid();
    this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    if(newField.mapped==''){
      newField.isValidName = this.checkExistingFieldsName(newField.name);

    }
    //replace cloned field that which copy to field array with object link by AM Drag&Drop native method
    this.fields = this.fields.map(item => item._id==field._id?newField:item);
    this.fieldsValidator();

  }

  saveForm() {
    if (this.validCheckFields()) {
    const form: Form = {
      _id: this.formId,
      fields: this.fields,
      name: this.formName
    };

     this.formService.sendForm(form).subscribe(res => this.goBack());


     }

  }

  onDelete(id: string) {

    this.fields = this.fields.filter((field) => field._id != id);
    this.fieldsValidator();
  }

  onChange(uniqEvent, field){
    if(field.mapped==''){
      field.isValidName  = this.checkExistingFieldsName(field.name);
    }
  }

    onFieldChanged(field) {
        let index = this.getFieldIndex(field._id);
        this.fields[index] = field;
    }

    getFieldIndex(id) {
        return this.fields.findIndex((item => item._id == id));
    }

  onUniq(event){
      this.fieldsValidator();

  }


  fieldsValidator(){

    this.fields.map(field=>field.isValid=true);
    const uniqFields=this.fields.filter(field=>{
      return field.options.unique==true;
    });
    uniqFields.forEach((field)=>{
      this.labelCheck(field.name);
    });

  }


  checkExistingFieldsName(name: string): boolean{
    const arr = this.existingFields.filter((field=>field.name==name));
    return isEmpty(arr);
  }

  trackByFn(index) {
    return index;
  }
  //
  labelCheck(name: string):boolean{
  const arr =  this.fields.filter((field)=>field.name==name);
   if(arr.length>1){
      arr.map(field=>field.isValid=false);
    }
    return arr.length>1;
  }


  disableWarning(){
    this.warningVisible=false;
  }


  formInit(): void{

    if(this.formId){
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form)=>{
          if(!isEmpty(form)){
            this.formName = form.name;
            this.fields = form.fields;
          }
        },
        (error)=>console.log(error, 'error')
      );
    }

  }


  goBack() {
    this.location.back();
  }


  doExistingFieldsUniq(field: Field){
    if(field.mapped){
      field.options.unique = true;
    }
  }


  validCheckFields(){
    const result = this.fields.filter(field=>field.isValid==false||field.isValidName==false);
  if(!isEmpty(result)){
    this.warningVisible = true;
  }
    return isEmpty(result);
  }
}

