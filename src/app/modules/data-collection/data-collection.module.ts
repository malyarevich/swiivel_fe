import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-constructor/form-builder/form-builder.component';
import { RouterModule, Routes } from '@angular/router';
import { FormService } from './services/form.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FieldContainerComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/field-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTableComponent } from './form-table/form-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormNavComponent } from './form-table/form-nav/form-nav.component';
import { FormAccessComponent } from './form-access-modal/form-access/form-access.component';
import { FormAccessModalComponent } from './form-access-modal/form-access-modal.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormViewContainerComponent } from './form-view/form-view-container/form-view-container.component';
import { FieldsService } from './services/fields.service';
import { TimeFieldComponent } from './form-view/fileds/time-field/time-field.component';
import { ShortTextFieldComponent } from './form-view/fileds/short-text-field/short-text-field.component';
import { PhoneNumberFieldComponent } from './form-view/fileds/phone-number-field/phone-number-field.component';
import { NumberTextFieldComponent } from './form-view/fileds/number-text-field/number-text-field.component';
import { MultipleOptionsFieldComponent } from './form-view/fileds/multiple-options-field/multiple-options-field.component';
import { LongTextFieldComponent } from './form-view/fileds/long-text-field/long-text-field.component';
import { LabelFieldComponent } from './form-view/fileds/label-field/label-field.component';
import { HebrewDateFieldComponent } from './form-view/fileds/hebrew-date-field/hebrew-date-field.component';
import { EmptyLineFieldComponent } from './form-view/fileds/empty-line-field/empty-line-field.component';
import { EmailFieldComponent } from './form-view/fileds/email-field/email-field.component';
import { DropDownListFieldComponent } from './form-view/fileds/drop-down-list-field/drop-down-list-field.component';
import { DateTimeFieldComponent } from './form-view/fileds/date-time-field/date-time-field.component';
import { entryComponents } from './model/entryComponents';
import { DataCollectionComponent } from './data-collection.component';
import { ContentDirective } from './form-view/content.directive';
import { FormNavigationBarComponent } from './form-constructor/form-navigation-bar/form-navigation-bar.component';
import { FormPublishSettingsComponent } from './form-constructor/form-publish-settings/form-publish-settings.component';
import { routes as constructorRoutes } from './form-constructor/constructor-routing.module';
import { FormUtils } from './utils/form.utils';
import { FormTableHeaderComponent } from './form-table/form-table-header/form-table-header.component';
import { TableHeaderTitleComponent } from './form-table/form-table-header/table-header-title/table-header-title.component';
import { TableHeaderFilterTextComponent } from './form-table/form-table-header/table-header-filter-text/table-header-filter-text.component';
import { TableHeaderFilterDateComponent } from './form-table/form-table-header/table-header-filter-date/table-header-filter-date.component';
import { FormTableTbodyComponent } from './form-table/form-table-tbody/form-table-tbody.component';
import { FormGeneralInformationComponent } from './form-constructor/form-general-information/form-general-information.component';
import { GroupContainerComponent } from './form-constructor/form-builder/form-fields/fields-workspace/group-container/group-container.component';
import { FilterPipe } from './form-constructor/form-builder/form-fields/side-bar/filter.pipe';
import { SideBarFieldComponent } from './form-constructor/form-builder/form-fields/side-bar/side-bar-field/side-bar-field.component';
import { FormGeneralMenuComponent } from './form-constructor/form-general-information/form-general-menu/form-general-menu.component';
import { ClarityModule } from '@clr/angular';
import { FormFieldSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/form-field-settings.component';
import { SideBarGroupComponent } from './form-constructor/form-builder/form-fields/side-bar/side-bar-group/side-bar-group.component';
import { GeneralDirectivesModule } from '../../utils/directives/general-directives.module';
import { TuitionContractComponent } from './form-constructor/form-builder/tuition-contract/tuition-contract.component';
import { TuitionSplitFeeComponent } from './form-constructor/form-builder/tuition-contract/tuition-split-fee/tuition-split-fee.component';
import { TuitionSplitStudentComponent } from './form-constructor/form-builder/tuition-contract/tuition-split-student/tuition-split-student.component';
import { FormPaymentComponent } from './form-constructor/form-builder/form-payment/form-payment.component';
import { DocumentsFormsComponent } from './form-constructor/form-builder/documents-forms/documents-forms.component';
import { GroupSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/group-container/group-settings/group-settings.component';
import { ConsentComponent } from './form-constructor/form-builder/consent/consent.component';
import { DocumentsContainerComponent } from './form-constructor/form-builder/documents-forms/documents-container/documents-container.component';
import { FormsContainerComponent } from './form-constructor/form-builder/documents-forms/forms-container/forms-container.component';
import { ConditionsReviewComponent } from './form-constructor/form-publish-settings/conditions-review/conditions-review.component';
import { PublishSettingsComponent } from './form-constructor/form-publish-settings/publish-settings/publish-settings.component';
import { PublishSettingsOnlineFormComponent } from './form-constructor/form-publish-settings/publish-settings/publish-settings-online-form/publish-settings-online-form.component';
import { PublishSettingsPdfFormComponent } from './form-constructor/form-publish-settings/publish-settings/publish-settings-pdf-form/publish-settings-pdf-form.component';
import { AutomationComponent } from './form-constructor/form-publish-settings/automation/automation.component';
import { RedirectPagesComponent } from './form-constructor/form-publish-settings/redirect-pages/redirect-pages.component';
import { PublishMenuComponent } from './form-constructor/form-publish-settings/publish-menu/publish-menu.component';
import { VPublishMenuComponentAdditionalOptions } from './form-constructor/form-publish-settings/publish-menu/additional-options/additional-options.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormStatisticComponent } from './form-table/form-statistic/form-statistic.component';
import { FormStatisticViewsComponent } from './form-table/form-statistic/form-statistic-views/form-statistic-views.component';
import { FormStatisticInvitesComponent } from './form-table/form-statistic/form-statistic-invites/form-statistic-invites.component';
import { ProgressBarComponent } from './common-components/progress-bar/progress-bar.component';
import { FormStatisticSubmissionsComponent } from './form-table/form-statistic/form-statistic-submissions/form-statistic-submissions.component';
import { FormDrawingComponent } from './form-constructor/form-builder/documents-forms/forms-container/form-drawing/form-drawing.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { FormInfoHeaderComponent } from './form-info/form-info-header/form-info-header.component';
import { FormInfoStatsComponent } from './form-info/form-info-stats/form-info-stats.component';
import { FormInfoGeneralComponent } from './form-info/form-info-general/form-info-general.component';
import { FormInfoTableNavComponent } from './form-info/form-info-table-nav/form-info-table-nav.component';
import { FormInfoNavComponent } from './form-info/form-info-nav/form-info-nav.component';
import { FormInfoSubmissionsComponent } from './form-info/form-info-submissions/form-info-submissions.component';
import { FormInfoSubmissionInsideComponent } from './form-info/form-info-submissions/form-info-submission-inside/form-info-submission-inside.component';
import { InsideFormDocumentsComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-form-documents/inside-form-documents.component';
import { InsideFormViewComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-form-documents/inside-form-view/inside-form-view.component';
import { InsideDocumentsViewComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-form-documents/inside-documents-view/inside-documents-view.component';
import { InsideAccountCommunicationComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-account-communication/inside-account-communication.component';
import { InsideMissingFieldsComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-missing-fields/inside-missing-fields.component';
import { InsideFormHistoryComponent } from './form-info/form-info-submissions/form-info-submission-inside/inside-form-history/inside-form-history.component';
import { TermsConditionsComponent } from './form-constructor/form-builder/terms-conditions/terms-conditions.component';
import { FieldsSideBarComponent } from './form-constructor/form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar.component';
import { FieldsSideBarNodeComponent } from './form-constructor/form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar-node/fields-side-bar-node.component';
import { FieldsSideBarDetailedComponent } from './form-constructor/form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar-detailed/fields-side-bar-detailed.component';
import { FieldsWorkspaceComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-workspace.component';
import { SectionConteinerComponent } from './form-constructor/form-builder/form-fields/fields-workspace/section-conteiner/section-conteiner.component';
import { FinanceService } from '../../services/finance/finance.service';
import { DividerConteinerComponent } from './form-constructor/form-builder/form-fields/fields-workspace/divider-conteiner/divider-conteiner.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FieldTypePipe } from './form-constructor/form-builder/form-fields/side-bar/field-type.pipe';
import { SectionSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/section-conteiner/section-settings/section-settings.component';
import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';
import { SaveFormService } from './services/save-form.service';
import { FormPeriodsService } from './services/form-periods.service';
import { PaymentSettingsComponent } from './form-constructor/form-builder/payment-settings/payment-settings.component';
import { VPaymentSettingsTableComponent } from './form-constructor/form-builder/payment-settings/table/table.component';
import { VPaymentSettingsDormitoryFeeComponent } from './form-constructor/form-builder/payment-settings/dormitory-fee/dormitory-fee.component';
import { VPaymentSettingsLunchFeeComponent } from './form-constructor/form-builder/payment-settings/lunch-fee/lunch-fee.component';
import { VPaymentSettingsRegistrationComponent } from './form-constructor/form-builder/payment-settings/registration/registration.component';
import { VPaymentSettingsSamplePreviewComponent } from './form-constructor/form-builder/payment-settings/sample-preview/sample-preview.component';
import { VPaymentSettingsScholarshipComponent } from './form-constructor/form-builder/payment-settings/scholarship/scholarship.component';
import { VPaymentSettingsTuitionComponent } from './form-constructor/form-builder/payment-settings/tuition/tuition.component';
import { VPaymentSettingsTableSchoolCustomDefaultComponent } from './form-constructor/form-builder/payment-settings/table/school-custom-default/school-custom-default.component';
import { PublishSettingsService } from './services/publish-settings.service';
import { PublishSettingsRemoteService } from './services/publish-settings-remote.service';
import { PublishSettingsAutomationService } from './services/publish-settings-automation.service';
import { PublishSettingsPublishSettingsService } from './services/publish-settings-publish-settings.service';
import { AutomationHeaderComponent } from './form-constructor/form-publish-settings/automation/automation-header/automation-header.component';
import { AutomationLogicAreaComponent } from './form-constructor/form-publish-settings/automation/automation-logic-area/automation-logic-area.component';
import { AutomationTemplateAreaComponent } from './form-constructor/form-publish-settings/automation/automation-template-area/automation-template-area.component';
import { ConstructorDraftService } from './services/constructor-draft.service';
import { GroupSettingMultiplierComponent } from './form-constructor/form-builder/form-fields/fields-workspace/group-container/group-settings/group-setting-multiplier/group-setting-multiplier.component';
import { FieldsConditionalLogicComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-shared-components/fields-conditional-logic/fields-conditional-logic.component';
import { GroupSettingOptionsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/group-container/group-settings/group-setting-options/group-setting-options.component';
import { SectionSettingOptionsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/section-conteiner/section-settings/section-setting-options/section-setting-options.component';
import { FieldsSettingVisibilityComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-visibility/fields-setting-visibility.component';
import { FieldsSettingSupportTextComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-support-text/fields-setting-support-text.component';
import { FieldsSettingPresetComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-preset/fields-setting-preset.component';
import { FieldsSettingOptionCheckboxesComponent } from './form-constructor/form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-option-checkboxes/fields-setting-option-checkboxes.component';
import { ShortTextSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/short-text-settings/short-text-settings.component';
import { FieldTypeSettingsContainerComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/field-type-settings-container/field-type-settings-container.component';
import { DropDownListSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/drop-down-list-settings/drop-down-list-settings.component';
import { EmailSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/email-settings/email-settings.component';
import { FieldValidationComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/field-validation/field-validation.component';
import { LongTextSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/long-text-settings/long-text-settings.component';
import { PhoneNumberSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/phone-number-settings/phone-number-settings.component';
import { GeneralSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/general-settings/general-settings.component';
import { NumberSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/number-settings/number-settings.component';
import { DateSettingsComponent } from './form-constructor/form-builder/form-fields/fields-workspace/field-conteiner/form-field-settings/date-settings/date-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DataCollectionComponent,
    children: [
      {
        path: '',
        component: FormTableComponent
      },
      {
        path: 'v-form-constructor',
        component: FormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'v-form-constructor/:id',
        component: FormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'online-form/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./online-form/online-form.module').then(m => m.OnlineFormModule)
          }
        ]
      },
      {
        path: 'v-form-info/:id',
        component: FormInfoComponent
      },
      {
        path: 'v-form-review/:id',
        component: FormReviewComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    FormBuilderComponent,
    FieldContainerComponent,
    FormTableComponent,
    FormNavComponent,
    FormAccessComponent,
    FormAccessModalComponent,
    FormReviewComponent,
    FormViewComponent,
    FormViewContainerComponent,
    ContentDirective,
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
    DataCollectionComponent,
    FormNavigationBarComponent,
    FormGeneralInformationComponent,
    FormPublishSettingsComponent,
    FormTableHeaderComponent,
    TableHeaderTitleComponent,
    TableHeaderFilterTextComponent,
    TableHeaderFilterDateComponent,
    FormGeneralInformationComponent,
    FormFieldSettingsComponent,
    GroupContainerComponent,
    FilterPipe,
    SideBarFieldComponent,
    FormFieldSettingsComponent,
    FormGeneralMenuComponent,
    SideBarGroupComponent,
    TuitionContractComponent,
    TuitionSplitFeeComponent,
    TuitionSplitStudentComponent,
    FormPaymentComponent,
    DocumentsFormsComponent,
    FormFieldSettingsComponent,
    FormGeneralMenuComponent,
    SideBarGroupComponent,
    TuitionContractComponent,
    TuitionSplitFeeComponent,
    TuitionSplitStudentComponent,
    GroupSettingsComponent,
    ConsentComponent,
    DocumentsContainerComponent,
    FormsContainerComponent,
    ConditionsReviewComponent,
    PublishSettingsComponent,
    PublishSettingsOnlineFormComponent,
    PublishSettingsPdfFormComponent,
    AutomationComponent,
    // VAutomationComponent
    AutomationHeaderComponent,
    AutomationLogicAreaComponent,
    AutomationTemplateAreaComponent,

    RedirectPagesComponent,
    PublishMenuComponent,
    VPublishMenuComponentAdditionalOptions,
    FormStatisticComponent,
    FormStatisticViewsComponent,
    FormStatisticInvitesComponent,
    ProgressBarComponent,
    FormStatisticSubmissionsComponent,
    FormDrawingComponent,
    FormInfoComponent,
    FormInfoHeaderComponent,
    FormTableTbodyComponent,
    FormInfoStatsComponent,
    FormInfoGeneralComponent,
    FormInfoTableNavComponent,
    FormInfoNavComponent,
    FormInfoSubmissionsComponent,
    FormInfoSubmissionInsideComponent,
    InsideFormDocumentsComponent,
    InsideFormViewComponent,
    InsideDocumentsViewComponent,
    InsideAccountCommunicationComponent,
    InsideMissingFieldsComponent,
    InsideFormHistoryComponent,
    // PaymentSettings
    PaymentSettingsComponent,
    VPaymentSettingsTableComponent,
    VPaymentSettingsDormitoryFeeComponent,
    VPaymentSettingsLunchFeeComponent,
    VPaymentSettingsRegistrationComponent,
    VPaymentSettingsSamplePreviewComponent,
    VPaymentSettingsScholarshipComponent,
    VPaymentSettingsTuitionComponent,
    // PaymentSettingsTable
    VPaymentSettingsTableSchoolCustomDefaultComponent,

    TermsConditionsComponent,
    FieldsSideBarComponent,
    FieldsSideBarNodeComponent,
    FieldsSideBarDetailedComponent,
    FieldsWorkspaceComponent,
    SectionConteinerComponent,
    DividerConteinerComponent,
    FieldTypePipe,
    SectionSettingsComponent,
    GroupSettingMultiplierComponent,
    FieldsConditionalLogicComponent,
    GroupSettingOptionsComponent,
    SectionSettingOptionsComponent,
    FieldsSettingVisibilityComponent,
    FieldsSettingSupportTextComponent,
    FieldsSettingPresetComponent,
    FieldsSettingOptionCheckboxesComponent,
    ShortTextSettingsComponent,
    FieldTypeSettingsContainerComponent,
    DropDownListSettingsComponent,
    EmailSettingsComponent,
    FieldValidationComponent,
    LongTextSettingsComponent,
    PhoneNumberSettingsComponent,
    GeneralSettingsComponent,
    NumberSettingsComponent,
    DateSettingsComponent
  ],
  imports: [
    NgxDnDModule,
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ClarityModule,
    DragDropModule,
    ReactiveFormsModule,
    GeneralDirectivesModule,
    PdfViewerModule,
    SharedRedComponentsModule
  ],
  providers: [
    FormService,
    FieldsService,
    FormUtils,
    FieldsService,
    FinanceService,
    SaveFormService,
    ConstructorDraftService,
    FormPeriodsService,
    PublishSettingsService,
    PublishSettingsRemoteService,
    PublishSettingsAutomationService,
    PublishSettingsPublishSettingsService,
  ],
  entryComponents: [entryComponents]
})
export class DataCollectionModule {}
