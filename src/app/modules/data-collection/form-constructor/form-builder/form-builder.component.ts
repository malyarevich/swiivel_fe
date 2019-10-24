import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  Host,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { FormService } from "../../services/form.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty, isPlainObject, values } from "lodash";
import { Location } from "@angular/common";
import { FieldsService } from "../../services/fields.service";
import { Form } from "src/app/models/data-collection/form.model";
import {
  FormPayment,
  TYPE_NAME
} from "./form-payment/model/form-payment.model";
import {
  ConsentInfo,
  consentInfoDefault,
  consentItemDefault
} from "src/app/models/data-collection/form-constructor/form-builder/consent.model";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import { FilesService } from "../../services/files.service";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "src/app/enums";
import {
  PaymentSettings,
  paymentSettingsDefault,
  paymentSettingsItemDefault
} from "src/app/models/data-collection/form-constructor/form-builder/payment-settings.model";
import { FinanceService } from "src/app/services/finance/finance.service";
import { DataCollectionComponent } from "../../data-collection.component";
import { Observable, Subscription } from "rxjs";
import { SaveFormService } from "../../services/save-form.service";
import { FormBuilderIsSavedService } from "../../services/form-builder-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import { Fee } from "src/app/models/fee.model";
import {
  activeSectionsDefault,
  IActiveSections
} from "src/app/models/data-collection/form-constructor/form-builder/active-section.model";
import {
  TuitionContract,
  tuitionContractDefault
} from "src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import {
  TermsConditions,
  termsConditionsDefault,
  termsConditionsItemDefault
} from "src/app/models/data-collection/form-constructor/form-builder/terms-conditions.model";
import {
  documentsFormsDefault,
  DocumentsFormsModel
} from "src/app/models/data-collection/form-constructor/form-builder/documents-forms.model";
import { Field } from 'src/app/models/data-collection/field.model';
import { DocumentSideBar, DocumentsModel, documentItemDefault } from 'src/app/models/data-collection/form-constructor/form-builder/documents.model';
import { FormsPDFModel, formPDFItemDefault } from 'src/app/models/data-collection/form-constructor/form-builder/formsPDF.model';
import { SideBarService } from './form-fields/side-bar/side-bar.service';
import { FormBuilder } from '@angular/forms';
import { array, object } from '@storybook/addon-knobs';

