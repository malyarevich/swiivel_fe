import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {VFormService} from '../../v-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {v4 as uuid} from 'uuid';
import {cloneDeep, isEmpty} from 'lodash';
import {Location} from '@angular/common';
import {VFieldsService} from "../../v-fields.service";
import {Field} from "../../model/field.model";
import {
  TuitionContract,
  tuitionContractDefault
} from "./v-tuition-contract/models/tuition-contract.model";
import {Form} from "../../model/form.model";
import {FormPayment, TYPE_NAME} from "./v-form-payment/model/form-payment.model";
import {ConsentInfo, consentItemDefault} from "./v-consent/model/consent.model";
import {DocumentSideBar, DocumentsModel} from "./v-documents-forms/model/documents.model";

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-builder.html',
  styleUrls: ['./v-form-builder.scss'],
})
export class VFormBuilderComponent implements OnInit {
  validNewCustomFieldName: boolean = true;
  showAddButton = true;
  formId: string = '';
  warningVisible: boolean = false;
  showWarningMessage: string = 'Please correct existing errors';
  searchText: string;
  fields: Field[] = [];
  formName: string = '';
  customFields: Field[];
  existingFields: Field[];
  sideBarFields: Field[];
  tuitionContract: TuitionContract = tuitionContractDefault;
  consentInfo: ConsentInfo[] = [];
  eligible: string;

  isFormsFields: boolean = false;
  isConsent: boolean = true;
  isDocumentsForms: DocumentSideBar = {
    isActiveAll: false,
    isDocuments: true,
    isForms: true
  };
  isTuitionContract: boolean = false;
  isFormPayment: boolean = false;


  documents: DocumentsModel[] = [
    {
      name: "Elementary School Calendar",
      isUpload: false,
      isPerFamily: true,
      data: {
        name: "BBY Contract 1 Student.pdf",
        link: "../../../../../assets/files/BBY Contract 1 Student.pdf"
      }
    },
    {
      name: "Proof of Address",
      isUpload: true,
      isPerFamily: false
    }
  ];

