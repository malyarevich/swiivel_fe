import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Modules
// import { OnlineFormRoutingModule } from './online-form-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DynamicModule } from 'ng-dynamic-component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ErrorsListTooltipComponent } from './errors-list/errors-list-tooltip.component';
// OnlineFormViewComponents
import { OnlineFormConsentComponent } from './online-form-consent/online-form-consent.component';
import { OnlineFormControlsComponent } from './online-form-controls/online-form-controls.component';
import { OnlineDocumentsComponent } from './online-form-documents-forms/online-documents/online-documents.component';
import { OnlineFormDocumentsFormsComponent } from './online-form-documents-forms/online-form-documents-forms.component';
import { OnlinePdfFormsComponent } from './online-form-documents-forms/online-pdf-forms/online-pdf-forms.component';
import { CheckboxFieldComponent } from './online-form-fields/checkbox-field/checkbox-field.component';
import { CustomTableComponent } from './online-form-fields/custom-table/custom-table.component';
import { DateTimeFieldComponent } from './online-form-fields/date-time-field/date-time-field.component';
import { DropDownListFieldComponent } from './online-form-fields/drop-down-list-field/drop-down-list-field.component';
import { EmailFieldComponent } from './online-form-fields/email-field/email-field.component';
import { EmptyLineFieldComponent } from './online-form-fields/empty-line-field/empty-line-field.component';
import { ErrorListComponent } from './online-form-fields/error-list/error-list.component';
import { HebrewDateFieldComponent } from './online-form-fields/hebrew-date-field/hebrew-date-field.component';
import { LabelFieldComponent } from './online-form-fields/label-field/label-field.component';
import { LongTextFieldComponent } from './online-form-fields/long-text-field/long-text-field.component';
import { NumberTextFieldComponent } from './online-form-fields/number-text-field/number-text-field.component';
import { PhoneNumberFieldComponent } from './online-form-fields/phone-number-field/phone-number-field.component';
import { ShortTextFieldComponent } from './online-form-fields/short-text-field/short-text-field.component';
// GeneralInformationFields
import { TimeFieldComponent } from './online-form-fields/time-field/time-field.component';
import { GeneralInfoFieldComponent } from './online-form-general-info/general-info-field/general-info-field.component';
import { GeneralInfoGroupComponent } from './online-form-general-info/general-info-group/general-info-group.component';
import { GeneralInfoSectionComponent } from './online-form-general-info/general-info-section/general-info-section.component';
import { OnlineFormGeneralInfoComponent } from './online-form-general-info/online-form-general-info.component';
import { OnlineFormMenuComponent } from './online-form-menu/online-form-menu.component';
// MainComponent(dump)
import { OnlineFormNavComponent } from './online-form-nav/online-form-nav.component';
import { OnlineFormPacketIntroductionComponent } from './online-form-packet-introduction/online-form-packet-introduction.component';
import { OnlineFormPaymentSettingsComponent } from './online-form-payment-settings/online-form-payment-settings.component';
import { OnlineFormPaymentComponent } from './online-form-payment/online-form-payment.component';
import { OnlineFormTermsConditionsComponent } from './online-form-terms-conditions/online-form-terms-conditions.component';
import { OnlineFormTuitionContractComponent } from './online-form-tuition-contract/online-form-tuition-contract.component';
import { TuitionContractByFeeComponent } from './online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component';
import { TuitionContractByStudentComponent } from './online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component';
// OnlineFormViewComponentsUtils
import { OnlineFormViewWrapperComponent } from './online-form-view/online-form-view-wrapper/online-form-view-wrapper.component';
import { OnlineFormViewComponent } from './online-form-view/online-form-view.component';
// MainComponent(Smart)
import { OnlineFormComponent } from './online-form.component';
import { FilesService } from './services/files.service';
// Services
import { OnlineFormService } from './services/online-form.service';
// UtilsComponents
import { ContentNavComponent } from './shared/components/content-nav/content-nav.component';
import { PdfLoaderComponent } from './shared/components/pdf-loader/pdf-loader.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { SignaturesComponent } from './shared/components/signatures/signatures.component';
import { ErrorHintTooltipDirective } from './shared/directives/error-hint-tooltip.directive';
import { GeneralPipesModule } from './utils/pipes/general-pipes.module';

// import { MainComponent } from '@app/shared/main.component';

@NgModule({
  declarations: [
    OnlineFormComponent,
    OnlineFormNavComponent,
    OnlineFormViewComponent,
    OnlineFormControlsComponent,
    OnlineFormMenuComponent,
    // SharedOnlineForm
    ContentNavComponent,
    PdfLoaderComponent,
    ProgressBarComponent,
    SignaturesComponent,
    // FieldsUtils
    ErrorListComponent,
    // GeneralInformationFields
    ShortTextFieldComponent,
    PhoneNumberFieldComponent,
    NumberTextFieldComponent,
    CheckboxFieldComponent,
    LongTextFieldComponent,
    LabelFieldComponent,
    HebrewDateFieldComponent,
    EmptyLineFieldComponent,
    EmailFieldComponent,
    DropDownListFieldComponent,
    DateTimeFieldComponent,
    TimeFieldComponent,
    // OnlineFormViewComponentsUtils
    OnlineFormViewWrapperComponent,
    // OnlineFormViewComponents
    OnlineFormConsentComponent,
    ErrorHintTooltipDirective,
    OnlineFormDocumentsFormsComponent,
    OnlineDocumentsComponent,
    OnlinePdfFormsComponent,
    OnlineFormGeneralInfoComponent,
    GeneralInfoSectionComponent,
    GeneralInfoGroupComponent,
    GeneralInfoFieldComponent,
    OnlineFormPacketIntroductionComponent,
    OnlineFormPaymentComponent,
    OnlineFormPaymentSettingsComponent,
    OnlineFormTermsConditionsComponent,
    OnlineFormTuitionContractComponent,
    TuitionContractByFeeComponent,
    TuitionContractByStudentComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    // OnlineFormRoutingModule,
    PdfViewerModule,
    SharedModule,
    // DynamicComponents
    DynamicModule.withComponents([
      // GeneralInformationFields
      ShortTextFieldComponent,
      PhoneNumberFieldComponent,
      NumberTextFieldComponent,
      CheckboxFieldComponent,
      LongTextFieldComponent,
      LabelFieldComponent,
      HebrewDateFieldComponent,
      EmptyLineFieldComponent,
      EmailFieldComponent,
      DropDownListFieldComponent,
      DateTimeFieldComponent,
      TimeFieldComponent
    ]),
    GeneralPipesModule
  ],
  exports: [OnlineFormComponent, OnlineFormNavComponent],
  providers: [OnlineFormService, FilesService]
})
export class OnlineFormModule {}
