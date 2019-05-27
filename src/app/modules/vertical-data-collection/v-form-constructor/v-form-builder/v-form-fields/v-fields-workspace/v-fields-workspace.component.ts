import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../model/form.model";
import {Field} from "../../../../model/field.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { range } from 'lodash'
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {v4 as uuid} from 'uuid';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

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
    sectionSize: new FormControl(null, Validators.required),
  });

  groupAddGroup: FormGroup = new FormGroup({
    groupName: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])}),
    sectionRelate: new FormControl(null, Validators.required),
  });

  @Input() form: Form;
  @Input() sideBar: Field;
  @Input() customFields: Field[];
  size = range(1  ,13);
  idSectionForDragDrop: string[] =[];
  constructor(private modalService: NgbModal,  fb: FormBuilder) {

  }

  ngOnInit() {
    this.getIdOfSection(this.form.fields);
  }

  openModal(content) {
    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      console.log(reason);
    });
  }


  addSection(modal){
    this.validateAllFormFields(this.sectionAddGroup);
    if (!this.sectionAddGroup.valid) return;
    this.sectionAddGroup.clearValidators();
    const newSection :Field = {
      _id: uuid(),
      name: this.sectionAddGroup.value.sectionName,
      type: 114,
      options: {size: this.sectionAddGroup.value.sectionSize},
      prefix: this.sectionAddGroup.value.sectionName.toLowerCase().split(' ').join('_'),
      fields: [],
    };
    this.form.fields.push(newSection);
    this.getIdOfSection(this.form.fields);
    this.sectionAddGroup.reset();
    modal.close();
  }

  addGroup(modal){
    this.validateAllFormFields(this.groupAddGroup);
    if (!this.groupAddGroup.valid) return;
    this.groupAddGroup.clearValidators();
    const newGroup :Field = {
      _id: uuid(),
      name: this.groupAddGroup.value.groupName,
      type: 113,
      options: {size: 4},
      prefix: this.groupAddGroup.value.groupName.toLowerCase().split(' ').join('_'),
      fields: [],
    };
    this.form.fields.forEach(section=>{
      if(section.name == this.groupAddGroup.value.sectionRelate.name
        &&section.prefix == this.groupAddGroup.value.sectionRelate.prefix){
        section.fields.push(newGroup);
      }
    });
    this.getIdOfSection(this.form.fields);
    this.groupAddGroup.reset();
    modal.close();
  }

  modalClose(modal){
    this.sectionAddGroup.reset();
    modal.close();
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

  drop(event: CdkDragDrop<Field[]>) {
    moveItemInArray(this.form.fields, event.previousIndex, event.currentIndex);
  }

  getIdOfSection(fieldList: Field[]){
    if(!fieldList) return;
    this.idSectionForDragDrop = fieldList.map(groupSection =>{
      if(groupSection.type==113 || groupSection.type==114){
        this.getIdOfSection(groupSection.fields);
        // console.log(groupSection._id);
        return groupSection._id;
      }
    })

  }
}
