import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VFormBuilderComponent } from "./v-form-constructor/v-form-builder/v-form-builder.component";
import { RouterModule, Routes } from "@angular/router";
import { VFormService } from "./services/v-form.service";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { VFieldContainerComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-field-container.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VFormTableComponent } from "./v-form-table/v-form-table.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VFormNavComponent } from "./v-form-table/v-form-nav/v-form-nav.component";
import { VFormAccessComponent } from "./v-form-access-modal/v-form-access/v-form-access.component";
import { VFormAccessModalComponent } from "./v-form-access-modal/v-form-access-modal.component";
import { VFormReviewComponent } from "./v-form-review/v-form-review.component";
import { VFormViewComponent } from "./v-form-view/v-form-view.component";
import { VFormViewContainerComponent } from "./v-form-view/v-form-view-container/v-form-view-container.component";
import { VFieldsService } from "./services/v-fields.service";
import { TimeFieldComponent } from "./v-form-view/fileds/time-field/time-field.component";
import { ShortTextFieldComponent } from "./v-form-view/fileds/short-text-field/short-text-field.component";
import { PhoneNumberFieldComponent } from "./v-form-view/fileds/phone-number-field/phone-number-field.component";
import { NumberTextFieldComponent } from "./v-form-view/fileds/number-text-field/number-text-field.component";
import { MultipleOptionsFieldComponent } from "./v-form-view/fileds/multiple-options-field/multiple-options-field.component";
import { LongTextFieldComponent } from "./v-form-view/fileds/long-text-field/long-text-field.component";
import { LabelFieldComponent } from "./v-form-view/fileds/label-field/label-field.component";
import { HebrewDateFieldComponent } from "./v-form-view/fileds/hebrew-date-field/hebrew-date-field.component";
import { EmptyLineFieldComponent } from "./v-form-view/fileds/empty-line-field/empty-line-field.component";
import { EmailFieldComponent } from "./v-form-view/fileds/email-field/email-field.component";
import { DropDownListFieldComponent } from "./v-form-view/fileds/drop-down-list-field/drop-down-list-field.component";
import { DateTimeFieldComponent } from "./v-form-view/fileds/date-time-field/date-time-field.component";
import { entryComponents } from "./model/entryComponents";
import { VDataCollectionComponent } from "./v-data-collection.component";
import { VContentDirective } from "./v-form-view/v-content.directive";
import { VFormNavigationBarComponent } from "./v-form-constructor/v-form-navigation-bar/v-form-navigation-bar.component";
import { VFormSectionComponent } from "./v-form-constructor/v-form-section/v-form-section.component";
import { VFormPublishSettingsComponent } from "./v-form-constructor/v-form-publish-settings/v-form-publish-settings.component";
import { VFormAutomationComponent } from "./v-form-constructor/v-form-automation/v-form-automation.component";
import { routes as constructorRoutes } from "./v-form-constructor/constructor-routing.module";
import { FormUtils } from "./utils/form.utils";
import { VFormTableHeaderComponent } from "./v-form-table/v-form-table-header/v-form-table-header.component";
import { TableHeaderTitleComponent } from "./v-form-table/v-form-table-header/table-header-title/table-header-title.component";
import { TableHeaderFilterTextComponent } from "./v-form-table/v-form-table-header/table-header-filter-text/table-header-filter-text.component";
import { TableHeaderFilterDateComponent } from "./v-form-table/v-form-table-header/table-header-filter-date/table-header-filter-date.component";
import { VFormTableTbodyComponent } from "./v-form-table/v-form-table-tbody/v-form-table-tbody.component";
import { VFormGeneralInformationComponent } from "./v-form-constructor/v-form-general-information/v-form-general-information.component";
import { VGroupContainerComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-group-container/v-group-container.component";
import { FilterPipe } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/filter.pipe";
import { VSideBarFieldComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-side-bar-field/v-side-bar-field.component";
import { VFormGeneralMenuComponent } from "./v-form-constructor/v-form-general-information/v-form-general-menu/v-form-general-menu.component";
import { ClarityModule } from "@clr/angular";
import { VFormFieldSettingsComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-form-field-settings.component";
import { VSideBarGroupComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-side-bar-group/v-side-bar-group.component";
import { GeneralDirectivesModule } from "../../utils/directives/general-directives.module";
import { VTuitionContractComponent } from "./v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-contract.component";
import { VTuitionSplitFeeComponent } from "./v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-split-fee/v-tuition-split-fee.component";
import { VTuitionSplitStudentComponent } from "./v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-split-student/v-tuition-split-student.component";
import { VFormPaymentComponent } from "./v-form-constructor/v-form-builder/v-form-payment/v-form-payment.component";
import { VDocumentsFormsComponent } from "./v-form-constructor/v-form-builder/v-documents-forms/v-documents-forms.component";
import { VGroupSettingsComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-group-container/v-group-settings/v-group-settings.component";
import { VConsentComponent } from "./v-form-constructor/v-form-builder/v-consent/v-consent.component";
import { VDocumentsContainerComponent } from "./v-form-constructor/v-form-builder/v-documents-forms/v-documents-container/v-documents-container.component";
import { VFormsContainerComponent } from "./v-form-constructor/v-form-builder/v-documents-forms/v-forms-container/v-forms-container.component";
import { VConditionsReviewComponent } from "./v-form-constructor/v-form-publish-settings/v-conditions-review/v-conditions-review.component";
import { VPublishSettingsComponent } from "./v-form-constructor/v-form-publish-settings/v-publish-settings/v-publish-settings.component";
import { VPublishSettingsOnlineFormComponent } from "./v-form-constructor/v-form-publish-settings/v-publish-settings/v-publish-settings-online-form/v-publish-settings-online-form.component";
import { VPublishSettingsPdfFormComponent } from "./v-form-constructor/v-form-publish-settings/v-publish-settings/v-publish-settings-pdf-form/v-publish-settings-pdf-form.component";
import { VAutomationComponent } from "./v-form-constructor/v-form-publish-settings/v-automation/v-automation.component";
import { VRedirectPagesComponent } from "./v-form-constructor/v-form-publish-settings/v-redirect-pages/v-redirect-pages.component";
import { VPublishMenuComponent } from "./v-form-constructor/v-form-publish-settings/v-publish-menu/v-publish-menu.component";
import { VPublishMenuComponentAdditionalOptions } from "./v-form-constructor/v-form-publish-settings/v-publish-menu/additional-options/additional-options.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { VFormStatisticComponent } from "./v-form-table/v-form-statistic/v-form-statistic.component";
import { VFormStatisticViewsComponent } from "./v-form-table/v-form-statistic/v-form-statistic-views/v-form-statistic-views.component";
import { VFormStatisticInvitesComponent } from "./v-form-table/v-form-statistic/v-form-statistic-invites/v-form-statistic-invites.component";
import { ProgressBarComponent } from "./common-components/progress-bar/progress-bar.component";
import { VFormStatisticSubmissionsComponent } from "./v-form-table/v-form-statistic/v-form-statistic-submissions/v-form-statistic-submissions.component";
import { VFormDrawingComponent } from "./v-form-constructor/v-form-builder/v-documents-forms/v-forms-container/v-form-drawing/v-form-drawing.component";
import { VFormInfoComponent } from "./v-form-info/v-form-info.component";
import { VFormInfoHeaderComponent } from "./v-form-info/v-form-info-header/v-form-info-header.component";
import { VFormInfoStatsComponent } from "./v-form-info/v-form-info-stats/v-form-info-stats.component";
import { VFormInfoGeneralComponent } from "./v-form-info/v-form-info-general/v-form-info-general.component";
import { VFormInfoTableNavComponent } from "./v-form-info/v-form-info-table-nav/v-form-info-table-nav.component";
import { VFormInfoNavComponent } from "./v-form-info/v-form-info-nav/v-form-info-nav.component";
import { VFormInfoSubmissionsComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submissions.component";
import { VFormInfoSubmissionInsideComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-form-info-submission-inside.component";
import { VInsideFormDocumentsComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-form-documents/v-inside-form-documents.component";
import { VInsideFormViewComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-form-documents/v-inside-form-view/v-inside-form-view.component";
import { VInsideDocumentsViewComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-form-documents/v-inside-documents-view/v-inside-documents-view.component";
import { VInsideAccountCommunicationComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-account-communication/v-inside-account-communication.component";
import { VInsideMissingFieldsComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-missing-fields/v-inside-missing-fields.component";
import { VInsideFormHistoryComponent } from "./v-form-info/v-form-info-submissions/v-form-info-submission-inside/v-inside-form-history/v-inside-form-history.component";
import { VTermsConditionsComponent } from "./v-form-constructor/v-form-builder/v-terms-conditions/v-terms-conditions.component";
import { VFieldsSideBarComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-fields-side-bar/v-fields-side-bar.component";
import { VFieldsSideBarNodeComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-fields-side-bar/v-fields-side-bar-node/v-fields-side-bar-node.component";
import { VFieldsSideBarDetailedComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-fields-side-bar/v-fields-side-bar-detailed/v-fields-side-bar-detailed.component";
import { VFieldsWorkspaceComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-workspace.component";
import { VSectionConteinerComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-section-conteiner/v-section-conteiner.component";
import { FinanceService } from "../../services/finance/finance.service";
import { VDividerConteinerComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-divider-conteiner/v-divider-conteiner.component";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { FieldTypePipe } from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/field-type.pipe";
import { VSectionSettingsComponent } from "./v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-section-conteiner/v-section-settings/v-section-settings.component";
import { SharedRedComponentsModule } from "../../shared/components/sharedRedComponents.module";
import { SaveFormService } from "./services/save-form.service";
import { VFormPeriodsService } from "./services/v-form-periods.service";
import { VPaymentSettingsComponent } from "./v-form-constructor/v-form-builder/v-payment-settings/v-payment-settings.component";
import { VPaymentSettingsTableComponent } from './v-form-constructor/v-form-builder/v-payment-settings/table/table.component';
import { VPaymentSettingsDormitoryFeeComponent } from './v-form-constructor/v-form-builder/v-payment-settings/dormitory-fee/dormitory-fee.component';
import { VPaymentSettingsLunchFeeComponent } from './v-form-constructor/v-form-builder/v-payment-settings/lunch-fee/lunch-fee.component';
import { VPaymentSettingsRegistrationComponent } from './v-form-constructor/v-form-builder/v-payment-settings/registration/registration.component';
import { VPaymentSettingsSamplePreviewComponent } from './v-form-constructor/v-form-builder/v-payment-settings/sample-preview/sample-preview.component';
import { VPaymentSettingsScholarshipComponent } from './v-form-constructor/v-form-builder/v-payment-settings/scholarship/scholarship.component';
import { VPaymentSettingsTuitionComponent } from './v-form-constructor/v-form-builder/v-payment-settings/tuition/tuition.component';
import { VPaymentSettingsTableSchoolCustomDefaultComponent } from './v-form-constructor/v-form-builder/v-payment-settings/table/school-custom-default/school-custom-default.component';
import { VPublishSettingsService } from './services/v-publish-settings.service';
import { VPublishSettingsRemoteService } from './services/v-publish-settings-remote.service';
import { VPublishSettingsAutomationService } from './services/v-publish-settings-automation.service';
import { VPublishSettingsPublishSettingsService } from './services/v-publish-settings-publish-settings.service';
import { VAutomationHeaderComponent } from './v-form-constructor/v-form-publish-settings/v-automation/v-automation-header/v-automation-header.component';
import { VAutomationLogicAreaComponent } from './v-form-constructor/v-form-publish-settings/v-automation/v-automation-logic-area/v-automation-logic-area.component';
import { VAutomationTemplateAreaComponent } from './v-form-constructor/v-form-publish-settings/v-automation/v-automation-template-area/v-automation-template-area.component';
import { VConstructorDraftService } from './services/v-constructor-draft.service';
import { VGroupSettingMultiplierComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-group-container/v-group-settings/v-group-setting-multiplier/v-group-setting-multiplier.component';
import { VFieldsConditionalLogicComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-shared-components/v-fields-conditional-logic/v-fields-conditional-logic.component';
import { VGroupSettingOptionsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-group-container/v-group-settings/v-group-setting-options/v-group-setting-options.component';
import { VSectionSettingOptionsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-section-conteiner/v-section-settings/v-section-setting-options/v-section-setting-options.component';
import { VFieldsSettingVisibilityComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-shared-components/v-fields-setting-visibility/v-fields-setting-visibility.component';
import { VFieldsSettingSupportTextComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-shared-components/v-fields-setting-support-text/v-fields-setting-support-text.component';
import { VFieldsSettingPresetComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-shared-components/v-fields-setting-preset/v-fields-setting-preset.component';
import { VFieldsSettingOptionCheckboxesComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-fields-shared-components/v-fields-setting-option-checkboxes/v-fields-setting-option-checkboxes.component';
import { VShortTextSettingsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-short-text-settings/v-short-text-settings.component';
import { VFieldTypeSettingsContainerComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-field-type-settings-container/v-field-type-settings-container.component';
import { VDropDownListSettingsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-drop-down-list-settings/v-drop-down-list-settings.component';
import { VEmailSettingsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-email-settings/v-email-settings.component';
import { VFieldValidationComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-field-validation/v-field-validation.component';
import { VLongTextSettingsComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-fields-workspace/v-field-conteiner/v-form-field-settings/v-long-text-settings/v-long-text-settings.component';

const routes: Routes = [
  {
    path: "",
    component: VDataCollectionComponent,
    children: [
      {
        path: "",
        component: VFormTableComponent
      },
      {
        path: "v-form-constructor",
        component: VFormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: "v-form-constructor/:id",
        component: VFormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: "online-form/:id",
        children: [
          {
            path: "",
            loadChildren: "./online-form/online-form.module#OnlineFormModule"
          }
        ]
      },
      {
        path: "v-form-info/:id",
        component: VFormInfoComponent
      },
      {
        path: "v-form-review/:id",
        component: VFormReviewComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    VFormBuilderComponent,
    VFieldContainerComponent,
    VFormTableComponent,
    VFormNavComponent,
    VFormAccessComponent,
    VFormAccessModalComponent,
    VFormReviewComponent,
    VFormViewComponent,
    VFormViewContainerComponent,
    VContentDirective,
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
    VDataCollectionComponent,
    VFormNavigationBarComponent,
    VFormGeneralInformationComponent,
    VFormSectionComponent,
    VFormPublishSettingsComponent,
    VFormAutomationComponent,
    VFormTableHeaderComponent,
    TableHeaderTitleComponent,
    TableHeaderFilterTextComponent,
    TableHeaderFilterDateComponent,
    VFormGeneralInformationComponent,
    VFormFieldSettingsComponent,
    VGroupContainerComponent,
    FilterPipe,
    VSideBarFieldComponent,
    VFormFieldSettingsComponent,
    VFormGeneralMenuComponent,
    VSideBarGroupComponent,
    VTuitionContractComponent,
    VTuitionSplitFeeComponent,
    VTuitionSplitStudentComponent,
    VFormPaymentComponent,
    VDocumentsFormsComponent,
    VFormFieldSettingsComponent,
    VFormGeneralMenuComponent,
    VSideBarGroupComponent,
    VTuitionContractComponent,
    VTuitionSplitFeeComponent,
    VTuitionSplitStudentComponent,
    VGroupSettingsComponent,
    VConsentComponent,
    VDocumentsContainerComponent,
    VFormsContainerComponent,
    VConditionsReviewComponent,
    VPublishSettingsComponent,
    VPublishSettingsOnlineFormComponent,
    VPublishSettingsPdfFormComponent,
    VAutomationComponent,
    // VAutomationComponent
    VAutomationHeaderComponent,
    VAutomationLogicAreaComponent,
    VAutomationTemplateAreaComponent,

    VRedirectPagesComponent,
    VPublishMenuComponent,
    VPublishMenuComponentAdditionalOptions,
    VFormStatisticComponent,
    VFormStatisticViewsComponent,
    VFormStatisticInvitesComponent,
    ProgressBarComponent,
    VFormStatisticSubmissionsComponent,
    VFormDrawingComponent,
    VFormInfoComponent,
    VFormInfoHeaderComponent,
    VFormTableTbodyComponent,
    VFormInfoStatsComponent,
    VFormInfoGeneralComponent,
    VFormInfoTableNavComponent,
    VFormInfoNavComponent,
    VFormInfoSubmissionsComponent,
    VFormInfoSubmissionInsideComponent,
    VInsideFormDocumentsComponent,
    VInsideFormViewComponent,
    VInsideDocumentsViewComponent,
    VInsideAccountCommunicationComponent,
    VInsideMissingFieldsComponent,
    VInsideFormHistoryComponent,
    //PaymentSettings
    VPaymentSettingsComponent,
    VPaymentSettingsTableComponent,
    VPaymentSettingsDormitoryFeeComponent,
    VPaymentSettingsLunchFeeComponent,
    VPaymentSettingsRegistrationComponent,
    VPaymentSettingsSamplePreviewComponent,
    VPaymentSettingsScholarshipComponent,
    VPaymentSettingsTuitionComponent,
    //PaymentSettingsTable
    VPaymentSettingsTableSchoolCustomDefaultComponent,

    VTermsConditionsComponent,
    VFieldsSideBarComponent,
    VFieldsSideBarNodeComponent,
    VFieldsSideBarDetailedComponent,
    VFieldsWorkspaceComponent,
    VSectionConteinerComponent,
    VDividerConteinerComponent,
    FieldTypePipe,
    VSectionSettingsComponent,
    VGroupSettingMultiplierComponent,
    VFieldsConditionalLogicComponent,
    VGroupSettingOptionsComponent,
    VSectionSettingOptionsComponent,
    VFieldsSettingVisibilityComponent,
    VFieldsSettingSupportTextComponent,
    VFieldsSettingPresetComponent,
    VFieldsSettingOptionCheckboxesComponent,
    VShortTextSettingsComponent,
    VFieldTypeSettingsContainerComponent,
    VDropDownListSettingsComponent,
    VEmailSettingsComponent,
    VFieldValidationComponent,
    VLongTextSettingsComponent
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
    VFormService,
    VFieldsService,
    FormUtils,
    VFieldsService,
    FinanceService,
    SaveFormService,
    VConstructorDraftService,
    VFormPeriodsService,
    VPublishSettingsService,
    VPublishSettingsRemoteService,
    VPublishSettingsAutomationService,
    VPublishSettingsPublishSettingsService,
  ],
  entryComponents: [entryComponents]
})
export class VerticalDataCollectionModule {}
