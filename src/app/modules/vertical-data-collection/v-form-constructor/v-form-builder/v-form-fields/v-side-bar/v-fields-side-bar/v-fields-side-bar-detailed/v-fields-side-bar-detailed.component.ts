import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Field} from "../../../../../../model/field.model";
import {crumbs} from "../index";
import {SideBarService} from "../../side-bar.service";
import {Form} from "../../../../../../model/form.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {VFieldsService} from 'src/app/modules/vertical-data-collection/services/v-fields.service';
import {v4 as uuid} from 'uuid';
import {cloneDeep, isEmpty} from 'lodash';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-v-fields-side-bar-detailed',
  templateUrl: './v-fields-side-bar-detailed.component.html',
  styleUrls: ['./v-fields-side-bar-detailed.component.scss']
})
export class VFieldsSideBarDetailedComponent implements OnInit,  OnDestroy {

  @Input() searchText: string;
  fieldsAddGroup: FormGroup = new FormGroup({
    fieldsName: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])}),
    fieldType: new FormControl(null, Validators.required),
    fieldRole: new FormControl(null, Validators.required),
    sectionRelate: new FormControl(null, Validators.required),
  });

  @Input() idSectionForDragDrop: string[];

  @Input() section: Field;
  @Input() form;
  nestedLevel: number = 0;
  showNested: boolean  = true;
  //TODO:remake static "crumps" to autogenerated
  crumbs = crumbs;
  roleList: String[];
  customFields: Field[];
  constructor(private sideBarService: SideBarService,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private fieldService: VFieldsService) {
  }

  ngOnInit() {
    this.initFormFieldsToSideBar( [this.section], this.form.fields);
    this.getRoleList();
    this.loadBasicFields();

  }

  returnToTree(){
    this.sideBarService.sectionSubject.next({});
  }

  onBeingChange(event){
   if(event){
     this.sideBarService.onChangeGroupBeing(
       this.section,
       this.form,
       this.form
     );
     this.sideBarService.changeExistingAllSection(true, this.section.fields);
   }else{
     this.sideBarService.onSectionDelete(
       this.section,
       this.form,
     );
     this.sideBarService.changeExistingAllSection(false, this.section.fields)

   }

  }



  initFormFieldsToSideBar(sideBar: Field[], workArea: Field[]) {
    sideBar.forEach(sideBarField => {
      workArea.forEach(field => {
        if (sideBarField.name == field.name) {
          sideBarField.exist = true;
          if (field.type == 113 || field.type == 114){
            this.initFormFieldsToSideBar(sideBarField.fields, field.fields);
          }

        }
      })
    })
  }

  ngOnDestroy(): void {
    this.sideBarService.sectionSubject.next({});
  }

  getRoleList(){
    this.fieldService.getRoleList().subscribe((rolelist: String[]) => this.roleList = rolelist);
  }

  loadBasicFields() {
    this.fieldService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields.filter(field=>{
       if(field.type==113||field.type==114){
         return false;
       }
       return true;
      });
    });
  }

  openModal(content) {
    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      console.log(reason);
    });
  }
  addField(modal){
    this.validateAllFormFields(this.fieldsAddGroup);
    if (!this.fieldsAddGroup.valid) return;
    this.fieldsAddGroup.clearValidators();
    let newField: Field = cloneDeep(this.fieldsAddGroup.value.fieldType);
    newField.name = this.fieldsAddGroup.value.fieldsName;
    newField._id = uuid();
    newField.prefix = this.fieldsAddGroup.value.fieldRole;
    this.form.fields.forEach(section=>{
      if(section.name == this.fieldsAddGroup.value.sectionRelate.name
        &&section.prefix == this.fieldsAddGroup.value.sectionRelate.prefix){
        section.fields.push(newField);
      }
    });

    this.fieldsAddGroup.reset();
    modal.close();
  }

  modalClose(modal){
    this.fieldsAddGroup.reset();
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

}
