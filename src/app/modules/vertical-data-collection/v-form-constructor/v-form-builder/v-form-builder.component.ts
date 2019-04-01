import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {VFormService} from '../../v-form.service';
import {Form} from '../../../data-collection/reducers/forms/form.model';
import {ActivatedRoute, Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import { cloneDeep,isEmpty } from 'lodash';
import {Location} from '@angular/common';
import {VFieldsService} from "../../v-fields.service";
import {Field} from "../../model/field.model";
import {ShowFeeDiscountsModel, ShowFeeModel} from "./v-tuition-contract/models/show-fee.model";

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-builder.html',
  styleUrls: ['./v-form-builder.scss'],
})
export class VFormBuilderComponent implements OnInit {
  validNewCustomFieldName: boolean = true;
  showAddButton = true;
  formId: string='';
  warningVisible: boolean = false;
  showWarningMessage: string = 'Please correct existing errors';
  searchText: string;
  fields: Field[] = [];
  formName: string = '';
  customFields: Field[];
  existingFields: Field[];

  isFormsFields: boolean = false;
  isTuitionContract: boolean = false;
  isContractSignature: boolean = false;
  splitTuitionBy: string = 'student';

  showFee: ShowFeeModel = {
    dormitory: true,
    registration: true,
    activity: false,
    tuition: true,
    scholarship: true,
    lunch: true
  };

  showFeeDiscounts: ShowFeeDiscountsModel = {
    dormitory: false,
    registration: false,
    activity: false,
    tuition: false,
    scholarship: false,
    lunch: false
  };

  @ViewChild("addCustomFieldInput") addCustomFieldInput: ElementRef;

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



  }



  drop(event: CdkDragDrop<Field[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if((event.previousContainer.id =='workPlaceList' && event.container.id=='6372c882-3d14-486f-9c1f-52ae8ab928ef') ||
      (event.container.id =='workPlaceList' && event.previousContainer.id=='6372c882-3d14-486f-9c1f-52ae8ab928ef')) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // else {
    //   copyArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    //   this.addField(this.fields[event.currentIndex]);
    // }
  }


  loadBasicFields() {
    this.fieldsService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
    });
  }

  loadMappedFields() {
    this.fieldsService.getExistingList().subscribe((fields: Field[]) => {
      this.existingFields = fields;
      this.existingFields.forEach(field=>field.exist = false);

    },(error)=>console.log(error, 'error'),
      ()=>this.formInit()
      );

  }




  onChangeFieldBeing(event: boolean, field: Field){
    if(event){
      this.addExistingField(field);
    }else{
      this.onDelete(field.name);
    }
  }
  addExistingField(field:Field){
       let newField = cloneDeep(field);
       newField._id = uuid();
       this.doExistingFieldsUniq(newField);
       newField.isValid = true;
       newField.isValidName = true;
       this.fields.push( newField);
       this.fieldsValidator();

  }

  addNewCustomField(name: string){
    if(name.length<3 || !this.validNewCustomFieldName){
      this.showAddButton = true;
      return;
    }
    let newField: Field = cloneDeep(this.customFields[0]);
    newField.name = name;
    newField._id = uuid();
    newField.exist=false;
    this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    newField.isValidName = this.checkExistingFieldsName(newField.name);
   // this.fields.push( newField);
    this.existingFields.push(newField);
    this.fieldsValidator();
    this.showAddButton = true;

  }
  nameChange(event){
    this.validNewCustomFieldName= this.checkExistingFieldsName(event.target.value.trim());
  }

  //
  // addField(field: Field) {
  //   let newField = cloneDeep(field);
  //   newField._id = uuid();
  //   this.doExistingFieldsUniq(newField);
  //   newField.isValid = true;
  //   newField.isValidName = true;
  //   if(newField.mapped==''){
  //     newField.isValidName = this.checkExistingFieldsName(newField.name);
  //
  //   }
  //   //replace cloned field that which copy to field array with object link by AM Drag&Drop native method
  //   this.fields = this.fields.map(item => item._id==field._id?newField:item);
  //   this.fieldsValidator();
  //
  // }

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
  //
  // onDelete(id: string) {
  //
  //   this.fields = this.fields.filter((field) => field._id != id);
  //   this.fieldsValidator();
  // }
  onDelete(name: string) {

    this.fields = this.fields.filter((field) => field.name != name);
    this.fieldsValidator();
  }

  onChange(uniqEvent, field){
    if(field.mapped==''){
      field.isValidName  = this.checkExistingFieldsName(field.name);
    }
  }
  onDeleteCustom(name: string){
    this.onDelete(name);
    this.existingFields = this.existingFields.filter((field) => field.name != name);

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
    const arr = this.existingFields.filter((field=>field.name.toLowerCase()==name.toLowerCase()));
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

            //TODO: rewrite this crunch

           this.existingFields.forEach(existing=>{
             return  this.fields.forEach(field=>   existing.mapped==field.mapped?existing.exist=true:existing)
            });
          }
        },
        (error)=>console.log(error, 'error'),
        ()=> this.existingFields.forEach(existing=>{
          return  this.fields.forEach(field=>   existing.mapped==field.mapped?existing.exist=true:existing)
        })
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

