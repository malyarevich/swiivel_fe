import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Field} from '../../data-collection/reducers/field/field.model';
import {VFormService} from '../v-form.service';
import {Form} from '../../data-collection/reducers/forms/form.model';
import {ActivatedRoute, Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import { cloneDeep,isEmpty } from 'lodash';
import {Location} from '@angular/common';

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-constructor..html',
  styleUrls: ['./v-form-constructor..css'],
})
export class VFormConstructorComponent implements OnInit {


warningVisible: boolean = false;
warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';
warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
showWarningMessage: string;

  formId: string = '0';
  fields: Field[] = [];
  formName: string = '';
  customFields: Field[];
  existingFields: Field[];

  constructor(private formService: VFormService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit() {
    this.loadBasicFields();
    this.loadMappedFields();
    this.formInit();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }


  loadBasicFields() {
    this.formService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
    });
  }

  loadMappedFields() {
    this.formService.getExistingList().subscribe((fields: Field[]) => {
      this.existingFields = fields;
    });
  }

  addField(field: Field) {
    const newField = cloneDeep(field);
    newField._id = uuid();
    this.doExistingFieldsUniq(newField);
    newField.isValid = false;
    this.fields.push(newField);
    this.fieldsValidator();

  }

  saveForm() {
    if (this.validCheckFields()) {
    const form: Form = {
      _id: this.formId,
      fields: this.fields,
      name: this.formName
    };
      this.formService.sendForm(form).subscribe(res => res);
      this.goBack();

    }

  }

  onDelete(id: string) {

    this.fields = this.fields.filter((field) => field._id != id);
    this.fieldsValidator();
  }

  onChange(uniqEvent, field){
    this.fieldsValidator();
    this.fieldNameValidator(field);
  }

  fieldNameValidator(field: Field){
    const result = this.checkExistingFieldsName(field.name);
    if(!result){
      this.showWarningMessage = this.warningCheckExistingLabelString;
      field.isValid = false;
      this.warningVisible = true;
    }
  return result;
  }

  fieldsValidator():boolean{

    this.fields.map(field=>field.isValid=true);
    let result = true;
    const uniqFields=this.fields.filter(field=>{
      return field.options.unique==true;
    });
    uniqFields.forEach((field)=>{
      result = !this.labelCheck(field.name);
    });
    this.warningVisible=!result;
    if(this.warningVisible){
      this.showWarningMessage = this.warningCheckUniqString;
    }
    return result;
  }


  checkExistingFieldsName(name: string): boolean{
    const arr = this.existingFields.filter((field=>field.name==name));
    return isEmpty(arr);
  }

  trackByFn(index) {
    return index;
  }

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
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.formService.getOneForm(id).subscribe(
        (form: Form)=>{
          if(!isEmpty(form)){
            this.formName = form.name;
            this.fields = form.fields;
            this.formId = form._id;
            this.fieldsValidator();
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
    const result = this.fields.filter(field=>field.isValid==false);
    return isEmpty(result);
  }
}

