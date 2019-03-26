import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormUtils} from "../../utils/form.utils";
import {Form} from "../../model/form.model";
import { cloneDeep,isEmpty } from 'lodash';
import {VFormService} from "../../v-form.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {Period} from "../../model/period.model";


@Component({
  selector: 'app-v-form-general-information',
  templateUrl: './v-form-general-information.component.html',
  styleUrls: ['./v-form-general-information.component.css']
})
export class VFormGeneralInformationComponent implements OnInit {
  formId: string ='';
  startDate;
  fields = [];
  generalInfoForm: FormGroup;



  specificGrades: boolean;

  formTypeCreation: string = 'newForm';
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formUtils: FormUtils,
              private formService: VFormService,
              private fb: FormBuilder,
              private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      const url =  urlPath[urlPath.length - 1].path;
      this.formId = url!='v-form-constructor'?url:'';
    });
    this.formInit();

  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit(){
    this.validateAllFormFields(this.generalInfoForm);
    if (!this.generalInfoForm.valid) return;
    this.generalInfoForm.clearValidators();
      const form: Form = {
        _id: this.formId,
        name: this.generalInfoForm.value.name,
        fields: this.fields,
        formDates: {
          startDate: this.parserFormatter.format(this.generalInfoForm.value.startDate),
          endDate: this.parserFormatter.format(this.generalInfoForm.value.endDate)
        }
      }


      ;
      this.formService.sendForm(form).subscribe((res:any) => {
        this.router.navigate([`/vertical-data-collection/v-form-constructor/${res.id}/form-builder`]);

      });
  }


  formInit(): void{

    this.generalInfoForm = new FormGroup({
        name: new FormControl('', {
          validators: Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)
          ])}),
        language: new FormControl(),
        endDate: new FormControl(new Date(1971, 10, 10), Validators.required),
        startDate: new FormControl(new Date(1971, 10, 10), Validators.required),
        // allParent: new FormControl('Y')
      }
    );

    if(this.formId){
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form)=>{
          if(!isEmpty(form)){
            this.fields = form.fields;
            this.generalInfoForm.setValue({
              name: form.name,
                language: 'english',
              endDate: this.parserFormatter.parse(form.formDates['endDate']),
              startDate: this.parserFormatter.parse(form.formDates['startDate']),
            })
          }
        },
        (error)=>console.log(error, 'error')
      );
    }


  }



}
