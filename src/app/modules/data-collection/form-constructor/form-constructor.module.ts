import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {FormConstructorRoutingModule} from './form-constructor-routing.module';
import {SharedRedComponentsModule} from '../../../shared/components/sharedRedComponents.module';
import {GeneralDirectivesModule} from '../../../utils/directives/general-directives.module';

import {FilterPipe} from './form-builder/form-fields/side-bar/filter.pipe';
import {FieldTypePipe} from './form-builder/form-fields/side-bar/field-type.pipe';

import {FormPeriodsService} from '../services/form-periods.service';
import {PublishSettingsService} from '../services/publish-settings.service';
import {PublishSettingsRemoteService} from '../services/publish-settings-remote.service';
import {PublishSettingsAutomationService} from '../services/publish-settings-automation.service';
import {PublishSettingsPublishSettingsService} from '../services/publish-settings-publish-settings.service';
import {FieldsService} from '../services/fields.service';
import {FinanceService} from '../../../services/finance/finance.service';
import {SaveFormService} from '../services/save-form.service';
import {ConstructorDraftService} from '../services/constructor-draft.service';

import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';
import {FormGeneralInformationComponent} from './form-general-information/form-general-information.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {FormPublishSettingsComponent} from './form-publish-settings/form-publish-settings.component';
import {FormGeneralMenuComponent} from './form-general-information/form-general-menu/form-general-menu.component';
import {FormFieldSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/form-field-settings.component';
import {GroupContainerComponent} from './form-builder/form-fields/fields-workspace/group-container/group-container.component';
import {SideBarFieldComponent} from './form-builder/form-fields/side-bar/side-bar-field/side-bar-field.component';
import {SideBarGroupComponent} from './form-builder/form-fields/side-bar/side-bar-group/side-bar-group.component';
import {TuitionContractComponent} from './form-builder/tuition-contract/tuition-contract.component';
import {TuitionSplitFeeComponent} from './form-builder/tuition-contract/tuition-split-fee/tuition-split-fee.component';
import {TuitionSplitStudentComponent} from './form-builder/tuition-contract/tuition-split-student/tuition-split-student.component';
import {FormPaymentComponent} from './form-builder/form-payment/form-payment.component';
import {DocumentsFormsComponent} from './form-builder/documents-forms/documents-forms.component';
import {GroupSettingsComponent} from './form-builder/form-fields/fields-workspace/group-container/group-settings/group-settings.component';
import {ConsentComponent} from './form-builder/consent/consent.component';
import {DocumentsContainerComponent} from './form-builder/documents-forms/documents-container/documents-container.component';
import {FormsContainerComponent} from './form-builder/documents-forms/forms-container/forms-container.component';
import {ConditionsReviewComponent} from './form-publish-settings/conditions-review/conditions-review.component';
import {PublishSettingsComponent} from './form-publish-settings/publish-settings/publish-settings.component';
import {PublishSettingsOnlineFormComponent} from './form-publish-settings/publish-settings/publish-settings-online-form/publish-settings-online-form.component';
import {PublishSettingsPdfFormComponent} from './form-publish-settings/publish-settings/publish-settings-pdf-form/publish-settings-pdf-form.component';
import {AutomationComponent} from './form-publish-settings/automation/automation.component';
import {AutomationHeaderComponent} from './form-publish-settings/automation/automation-header/automation-header.component';
import {AutomationLogicAreaComponent} from './form-publish-settings/automation/automation-logic-area/automation-logic-area.component';
import {AutomationTemplateAreaComponent} from './form-publish-settings/automation/automation-template-area/automation-template-area.component';
import {RedirectPagesComponent} from './form-publish-settings/redirect-pages/redirect-pages.component';
import {PublishMenuComponent} from './form-publish-settings/publish-menu/publish-menu.component';
import {VPublishMenuComponentAdditionalOptions} from './form-publish-settings/publish-menu/additional-options/additional-options.component';
import {FormDrawingComponent} from './form-builder/documents-forms/forms-container/form-drawing/form-drawing.component';
import {PaymentSettingsComponent} from './form-builder/payment-settings/payment-settings.component';
import {PaymentSettingsTableComponent} from './form-builder/payment-settings/table/table.component';
import {PaymentSettingsDormitoryFeeComponent} from './form-builder/payment-settings/dormitory-fee/dormitory-fee.component';
import {PaymentSettingsLunchFeeComponent} from './form-builder/payment-settings/lunch-fee/lunch-fee.component';
import {PaymentSettingsRegistrationComponent} from './form-builder/payment-settings/registration/registration.component';
import {PaymentSettingsSamplePreviewComponent} from './form-builder/payment-settings/sample-preview/sample-preview.component';
import {PaymentSettingsScholarshipComponent} from './form-builder/payment-settings/scholarship/scholarship.component';
import {PaymentSettingsTuitionComponent} from './form-builder/payment-settings/tuition/tuition.component';
import {PaymentSettingsTableSchoolCustomDefaultComponent} from './form-builder/payment-settings/table/school-custom-default/school-custom-default.component';
import {TermsConditionsComponent} from './form-builder/terms-conditions/terms-conditions.component';
import {FieldsSideBarComponent} from './form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar.component';
import {FieldsSideBarNodeComponent} from './form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar-node/fields-side-bar-node.component';
import {FieldsSideBarDetailedComponent} from './form-builder/form-fields/side-bar/fields-side-bar/fields-side-bar-detailed/fields-side-bar-detailed.component';
import {FieldsWorkspaceComponent} from './form-builder/form-fields/fields-workspace/fields-workspace.component';
import {SectionContainerComponent} from './form-builder/form-fields/fields-workspace/section-container/section-container.component';
import {DividerContainerComponent} from './form-builder/form-fields/fields-workspace/divider-container/divider-container.component';
import {SectionSettingsComponent} from './form-builder/form-fields/fields-workspace/section-container/section-settings/section-settings.component';
import {GroupSettingMultiplierComponent} from './form-builder/form-fields/fields-workspace/group-container/group-settings/group-setting-multiplier/group-setting-multiplier.component';
import {FieldsConditionalLogicComponent} from './form-builder/form-fields/fields-workspace/fields-shared-components/fields-conditional-logic/fields-conditional-logic.component';
import {GroupSettingOptionsComponent} from './form-builder/form-fields/fields-workspace/group-container/group-settings/group-setting-options/group-setting-options.component';
import {SectionSettingOptionsComponent} from './form-builder/form-fields/fields-workspace/section-container/section-settings/section-setting-options/section-setting-options.component';
import {FieldsSettingVisibilityComponent} from './form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-visibility/fields-setting-visibility.component';
import {FieldsSettingSupportTextComponent} from './form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-support-text/fields-setting-support-text.component';
import {FieldsSettingPresetComponent} from './form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-preset/fields-setting-preset.component';
import {FieldsSettingOptionCheckboxesComponent} from './form-builder/form-fields/fields-workspace/fields-shared-components/fields-setting-option-checkboxes/fields-setting-option-checkboxes.component';
import {ShortTextSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/short-text-settings/short-text-settings.component';
import {FieldTypeSettingsContainerComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/field-type-settings-container/field-type-settings-container.component';
import {DropDownListSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/drop-down-list-settings/drop-down-list-settings.component';
import {EmailSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/email-settings/email-settings.component';
import {FieldValidationComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/field-validation/field-validation.component';
import {LongTextSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/long-text-settings/long-text-settings.component';
import {PhoneNumberSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/phone-number-settings/phone-number-settings.component';
import {GeneralSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/general-settings/general-settings.component';
import {NumberSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/number-settings/number-settings.component';
import {DateSettingsComponent} from './form-builder/form-fields/fields-workspace/field-container/form-field-settings/date-settings/date-settings.component';
import {FieldContainerComponent} from './form-builder/form-fields/fields-workspace/field-container/field-container.component';


@NgModule({
  declarations: [
    FormNavigationBarComponent,
    FormGeneralInformationComponent,
    FormBuilderComponent,
    FormPublishSettingsComponent,
    FormGeneralMenuComponent,
    FormFieldSettingsComponent,
    FieldContainerComponent,
    GroupContainerComponent,
    FilterPipe,
    SideBarFieldComponent,
    FormFieldSettingsComponent,
    SideBarGroupComponent,
    TuitionContractComponent,
    TuitionSplitFeeComponent,
    TuitionSplitStudentComponent,
    FormPaymentComponent,
    DocumentsFormsComponent,
    FormFieldSettingsComponent,
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
    AutomationHeaderComponent,
    AutomationLogicAreaComponent,
    AutomationTemplateAreaComponent,
    RedirectPagesComponent,
    PublishMenuComponent,
    VPublishMenuComponentAdditionalOptions,
    FormDrawingComponent,
    PaymentSettingsComponent,
    PaymentSettingsTableComponent,
    PaymentSettingsDormitoryFeeComponent,
    PaymentSettingsLunchFeeComponent,
    PaymentSettingsRegistrationComponent,
    PaymentSettingsSamplePreviewComponent,
    PaymentSettingsScholarshipComponent,
    PaymentSettingsTuitionComponent,
    PaymentSettingsTableSchoolCustomDefaultComponent,
    TermsConditionsComponent,
    FieldsSideBarComponent,
    FieldsSideBarNodeComponent,
    FieldsSideBarDetailedComponent,
    FieldsWorkspaceComponent,
    SectionContainerComponent,
    DividerContainerComponent,
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
    CommonModule,
    NgbModule,
    DragDropModule,
    NgxDnDModule,
    PdfViewerModule,
    GeneralDirectivesModule,
    SharedRedComponentsModule,
    FormConstructorRoutingModule,
  ],
  exports: [],
  providers: [
    FieldsService,
    FinanceService,
    SaveFormService,
    ConstructorDraftService,
    FormPeriodsService,
    PublishSettingsService,
    PublishSettingsRemoteService,
    PublishSettingsAutomationService,
    PublishSettingsPublishSettingsService
  ]
})
export class FormConstructorModule {
}
