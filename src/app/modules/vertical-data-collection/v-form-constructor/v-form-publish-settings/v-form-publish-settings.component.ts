import {
  Component,
  Input,
  OnInit,
  Host,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VFormService } from "../../v-form.service";
import { FormUtils } from "../../utils/form.utils";
import { PublishMenuItems } from "./models/publish-menu-items";
import { PublishSettingsItems, ISubMenus } from "./models/publish-settings";
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty } from "lodash";
import { Location } from "@angular/common";
import { VFieldsService } from "../../v-fields.service";
import { Field } from "../../model/field.model";
import {
  TuitionContract,
  tuitionContractDefault
} from "./../v-form-builder/v-tuition-contract/models/tuition-contract.model";
import { Form } from "../../model/form.model";
import {
  FormPayment,
  TYPE_NAME
} from "./../v-form-builder/v-form-payment/model/form-payment.model";
import {
  ConsentInfo,
  consentInfoDefault,
  consentItemDefault
} from "./../v-form-builder/v-consent/model/consent.model";
import {
  documentItemDefault,
  DocumentSideBar,
  DocumentsModel
} from "./../v-form-builder/v-documents-forms/model/documents.model";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import {
  formPDFItemDefault,
  FormsPDFModel
} from "./../v-form-builder/v-documents-forms/model/formsPDF.model";
import { VFilesService } from "../../v-files.service";

import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import {
  TermsConditions,
  termsConditionsDefault,
  termsConditionsItemDefault
} from "./../v-form-builder/v-terms-conditions/model/terms-conditions.model";
import { FinanceService } from "../../../../services/finance/finance.service";
import {
  FeeTemplate,
  FeeTemplatesData
} from "../../../../models/fee-templates.model";
import { VDataCollectionComponent } from "../../v-data-collection.component";

//TODO: remove excess functional
@Component({
  selector: "app-v-form-publish-settings",
  templateUrl: "./v-form-publish-settings.component.html",
  styleUrls: ["./v-form-publish-settings.component.scss"]
})
export class VFormPublishSettingsComponent implements OnInit {
  @Input() formId: string;
  activeMenuItem: string;
  publishMenuItems = PublishMenuItems;

  

  publish_settings;

  draftId: string;
  fields: Field[] = [];

  feeTemplates: FeeTemplate[] = [];

  formName: string = "";
  attachments;
  form: Form;
  newSideBar;

  customFields: Field[];
  existingFields: Field[];
  sideBarFields: Field[];
  tuitionContract: TuitionContract = tuitionContractDefault;
  consentInfo: ConsentInfo = consentInfoDefault;
  termsConditions: TermsConditions = termsConditionsDefault;
  eligible: string;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  isEditConsentName: number | null = null;
  isEditDocumentName: string | null = null;
  isEditFormPDFName: string | null = null;
  isEditTermsConditionsName: string | null = null;

  isDocumentsForms: DocumentSideBar = {
    isDocuments: true,
    isForms: true
  };

  documents: DocumentsModel[] = [];
  formsPDF: FormsPDFModel[] = [];

  vDataCollection: VDataCollectionComponent;

  constructor(
    @Host() vDataCollection: VDataCollectionComponent,
    private formUtils: FormUtils,
    private formService: VFormService,
    private fieldsService: VFieldsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private fileService: VFilesService,
    private readonly financeService: FinanceService
  ) {
    this.vDataCollection = vDataCollection;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.parent.url.subscribe(urlPath => {
      const url = urlPath[urlPath.length - 1].path;
      this.formId = url != "v-form-constructor" ? url : "";
    });
    this.draftId = this.formId + "publish";
    this.formInit();
  }

  toggleOnlineCheckbox(key: string) {
    this.publish_settings.online_config[key] = 
    !this.publish_settings.online_config[key];
  }

  togglePdfCheckbox(key: string) {
    this.publish_settings.pdf_config[key] = 
    !this.publish_settings.pdf_config[key];
  }

  updateFormValue(formValue: object) {
    this.publish_settings.pdf_config["form_value"] = formValue;
  }

  savePublishSettings(state: object) {
    this.saveForm();
  }

  setActiveMenu(value) {
    this.activeMenuItem = value;
  }

  setStateSub(newState: ISubMenus): void {
    this.publish_settings.state = newState;
  }

  getStateSub(): ISubMenus {
    return this.publish_settings.state;
  }

  getOnlineConfig() {
    return this.publish_settings.online_config;
  }

  getPdfConfig() {
    return this.publish_settings.pdf_config;
  }

  setLocalForm(form: Form): void {
    if (!isEmpty(form)) {
      this.form = form;
      this.formName = form.name;
      this.fields = this.form.fields = form.fields || [];
      this.tuitionContract = form.tuitionContract || tuitionContractDefault;
      this.consentInfo = form.consentInfo || consentInfoDefault;
      this.termsConditions = form.termsConditions || termsConditionsDefault;
      this.publish_settings =
        form.publish_settings
          ? form.publish_settings
          : this.publish_settings;
      this.eligible = form.eligible;
      this.documents = form.documents || [];
      this.formsPDF = form.forms || [];
      this.attachments = form.attachments || {};
    }
    console.log("setLocalForm");
    console.log(form.publish_settings);
    console.log(this.publish_settings);
  }

  formInit(): void {
    const form = this.vDataCollection.getDraftForm(this.draftId);
    if (!isEmpty(form)) {
      // console.log("loading draftForm");
      // console.log(form);
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
        }
      );
    } else {      
      this.publish_settings = {
        state: {...PublishSettingsItems.defaultStateSub},
        online_config: {...PublishSettingsItems.defaultOnlineConfig},
        pdf_config: {...PublishSettingsItems.defaultPdfConfig}
      }
    }
  }

  getForm(): Form {
    return {
      _id: this.formId,
      // fields: this.form.fields,
      fields: this.fields,
      documents: this.documents,
      forms: this.formsPDF,
      name: this.formName,
      sidebar: this.sideBarFields,
      tuitionContract: this.tuitionContract,
      consentInfo: this.consentInfo,
      publish_settings: this.publish_settings,
      termsConditions: this.termsConditions,
      eligible: this.eligible,
      step: 1
    };
  }

  saveForm() {
    // if (this.validCheckFields()) {
    const form: Form = this.getForm();
    this.formService.sendForm(form).subscribe(res => this.goBack());
    // }
    this.vDataCollection.deleteDraftForm(this.draftId);
  }

  public saveDraftForm(): void {
    // console.log("SAVE draft");
    
    const form: Form = this.getForm();
    // console.log(form);
    this.vDataCollection.setDraftForm(this.draftId, form);
    const newForm = this.vDataCollection.getDraftForm(this.draftId);
    // console.log("new Form");
    // console.log(newForm);
  }

  goBack() {
    this.router.navigate([`/vertical-data-collection/`]);
  }

  ngOnDestroy(): void {
    this.saveDraftForm();
  }
}
