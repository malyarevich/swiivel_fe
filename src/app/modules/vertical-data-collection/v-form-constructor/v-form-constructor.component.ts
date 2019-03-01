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
warningString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';
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
    this.loadBasicFilds();
    this.loadMappedFilds();
    this.formInit();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }


  loadBasicFilds() {
    this.formService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
    });
  }

  loadMappedFilds() {
    this.formService.getExistingList().subscribe((fields: Field[]) => {
      this.existingFields = fields;
    });
  }

  addFiled(field: Field) {
    const newField = cloneDeep(field);
    newField._id = uuid();
    this.fields.push(newField);

  }

  saveForm() {
    if (this.checkBeforeSending(this.fields)) {

    const form: Form = {
      _id: this.formId,
      fields: this.fields,
      name: this.formName
    };

      this.formService.sendForm(form).subscribe(res => res);
      this.goBack();
  }else {
      this.warningVisible = true;
    }
  }

  onDelete(id: string) {

    this.fields = this.fields.filter((field) => field._id != id)
  }


  onChange(uniqEvent, field){
    if(uniqEvent){
      this.warningVisible=this.labelCheck(field.name);
    }else if(field.mapped!='string'){
      this.warningVisible=this.mappedCheck(field.mapped);
    }
  }


  trackByFn(index) {
    return index;
  }

  labelCheck(name: string):boolean{
  const arr =  this.fields.filter((field)=>field.name==name);

    return arr.length>1;
  }

  mappedCheck(mapped: string):boolean{
  const arr =  this.fields.filter((field)=>field.mapped==mapped);

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
          }
        },
        (error)=>console.log(error, 'error')
      );
    }

  }

  checkBeforeSending(fields: Field[]):boolean{
    let result = true;
    fields=fields.filter(field=>field.options.unique==true);
    fields.forEach((field)=>{
      result = !this.labelCheck(field.name);
      if(field.mapped!='string'){
        result = !this.mappedCheck(field.mapped);
      }


    });
    return result;
  }

  goBack() {
    this.location.back();
  }
}