@Component({
  selector: "app-form-table",
  templateUrl: "./form-builder.html",
  styleUrls: ["./form-builder.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  @Input() saveEvents: Observable<void>;

  static countSaveFormService: number = 0;
  saveFormSubscription: Subscription;

  validNewCustomFieldName: boolean = true;
  showAddButton = true;
  formId: string = "";
  warningVisible: boolean = false;
  showWarningMessage: string = "Please correct existing errors";
  fields: Field[] = [];

  masterFees: Fee[] = [];

  formName: string = "";
  attachments;
  form: Form;
  newSideBar;
  idSectionForDragDrop: string[] = [];

  activeSections: IActiveSections = activeSectionsDefault;

  customFields: Field[];
  existingFields: Field[];
  sideBarFields: Field[];
  consentInfo: ConsentInfo = consentInfoDefault;
  termsConditions: TermsConditions = termsConditionsDefault;
  paymentSettings: PaymentSettings = paymentSettingsDefault;
  eligible: string;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  isEditConsentName: number | null = null;
  isEditDocumentName: string | null = null;
  isEditFormPDFName: string | null = null;
  isEditTermsConditionsName: string | null = null;
  isEditPaymentSettingsName: string | null = null;

  isDocumentsForms: DocumentSideBar = {
    isDocuments: true,
    isForms: true
  };

  documentsForms: DocumentsFormsModel;
  documents: DocumentsModel[] = [];
  formsPDF: FormsPDFModel[] = [];

  formPaymentSideBar: FormPayment[] = [
    {
      name: "TUITION",
      isActive: false,
      type: {
        value: 0,
        name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "BAIS MEDRASH WINTER DORMITORY FEE",
      isActive: true,
      type: {
        value: 0,
        name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "LUNCH FEE",
      isActive: false,
      type: {
        value: 0,
        name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "BUSING/TRANSPORTATION",
      isActive: false,
      type: {
        value: 0,
        name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "REGISTRATION",
      isActive: true,
      type: {
        value: 0,
        name: TYPE_NAME.percentage
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "SUPPLIES",
      isActive: true,
      type: {
        value: 0,
        name: TYPE_NAME.full
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    },
    {
      name: "ACTIVITY FEE",
      isActive: false,
      type: {
        value: 0,
        name: TYPE_NAME.fixed
      },
      payMore: {
        isActive: false,
        isAllow: false
      }
    }
  ];
  documentBut = [
    {
      label: 'Upload',
      value: true
    },
    {
      label: 'Download',
      value: false
    }
  ];
  formBut = [
    {
      label: 'Use Existing',
      value: false
    },
    {
      label: 'Create New',
      value: true
    }
  ];
  consentButtonOptions = [
    {
      label: 'Any Parent',
      value: false
    },
    {
      label: 'Both Parents',
      value: true
    }
  ];

  radioGroup = ['Needed Per Family', 'Needed Per Student'];

  vDataCollection: DataCollectionComponent;
  draftId: string;

  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";
  isPerFamilyD: any[] = [];
  isPerFamilyF: any[] = [];

  @ViewChild("addCustomFieldInput", { static: false })
  addCustomFieldInput: ElementRef;
  constructor(
    @Host() vDataCollection: DataCollectionComponent,
    private formService: FormService,
    private fieldsService: FieldsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private formBuilderIsSavedService: FormBuilderIsSavedService,
    private fileService: FilesService,
    private saveFormService: SaveFormService,
    private cdr: ChangeDetectorRef,
    private sidebarService: SideBarService,
    private fb: FormBuilder,

  ) {
    this.vDataCollection = vDataCollection;
    this.sidebarService.events$.subscribe((event: any) => {
      if (event.action === 'update') {
        if (event.data) {
          this.newSideBar = JSON.parse(JSON.stringify(event.data));
        }
      }
      if (event.action === 'moveField') {
        console.log(event.field, event.toIndex)
      }

    });
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    // if (VFormBuilderComponent.countSaveFormService < 1) {
    this.saveFormSubscription = this.saveFormService.onSaveForm.subscribe(
      () => {
        this.saveForm();
      }
    );
    // }
    FormBuilderComponent.countSaveFormService++;

    this.formBuilderIsSavedService.setIsSaved(false);
    this.route.parent.parent.parent.parent.params.subscribe((params: Params) => {
      this.formId = params.hasOwnProperty('id') ? params.id : '';
    });
    this.draftId = this.formId + "_form-builder";
    this.loadBasicFields();
    // this.loadSideBar();
    this.loadSideBarNew();
    this.loadMappedFields();
    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
    this.loadDocsForms();
  }

  loadDocsForms() {
    if (this.documents && this.documents.length > 0) {
      this.documents.forEach((item, index) => {
        if (item.isPerFamily === true) {
          this.isPerFamilyD[index] = 'Needed Per Family';
        } else {
          this.isPerFamilyD[index] = 'Needed Per Student';
        }
      });
    }
    if (this.formsPDF && this.formsPDF.length > 0) {
      this.formsPDF.forEach((item, index) => {
        if (item.isPerFamily === true) {
          this.isPerFamilyF[index] = 'Needed Per Family';
        } else {
          this.isPerFamilyF[index] = 'Needed Per Student';
        }
      });
    }
  }

  changeDocRadio(e, form) {
    if (e === 'Needed Per Family') {
      form.isPerFamily = true;
    } else {
      form.isPerFamily = false;
    }
  }

  addDocumentItem() {
    let documentItem: DocumentsModel = cloneDeep(documentItemDefault);
    documentItem.id = uuid();
    this.documents.push(documentItem);
    this.isPerFamilyD[this.documents.length - 1] = 'Needed Per Family';
  }

  removeDocument(id: string): void {
    this.isPerFamilyD.splice(this.documents.findIndex(doc => doc.id === id), 1);
    this.documents = this.documents.filter(doc => doc.id != id);
  }

  addFormPDF() {
    let formPDFItem = cloneDeep(formPDFItemDefault);
    formPDFItem.id = uuid();
    this.formsPDF.push(formPDFItem);
    this.isPerFamilyF[this.formsPDF.length - 1] = 'Needed Per Family';
  }

  removeFormsPDF(id: string) {
    this.isPerFamilyF.splice(this.formsPDF.findIndex(forms => forms.id === id), 1);
    this.formsPDF = this.formsPDF.filter(forms => forms.id != id);
  }

  loadBasicFields() {
    this.fieldsService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
      this.sidebarService.fieldTypes['schema'] = fields;
    });
  }

  loadMappedFields() {
    this.fieldsService.getExistingList().subscribe((fields: Field[]) => {
      this.existingFields = fields;
      this.sidebarService.fieldTypes['mapped'] = fields;
    });
  }

  loadSideBar() {
    this.fieldsService.getExistingSideBarList().subscribe(
      (fields: Field[]) => {
        this.sideBarFields = fields;
        this.sideBarFields.forEach(field => {
          if (field.type == 113) {
            field.fields.forEach(f => (f.exist = false));
          }
          field.exist = false;
        });
      },
      error => console.log(error, "error"),
      () => this.formInit()
    );
  }

  loadSideBarNew() {
    this.fieldsService.getExistingSideBarList().subscribe(
      (data: Object) => {
        this.newSideBar = data;
      },
      error => console.log(error, "error"),
      () => this.formInit()
    );
  }

  setLocalForm(form: Form): void {
    if (!isEmpty(form)) {
      this.form = form;
      this.formName = form.name;
      this.fields = this.form.fields = form.fields || [];
      this.consentInfo = form.consentInfo || consentInfoDefault;
      this.termsConditions = form.termsConditions || termsConditionsDefault;
      this.paymentSettings = form.paymentSettings || paymentSettingsDefault;
      this.eligible = form.eligible;
      this.documentsForms = form.documentsForms || documentsFormsDefault;
      this.documents = form.documents;
      this.formsPDF = form.forms || [];
      this.attachments = form.attachments || {};
      this.activeSections = form.activeSections || activeSectionsDefault;
      this.newSideBar = this.initSideBar(form);
      this.cdr.markForCheck();
    }
  }



  initSideBar(form) {
    const getPathId = (field) => {
      if (field.path) {
        return field.path.join('') + field.type;
      }
    }
    const flatten = (fields) => {
      let result = [];
      if (isPlainObject(fields)) {
        fields = values(fields);
      }
      for (const field of fields) {
        if (field.fields) {
          result.push(...flatten(field.fields))
        }
        result.push(field);
      }
      return result;
    }
    const joinForm = (field, path = []) => {
      let result;
      if (field.fields) {
        path.push(field.name);
        field.fields = field.fields.map(cfield => joinForm(cfield, path))
      }
      let found = flatten(form.fields).find(ffield => {
        return field.name === ffield.name && field.type === ffield.type;
      })
      if (found) {

        if (field.type < 112) {
          found.isActive = true;
          result = found;
        } else {
          let fields = JSON.parse(JSON.stringify(field.fields));
          field = JSON.parse(JSON.stringify(found));
          field.isActive = true;
          field.fields = fields;

          // field._id = found.id
          result = field;
        }
      } else {
        field.isActive = false;
        result = field;
      }

      return result;
    }
    return this.newSideBar.map(field => joinForm(field)).slice()
  }


  formInit(): void {
    console.log(this.vDataCollection)
    const form = this.vDataCollection.getDraftForm(this.draftId);
    if (!isEmpty(form)) {
      // console.log("loading draftForm");
      this.setLocalForm(form); //draftForm
    } else if (this.formId) {
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form) => {
          // console.log("loading remoteForm");
          console.log(form)
          this.setLocalForm(form); //remoteForm
        },
        error => console.log(error, "error"),
        () => {
          this.generalInfoIsValidService.setIsValid(true);
          if (!isEmpty(this.fields)) {
            // this.initFormFieldsToSideBar(this.newSideBar, this.fields);
          }

        }
      );
    }
  }

  initFormFieldsToSideBar(sideBar: Field[], workArea: Field[]) {
    sideBar.forEach(sideBarField => {
      workArea.forEach(field => {
        if (sideBarField.name == field.name) {
          if (field.type == 113)
            this.initFormFieldsToSideBar(sideBarField.fields, field.fields);
          sideBarField.exist = true;
        }
      });
    });
  }
  formToArray(form) {
    let arr = [];
    for (let key of Object.keys(form)) {
      let field = form[key];
      if (field.fields) {
        field.fields = this.formToArray(field.fields);
      }
      arr.push(field);
    }
    return arr;
  }
  prepareFields() {
    if (this.sidebarService.form.form) {
      let fields = this.formToArray(this.sidebarService.form.form.value);
      console.log('sending', fields)
      return fields;
    } else {
      return [];
    }
  }
  getForm(): Form {
    return {
      _id: this.formId,
      fields: this.prepareFields(),
      // fields: this.fields,
      documentsForms: this.documentsForms,
      documents: this.documents,
      forms: this.formsPDF,
      name: this.formName,
      sidebar: this.newSideBar,
      consentInfo: this.consentInfo,
      termsConditions: this.termsConditions,
      paymentSettings: this.paymentSettings,
      eligible: this.eligible,
      step: 1,
      activeSections: this.activeSections
    };
  }

  saveForm() {
    // if (this.validCheckFields()) {
    if (this.form && !this.isDataSaving) {
      const form: Form = this.getForm();
      this.spinnerText = "Data is saving...";
      this.isDataSaving = true;
      this.constructorIsSavingService.setIsSaving(this.isDataSaving);
      this.formService.sendForm(form).subscribe(res => {
        this.formBuilderIsSavedService.setIsSaved(res["updated"]);
        this.router.navigate([`/form-constructor/${this.formId}/publish-settings`]);

        this.isDataSaving = !this.saveFormService.getSavingStatus();
        this.constructorIsSavingService.setIsSaving(this.isDataSaving);
        if (this.isDataSaving) {
          this.spinnerText = "Other tabs are saving...";
        } else {
          this.spinnerText = "Data is loading...";
        }
      });
    }
    this.vDataCollection.deleteDraftForm(this.formId);
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
    this.validNewCustomFieldName = this.checkExistingFieldsName(
      event.target.value.trim()
    );
  }

  //find in main array or nester(group) filed and delete
  findAndDelete(name: string, fields: Field[]) {
    let find = fields.find(field => field.name == name);
    if (find) {
      fields = fields.filter(field => field.name != name);
    }
    return fields;
  }

  onDelete(name: string) {
    this.fields = this.findAndDelete(name, this.fields);
    this.fields.map(group =>
      group.type == 113
        ? (group.fields = this.findAndDelete(name, group.fields))
        : group
    );

    this.fieldsValidator();
  }

  onChange(uniqEvent, field) {
    if (field.mapped == "") {
      field.isValidName = this.checkExistingFieldsName(field.name);
    }
  }

  onDeleteCustom(name: string) {
    this.onDelete(name);
    this.sideBarFields = this.sideBarFields.filter(field => field.name != name);
  }

  onUniq(event) {
    this.fieldsValidator();
  }

  fieldsValidator() {
    this.fields.map(field => (field.isValid = true));
    const uniqFields = this.fields.filter(field => {
      return field.options.unique == true;
    });
    uniqFields.forEach(field => {
      this.labelCheck(field.name);
    });
  }

  checkExistingFieldsName(name: string): boolean {
    const arr = this.existingFields.filter(
      field => field.name.toLowerCase() == name.toLowerCase()
    );
    return isEmpty(arr);
  }

  trackByFn(index) {
    return index;
  }

  //
  labelCheck(name: string): boolean {
    const arr = this.fields.filter(field => field.name == name);
    if (arr.length > 1) {
      arr.map(field => (field.isValid = false));
    }
    return arr.length > 1;
  }

  disableWarning() {
    this.warningVisible = false;
  }

  public saveDraftForm(): void {
    // console.log("SAVE draft");
    if (this.formId && this.form) {
      this.vDataCollection.setDraftForm(this.draftId, this.getForm());
    }
  }

  goBack() {
    this.router.navigate([`/data-collection/`]);
  }

  doExistingFieldsUniq(field: Field) {
    if (field.mapped) {
      field.options.unique = true;
    }
  }

  validCheckFields() {
    const result = this.fields.filter(
      field => field.isValid == false || field.isValidName == false
    );
    if (!isEmpty(result)) {
      this.warningVisible = true;
    }
    return isEmpty(result);
  }

  addConsentItem() {
    let consentItem = cloneDeep(consentItemDefault);
    consentItem.id = uuid();
    this.consentInfo.consents.push(consentItem);
  }

  removeConsentItem(i) {
    this.consentInfo.consents.splice(i, 1);
  }

  addTermsConditionsItem() {
    let termsConditionsItem = cloneDeep(termsConditionsItemDefault);
    termsConditionsItem.id = uuid();
    this.termsConditions.termsConditionsItems.push(termsConditionsItem);
  }

  removeTermsConditionsItem(id) {
    this.termsConditions.termsConditionsItems = this.termsConditions.termsConditionsItems.filter(
      item => {
        return item.id !== id;
      }
    );
  }

  addPaymentSettingsItem() {
    let paymentSettingsItem = cloneDeep(paymentSettingsItemDefault);
    paymentSettingsItem.id = uuid();
    this.paymentSettings.paymentSettingsItems.push(paymentSettingsItem);
  }

  removePaymentSettingsItem(id) {
    this.paymentSettings.paymentSettingsItems = this.paymentSettings.paymentSettingsItems.filter(
      item => {
        return item.id !== id;
      }
    );
  }

  prevStep() {
    this.router.navigate([`/form-constructor/${this.formId}/general-information`]);
  }

  nextStep(): void {
    this.saveForm();
  }

  getIcon(check): string {
    return check ? 'fa-caret-up' : 'fa-caret-down';
  }

  ngOnDestroy(): void {
    this.saveDraftForm();
    // this.saveFormService.unsubscribe();

    if (FormBuilderComponent.countSaveFormService > 1 && this.saveFormSubscription) {
      this.saveFormSubscription.unsubscribe();
      FormBuilderComponent.countSaveFormService--;
    }
  }
}
