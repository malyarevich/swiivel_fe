import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  Host,

} from "@angular/core";

import { VFormService } from "../../services/v-form.service";
import { ActivatedRoute, Router } from "@angular/router";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty } from "lodash";
import { Location } from "@angular/common";
import { VFieldsService } from "../../services/v-fields.service";
import { Field } from "../../model/field.model";
import { Form } from "../../model/form.model";
import {
  FormPayment,
  TYPE_NAME
} from "./v-form-payment/model/form-payment.model";
import {
  ConsentInfo,
  consentInfoDefault,
  consentItemDefault
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/consent.model";
import {
  documentItemDefault,
  DocumentSideBar,
  DocumentsModel
} from "./v-documents-forms/model/documents.model";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import {
  formPDFItemDefault,
  FormsPDFModel
} from "./v-documents-forms/model/formsPDF.model";
import { VFilesService } from "../../services/v-files.service";

import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import {
  PaymentSettings,
  paymentSettingsDefault,
  paymentSettingsItemDefault
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/payment-settings.model";
import { FinanceService } from "../../../../services/finance/finance.service";
import {
  FeeTemplate,
  FeeTemplatesData
} from "../../../../models/fee-templates.model";
import { VDataCollectionComponent } from "../../v-data-collection.component";
import { Observable, Subscription } from "rxjs";
import { SaveFormService } from "../../services/save-form.service";
import { FormBuilderIsSavedService } from "../../services/form-builder-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import {Fee} from "../../../../models/fee.model";
import {
  activeSectionsDefault,
  IActiveSections
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";
import {
  TuitionContract,
  tuitionContractDefault
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";
import {
  TermsConditions,
  termsConditionsDefault, termsConditionsItemDefault
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/terms-conditions.model";
import {
  documentsFormsDefault,
  DocumentsFormsModel
} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model";

@Component({
  selector: "app-v-form-table",
  templateUrl: "./v-form-builder.html",
  styleUrls: ["./v-form-builder.scss"]
})
export class VFormBuilderComponent implements OnInit, OnDestroy {
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
  tuitionContract: TuitionContract = tuitionContractDefault;
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
  vDataCollection: VDataCollectionComponent;
  draftId: string;

  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";

  @ViewChild("addCustomFieldInput", { static: false }) addCustomFieldInput: ElementRef;
  constructor(
    @Host() vDataCollection: VDataCollectionComponent,
    private formService: VFormService,
    private fieldsService: VFieldsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private formBuilderIsSavedService: FormBuilderIsSavedService,
    private fileService: VFilesService,
    private readonly financeService: FinanceService,
    private saveFormService: SaveFormService
  ) {
    this.vDataCollection = vDataCollection;
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
    VFormBuilderComponent.countSaveFormService++;

    this.formBuilderIsSavedService.setIsSaved(false);
    this.route.parent.url.subscribe(urlPath => {
      const url = urlPath[urlPath.length - 1].path;
      this.formId = url != "v-form-constructor" ? url : "";
    });
    this.draftId = this.formId + "_form-builder";
    this.loadMasterFees();
    this.loadBasicFields();
    // this.loadSideBar();
    this.loadSideBarNew();
    this.loadMappedFields();
    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
  }

  addDocumentItem() {
    let documentItem = cloneDeep(documentItemDefault);
    documentItem.id = uuid();
    this.documents.push(documentItem);
  }

  removeDocument(id: string): void {
    this.documents = this.documents.filter(doc => doc.id != id);
  }

  addFormPDF() {
    let formPDFItem = cloneDeep(formPDFItemDefault);
    formPDFItem.id = uuid();
    this.formsPDF.push(formPDFItem);
  }

  removeFormsPDF(id: string) {
    this.formsPDF = this.formsPDF.filter(forms => forms.id != id);
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
    this.fieldsService.getExistingSideBarList().subscribe(
      (fields: Field[]) => {
        this.sideBarFields = fields;
        this.sideBarFields.forEach(field => {
          if (field.type === 113) {
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
    this.fieldsService.getExistingSideBarList2().subscribe(
      data => this.newSideBar = data,
      error => console.log(error, 'error'),
      () => this.formInit()
    );
  }

  setLocalForm(form: Form): void {
    if (!isEmpty(form)) {
      this.form = form;
      this.formName = form.name;
      this.fields = this.form.fields = form.fields || [];
      this.tuitionContract = form.tuitionContract || tuitionContractDefault;
      this.consentInfo = form.consentInfo || consentInfoDefault;
      this.termsConditions = form.termsConditions || termsConditionsDefault;
      this.paymentSettings = form.paymentSettings || paymentSettingsDefault;
      this.eligible = form.eligible;
      this.documentsForms = form.documentsForms || documentsFormsDefault;
      this.documents = form.documents || [];
      this.formsPDF = form.forms || [];
      this.attachments = form.attachments || {};
      this.activeSections = form.activeSections || activeSectionsDefault;
      this.newSideBar = form.sidebar.length ? form.sidebar : this.newSideBar;
    }
  }

  formInit(): void {
    const form = this.vDataCollection.getDraftForm(this.draftId);
    if (!isEmpty(form)) {
      // console.log("loading draftForm");
      this.setLocalForm(form); //draftForm
    } else if (this.formId) {
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form) => {
          // console.log("loading remoteForm");
          this.setLocalForm(form); //remoteForm
        },
        error => console.log(error, "error"),
        () => {
          this.generalInfoIsValidService.setIsValid(true);
          if (!isEmpty(this.fields)) {
            this.initFormFieldsToSideBar(this.newSideBar, this.fields);
          }
          if (!isEmpty(this.masterFees)) {
            this.initFeeToTuitionContract();
          }
        }
      );
    }
  }

  initFormFieldsToSideBar(sideBar: Field[], workArea: Field[]) {
    sideBar.forEach(sideBarField => {
      workArea.forEach(field => {
        if (sideBarField.name === field.name) {
          if (field.type === 113) {
            this.initFormFieldsToSideBar(sideBarField.fields, field.fields);
          }
          sideBarField.exist = true;
        }
      });
    });
  }

  getForm(): Form {
    return {
      _id: this.formId,
      fields: this.form.fields,
      // fields: this.fields,
      documentsForms: this.documentsForms,
      documents: this.documents,
      forms: this.formsPDF,
      name: this.formName,
      sidebar: this.newSideBar,
      tuitionContract: this.tuitionContract,
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

        this.isDataSaving = !this.saveFormService.getSavingStatus();
        this.constructorIsSavingService.setIsSaving(this.isDataSaving);
        if (this.isDataSaving) {
          this.spinnerText = "Other tabs are saving...";
        } else {
          this.spinnerText = "Data is loading...";
        }
      });
    }
    // }
    this.vDataCollection.deleteDraftForm(this.formId);
  }

  // drop(event: CdkDragDrop<Field[]>) {
  //
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else if ((event.previousContainer.id == 'workPlaceList' && event.container.id == '6372c882-3d14-486f-9c1f-52ae8ab928ef') ||
  //     (event.container.id == 'workPlaceList' && event.previousContainer.id == '6372c882-3d14-486f-9c1f-52ae8ab928ef')) {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // else {
  //   copyArrayItem(event.previousContainer.data,
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex);
  //   this.addField(this.fields[event.currentIndex]);
  // }
  // }

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
    this.router.navigate([`/vertical-data-collection/`]);
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

  // setActiveSection(event, section) {
  //   Object.keys(this.sections).map((key, index) => {
  //     this.sections[key] = false;
  //   });
  //   this.sections[section] = event;
  // }

  // Tuition Contract

  loadMasterFees() {
    this.financeService
      .getMasterFees()
      .subscribe((res) => {
        this.masterFees = res.fees;
      });
  }

  initFeeToTuitionContract() {
    this.addFeeToTuitionContract();
    // this.deleteFeeFromTuitionContract()
  }

  addFeeToTuitionContract() {
    this.masterFees.map((fee: Fee) => {
      let { id, name, amount, description } = fee;
      let tuitionFee = {
        id,
        name,
        amount,
        description,
        isActive: false,
        isActiveDiscount: false
      };

      if (!this.existFeeToTuitionContract(tuitionFee.id))
        this.tuitionContract.fees.push(tuitionFee);
    });
  }

  existFeeToTuitionContract(feeTemplateId) {
    return (
      this.tuitionContract.fees.findIndex(fee => fee.id === feeTemplateId) !==
      -1
    );
  }
  //End Tuition Contract

  // ngOnDestroy(): void {
  //   this.saveDraftForm();
  //   for (let fbSectionsKey in this.sections) {
  //     this.sections[fbSectionsKey] = false;
  //   }
  // }

  ngOnDestroy(): void {
    this.saveDraftForm();
    // this.saveFormService.unsubscribe();

    if (
      VFormBuilderComponent.countSaveFormService > 1 &&
      this.saveFormSubscription
    ) {
      this.saveFormSubscription.unsubscribe();
      VFormBuilderComponent.countSaveFormService--;
    }
  }
}
