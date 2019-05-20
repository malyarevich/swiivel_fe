import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../model/form.model";
import {Field} from "../../../../model/field.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { range } from 'lodash'
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-v-fields-workspace',
  templateUrl: './v-fields-workspace.component.html',
  styleUrls: ['./v-fields-workspace.component.scss']
})
export class VFieldsWorkspaceComponent implements OnInit {

  sectionAddGroup: FormGroup = new FormGroup({
    sectionName: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])}),
    sectionSize: new FormControl(4, Validators.required),
  });

  @Input() form: Form;
  @Input() customFields: Field[];
  size = range(1  ,13);
  constructor(private modalService: NgbModal,  fb: FormBuilder) {

  }

  ngOnInit() {
    // console.log(this.form);
  }

  openModal(content) {
    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      console.log(reason);
    });
  }


  addSection(){
    this.validateAllFormFields(this.sectionAddGroup);
    console.log(this.sectionAddGroup, 'dsdas');
    console.log(this.sectionAddGroup.get('sectionName').invalid);
    console.log(this.sectionAddGroup.get('sectionName').touched);
    if (!this.sectionAddGroup.valid) return;
    this.sectionAddGroup.clearValidators();
    // const newSection :Field = {
    //   _id: uuid(),
    //   name: this.sectionAddGroup.value.sectionName,
    //   type: 114,
    //   prefix:
    //
    // }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }

}
