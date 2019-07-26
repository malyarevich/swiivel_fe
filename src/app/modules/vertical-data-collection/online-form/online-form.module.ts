import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OnlineFormRoutingModule } from "./online-form-routing.module";
import { OnlineFormViewComponent } from "./online-form-view/online-form-view.component";
import { OnlineFormNavComponent } from "./online-form-nav/online-form-nav.component";
import { OnlineFormMenuComponent } from "./online-form-menu/online-form-menu.component";
import { OnlineFormGeneralInfoComponent } from "./online-form-general-info/online-form-general-info.component";
import { OnlineFormService } from "./services/online-form.service";
import { TimeFieldComponent } from "./online-form-fields/time-field/time-field.component";
import { ShortTextFieldComponent } from "./online-form-fields/short-text-field/short-text-field.component";
import { PhoneNumberFieldComponent } from "./online-form-fields/phone-number-field/phone-number-field.component";
import { NumberTextFieldComponent } from "./online-form-fields/number-text-field/number-text-field.component";
import { MultipleOptionsFieldComponent } from "./online-form-fields/multiple-options-field/multiple-options-field.component";
import { LongTextFieldComponent } from "./online-form-fields/long-text-field/long-text-field.component";
import { LabelFieldComponent } from "./online-form-fields/label-field/label-field.component";
import { HebrewDateFieldComponent } from "./online-form-fields/hebrew-date-field/hebrew-date-field.component";
import { EmptyLineFieldComponent } from "./online-form-fields/empty-line-field/empty-line-field.component";
import { EmailFieldComponent } from "./online-form-fields/email-field/email-field.component";
import { DropDownListFieldComponent } from "./online-form-fields/drop-down-list-field/drop-down-list-field.component";
import { DateTimeFieldComponent } from "./online-form-fields/date-time-field/date-time-field.component";
import { FieldContentDirective } from "./directives/field-content.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OnlineFormConsentComponent } from "./online-form-consent/online-form-consent.component";
import { ContentNavComponent } from "./shared/components/content-nav/content-nav.component";
import { PdfLoaderComponent } from "./shared/components/pdf-loader/pdf-loader.component";
import { SystemSignatureService } from "./services/signatures/system-signature.service";
import { OnlineFormDocumentsFormsComponent } from "./online-form-documents-forms/online-form-documents-forms.component";
import { OnlineDocumentsComponent } from "./online-form-documents-forms/online-documents/online-documents.component";
import { OnlinePdfFormsComponent } from "./online-form-documents-forms/online-pdf-forms/online-pdf-forms.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { OnlineFormPaymentComponent } from "./online-form-payment/online-form-payment.component";
import { OnlineFormPaymentSettingsComponent } from "./online-form-payment-settings/online-form-payment-settings.component";
import { OnlineFormTermsConditionsComponent } from "./online-form-terms-conditions/online-form-terms-conditions.component";
import { OnlineFormTuitionContractComponent } from "./online-form-tuition-contract/online-form-tuition-contract.component";
import { TuitionContractByStudentComponent } from "./online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component";
import { TuitionContractByFeeComponent } from "./online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component";
import { SignaturesComponent } from "./shared/components/signatures/signatures.component";
import { SharedRedComponentsModule } from '../../../shared/components/sharedRedComponents.module';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { GeneralInfoSectionComponent } from './online-form-general-info/general-info-section/general-info-section.component';
import { GeneralInfoGroupComponent } from './online-form-general-info/general-info-group/general-info-group.component';
import { GeneralInfoFieldComponent } from './online-form-general-info/general-info-field/general-info-field.component';
import { DynamicModule } from 'ng-dynamic-component';
import { ErrorListComponent } from './online-form-fields/error-list/error-list.component';

@NgModule({
  declarations: [
    SignaturesComponent,
    OnlineFormViewComponent,
    OnlineFormNavComponent,
    OnlineFormMenuComponent,
    OnlineFormGeneralInfoComponent,
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
    TimeFieldComponent,
    FieldContentDirective,
    OnlineFormConsentComponent,
    ContentNavComponent,
    PdfLoaderComponent,
    OnlineFormDocumentsFormsComponent,
    OnlineDocumentsComponent,
    OnlinePdfFormsComponent,
    OnlineFormPaymentComponent,
    OnlineFormPaymentSettingsComponent,
    OnlineFormTermsConditionsComponent,
    OnlineFormTuitionContractComponent,
    TuitionContractByStudentComponent,
    TuitionContractByFeeComponent,
    ProgressBarComponent,
    GeneralInfoSectionComponent,
    GeneralInfoGroupComponent,
    GeneralInfoFieldComponent,
    ErrorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OnlineFormRoutingModule,
    PdfViewerModule,
    SharedRedComponentsModule,
    DynamicModule.withComponents([
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
      TimeFieldComponent,
    ])
  ],
  providers: [OnlineFormService, SystemSignatureService]
})
export class OnlineFormModule {}
