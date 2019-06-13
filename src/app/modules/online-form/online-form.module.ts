import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineFormRoutingModule } from './online-form-routing.module';
import { OnlineFormViewComponent } from './online-form-view/online-form-view.component';
import { OnlineFormNavComponent } from './online-form-nav/online-form-nav.component';
import { OnlineFormMenuComponent } from './online-form-menu/online-form-menu.component';
import { OnlineFormGeneralInfoComponent } from './online-form-general-info/online-form-general-info.component';
import {OnlineFormService} from "./../../services/online-form/online-form.service";
import { GeneralInfoNavComponent } from './online-form-general-info/general-info-nav/general-info-nav.component';
import { GeneralInfoStudentsComponent } from './online-form-general-info/general-info-students/general-info-students.component';
import { GeneralInfoParentsComponent } from './online-form-general-info/general-info-parents/general-info-parents.component';
import { OnlineFormFieldsComponent } from './online-form-fields/online-form-fields.component';
import {TimeFieldComponent} from "./online-form-fields/fileds/time-field/time-field.component";
import {ShortTextFieldComponent} from "./online-form-fields/fileds/short-text-field/short-text-field.component";
import {PhoneNumberFieldComponent} from "./online-form-fields/fileds/phone-number-field/phone-number-field.component";
import {NumberTextFieldComponent} from "./online-form-fields/fileds/number-text-field/number-text-field.component";
import {MultipleOptionsFieldComponent} from "./online-form-fields/fileds/multiple-options-field/multiple-options-field.component";
import {LongTextFieldComponent} from "./online-form-fields/fileds/long-text-field/long-text-field.component";
import {LabelFieldComponent} from "./online-form-fields/fileds/label-field/label-field.component";
import {HebrewDateFieldComponent} from "./online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component";
import {EmptyLineFieldComponent} from "./online-form-fields/fileds/empty-line-field/empty-line-field.component";
import {EmailFieldComponent} from "./online-form-fields/fileds/email-field/email-field.component";
import {DropDownListFieldComponent} from "./online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component";
import {DateTimeFieldComponent} from "./online-form-fields/fileds/date-time-field/date-time-field.component";
import { FieldContentDirective } from './directives/field-content.directive';
import {entryComponents} from "./online-form-fields/entryComponents";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { OnlineFormConsentComponent } from './online-form-consent/online-form-consent.component';
import { ConsentNavComponent } from './online-form-consent/consent-nav/consent-nav.component';
import {SystemSignatureService} from "./../../services/online-form/signatures/system-signature.service";
import { OnlineFormDocumentsFormsComponent } from './online-form-documents-forms/online-form-documents-forms.component';
import { OnlineDocumentsComponent } from './online-form-documents-forms/online-documents/online-documents.component';
import { OnlinePdfFormsComponent } from './online-form-documents-forms/online-pdf-forms/online-pdf-forms.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { OnlineFormTermsConditionsComponent } from './online-form-terms-conditions/online-form-terms-conditions.component';
import { OnlineFormTuitionContractComponent } from './online-form-tuition-contract/online-form-tuition-contract.component';
import { TuitionContractByStudentComponent } from './online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component';
import { TuitionContractByFeeComponent } from './online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component';

@NgModule({
  declarations: [
    OnlineFormViewComponent,
    OnlineFormNavComponent,
    OnlineFormMenuComponent,
    OnlineFormGeneralInfoComponent,
    GeneralInfoNavComponent,
    GeneralInfoStudentsComponent,
    GeneralInfoParentsComponent,
    OnlineFormFieldsComponent,
    TimeFieldComponent,
    ShortTextFieldComponent,
    PhoneNumberFieldComponent,
    NumberTextFieldComponent,
    MultipleOptionsFieldComponent,
    LongTextFieldComponent,
    LabelFieldComponent,
    HebrewDateFieldComponent,
    EmptyLineFieldComponent,
    EmailFieldComponent,
    DropDownListFieldComponent,
    DateTimeFieldComponent,
    FieldContentDirective,
    OnlineFormConsentComponent,
    ConsentNavComponent,
    OnlineFormDocumentsFormsComponent,
    OnlineDocumentsComponent,
    OnlinePdfFormsComponent,
    OnlineFormTermsConditionsComponent,
    OnlineFormTuitionContractComponent,
    TuitionContractByStudentComponent,
    TuitionContractByFeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OnlineFormRoutingModule,
    PdfViewerModule
  ],
  providers: [OnlineFormService, SystemSignatureService],
  entryComponents: [entryComponents],
})
export class OnlineFormModule { }