  formPaymentSideBar: FormPayment[] = [
    {
      name: 'TUITION', isActive: false,
      type: {
        value: 0, name:  TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'BAIS MEDRASH WINTER DORMITORY FEE', isActive: true,
      type: {
        value: 0, name:  TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'LUNCH FEE', isActive: false,
      type: {
        value: 0, name: TYPE_NAME.fixed,
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'BUSING/TRANSPORTATION', isActive: false,
      type: {
        value: 0, name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'REGISTRATION', isActive: true,
      type: {
        value: 0, name:  TYPE_NAME.percentage,
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'SUPPLIES', isActive: true,
      type: {
        value: 0, name: TYPE_NAME.full,
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: 'ACTIVITY FEE', isActive: false,
      type: {
        value: 0, name: TYPE_NAME.fixed,
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    }
  ];
    // {
    //   title: 'Terms and Conditions 2',
    //   text: {
    //     value: 'I allow my child to play in sport game',
    //     isBold: false,
    //     isItalic: false,
    //   },
    //   checkbox: {
    //     isActive: false,
    //     text: '',
    //   },
    //   signature: {
    //     isRequire: true,
    //     type: 'e', //e|wet
    //     eType: 'external', //external|system
    //     isBothParents: true,
    //   }
    // },
    // {
    //   title: 'Terms and Conditions 1',
    //   text: {
    //     value: 'I allow my child to play in sport game',
    //     isBold: false,
    //     isItalic: false,
    //   },
    //   checkbox: {
    //     isActive: true,
    //     text: 'I agree that I have read the terms and conditions',
    //   },
    //   signature: {
    //     isRequire: true,
    //     type: 'e', //e|wet
    //     eType: 'external', //external|system
    //     isBothParents: false,
    //   }
    // }
  // ];

  @ViewChild("addCustomFieldInput") addCustomFieldInput: ElementRef;

  constructor(private formService: VFormService,
              private fieldsService: VFieldsService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.parent.url.subscribe((urlPath) => {
      const url = urlPath[urlPath.length - 1].path;
      this.formId = url != 'v-form-constructor' ? url : '';
    });

    this.loadBasicFields();
    this.loadSideBar();
    this.loadMappedFields();


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

  loadSideBar() {
    this.fieldsService.getExistingSideBarList().subscribe((fields: Field[]) => {
        this.sideBarFields = fields;
        this.sideBarFields.forEach(field => {
          if (field.type == 113) {
            field.fields.forEach(f => f.exist = false)
          }
          field.exist = false
        });

      },
      (error) => console.log(error, 'error'),
      () => this.formInit()
    );
  }


  formInit(): void {
    if (this.formId) {
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form) => {
          if (!isEmpty(form)) {
            this.formName = form.name;
            this.fields = form.fields || [];
            this.tuitionContract = form.tuitionContract ? form.tuitionContract : tuitionContractDefault;
            this.consentInfo = form.consentInfo || [];
            this.eligible = form.eligible;
          }
        },
        (error) => console.log(error, 'error'),
        () => {if(!isEmpty(this.fields)){
          this.initFormFieldsToSideBar(this.sideBarFields, this.fields);
        }}
      );
    }

  }

  initFormFieldsToSideBar(sideBar: Field[], workArea: Field[]) {
    sideBar.forEach(sideBarField => {
      workArea.forEach(field => {
        if (sideBarField.name == field.name) {
          if (field.type == 113) this.initFormFieldsToSideBar(sideBarField.fields, field.fields);
          sideBarField.exist = true
        }
      })
    })
  }

  saveForm() {
    if (this.validCheckFields()) {
      const form: Form = {
        _id: this.formId,
        fields: this.fields,
        name: this.formName,
        sidebar: this.sideBarFields,
        tuitionContract: this.tuitionContract,
        consentInfo: this.consentInfo,
        eligible: this.eligible,
        step: 1
      };
      this.formService.sendForm(form).subscribe(res => this.goBack());
    }
  }

  drop(event: CdkDragDrop<Field[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if ((event.previousContainer.id == 'workPlaceList' && event.container.id == '6372c882-3d14-486f-9c1f-52ae8ab928ef') ||
      (event.container.id == 'workPlaceList' && event.previousContainer.id == '6372c882-3d14-486f-9c1f-52ae8ab928ef')) {
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


  onChangeGroupBeing(field, group) {
    group = cloneDeep(group);
    let arr = this.fields.filter(field => field.name == group.name);
    if (isEmpty(arr)) {
      group.fields = [];
      this.addExistingField(field, group.fields);
      this.addExistingField(group, this.fields);
    } else {
      this.fields = this.fields.map(f => {
        if (f.name == group.name) {
          this.addExistingField(field, f.fields);
        }
        return f;
      });
    }

  }

  onChangeFieldBeing(field: Field) {
    field.exist
      ? this.addExistingField(field, this.fields)
      : this.onDelete(field.name);
  }

  addExistingField(field: Field, fields: Field[]) {
    let newField = cloneDeep(field);
    newField._id = uuid();
    this.doExistingFieldsUniq(newField);
    newField.isValid = true;
    newField.isValidName = true;
    fields.push(newField);
    this.fieldsValidator();

  }

  addNewCustomField(name: string, fields: Field[]) {
    if (name.length < 3 || !this.validNewCustomFieldName) {
      this.showAddButton = true;
      return;
    }
    let newField: Field = cloneDeep(this.customFields[0]);
    newField.name = name;
    newField._id = uuid();
    newField.exist = false;

    newField.isValid = true;
    newField.isValidName = true;
    newField.isValidName = this.checkExistingFieldsName(newField.name);
    //this.doExistingFieldsUniq(newField);
    // this.fields.push( newField);
    fields.push(newField);
    this.fieldsValidator();
    this.showAddButton = true;

  }

  nameChange(event) {
    this.validNewCustomFieldName = this.checkExistingFieldsName(event.target.value.trim());
  }


  //find in main array or nester(group) filed and delete
  findAndDelete(name: string, fields: Field[]) {
    let find = fields.find(field => field.name == name);
    if (find) {
      fields = fields.filter((field) => field.name != name);

    }
    return fields;
  }

  onDelete(name: string) {
    this.fields = this.findAndDelete(name, this.fields);
    this.fields.map(group => group.type == 113 ? group.fields = this.findAndDelete(name, group.fields) : group);

    this.fieldsValidator();
  }

  onChange(uniqEvent, field) {
    if (field.mapped == '') {
      field.isValidName = this.checkExistingFieldsName(field.name);
    }
  }

  onDeleteCustom(name: string) {
    this.onDelete(name);
    this.sideBarFields = this.sideBarFields.filter((field) => field.name != name);

  }

  onUniq(event) {
    this.fieldsValidator();

  }


  fieldsValidator() {

    this.fields.map(field => field.isValid = true);
    const uniqFields = this.fields.filter(field => {
      return field.options.unique == true;
    });
    uniqFields.forEach((field) => {
      this.labelCheck(field.name);
    });

  }


  checkExistingFieldsName(name: string): boolean {
    const arr = this.existingFields.filter((field => field.name.toLowerCase() == name.toLowerCase()));
    return isEmpty(arr);
  }

  trackByFn(index) {
    return index;
  }

  //
  labelCheck(name: string): boolean {
    const arr = this.fields.filter((field) => field.name == name);
    if (arr.length > 1) {
      arr.map(field => field.isValid = false);
    }
    return arr.length > 1;
  }


  disableWarning() {
    this.warningVisible = false;
  }


  goBack() {
    this.router.navigate([`/vertical-data-collection/`]);
  }


  doExistingFieldsUniq(field: Field) {
    if (field.mapped) {
      field.options.unique = true;
    }
  }


  validCheckFields() {
    const result = this.fields.filter(field => field.isValid == false || field.isValidName == false);
    if (!isEmpty(result)) {
      this.warningVisible = true;
    }
    return isEmpty(result);
  }

  addConsentItem() {
    let consentItem = cloneDeep(consentItemDefault);
    this.consentInfo.push(consentItem);
  }

  removeConsentItem(i) {
    this.consentInfo.splice(i, 1);
  }
}

