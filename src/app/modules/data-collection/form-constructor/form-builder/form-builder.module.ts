import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilderRoutingModule } from "./form-builder-routing.module";
import { FormBuilderComponent } from "./form-builder.component";
import { FormFieldSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/form-field-settings.component";
import { FieldContainerComponent } from "./form-fields/fields-workspace/field-container/field-container.component";
import { GroupContainerComponent } from "./form-fields/fields-workspace/group-container/group-container.component";
import { SideBarFieldComponent } from "./form-fields/side-bar/side-bar-field/side-bar-field.component";
import { SideBarGroupComponent } from "./form-fields/side-bar/side-bar-group/side-bar-group.component";
import { FormPaymentComponent } from "./form-payment/form-payment.component";
import { DocumentsFormsComponent } from "./documents-forms/documents-forms.component";
import { GroupSettingsComponent } from "./form-fields/fields-workspace/group-container/group-settings/group-settings.component";
import { ConsentComponent } from "./consent/consent.component";
import { DocumentsContainerComponent } from "./documents-forms/documents-container/documents-container.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { FieldsSideBarComponent } from "./form-fields/side-bar/fields-side-bar/fields-side-bar.component";
import { FieldsSideBarNodeComponent } from "./form-fields/side-bar/fields-side-bar/fields-side-bar-node/fields-side-bar-node.component";
import { FieldsSideBarDetailedComponent } from "./form-fields/side-bar/fields-side-bar/fields-side-bar-detailed/fields-side-bar-detailed.component";
import { FieldsWorkspaceComponent } from "./form-fields/fields-workspace/fields-workspace.component";
import { SectionContainerComponent } from "./form-fields/fields-workspace/section-container/section-container.component";
import { DividerContainerComponent } from "./form-fields/fields-workspace/divider-container/divider-container.component";
import { PaymentSettingsComponent } from "./payment-settings/payment-settings.component";
import { PaymentSettingsTableComponent } from "./payment-settings/table/table.component";
import { PaymentSettingsDormitoryFeeComponent } from "./payment-settings/dormitory-fee/dormitory-fee.component";
import { PaymentSettingsLunchFeeComponent } from "./payment-settings/lunch-fee/lunch-fee.component";
import { PaymentSettingsRegistrationComponent } from "./payment-settings/registration/registration.component";
import { PaymentSettingsSamplePreviewComponent } from "./payment-settings/sample-preview/sample-preview.component";
import { PaymentSettingsScholarshipComponent } from "./payment-settings/scholarship/scholarship.component";
import { PaymentSettingsTuitionComponent } from "./payment-settings/tuition/tuition.component";
import { PaymentSettingsTableSchoolCustomDefaultComponent } from "./payment-settings/table/school-custom-default/school-custom-default.component";
import { SharedRedComponentsModule } from "../../../../shared/components/sharedRedComponents.module";
import { SectionSettingsComponent } from "./form-fields/fields-workspace/section-container/section-settings/section-settings.component";
import { GroupSettingMultiplierComponent } from "./form-fields/fields-workspace/group-container/group-settings/group-setting-multiplier/group-setting-multiplier.component";
import { FieldsConditionalLogicComponent } from "./form-fields/fields-workspace/fields-shared-components/fields-conditional-logic/fields-conditional-logic.component";
import { GroupSettingOptionsComponent } from "./form-fields/fields-workspace/group-container/group-settings/group-setting-options/group-setting-options.component";
import { SectionSettingOptionsComponent } from "./form-fields/fields-workspace/section-container/section-settings/section-setting-options/section-setting-options.component";
import { FieldsSettingVisibilityComponent } from "./form-fields/fields-workspace/fields-shared-components/fields-setting-visibility/fields-setting-visibility.component";
import { FieldsSettingSupportTextComponent } from "./form-fields/fields-workspace/fields-shared-components/fields-setting-support-text/fields-setting-support-text.component";
import { FieldsSettingPresetComponent } from "./form-fields/fields-workspace/fields-shared-components/fields-setting-preset/fields-setting-preset.component";
import { FieldsSettingOptionCheckboxesComponent } from "./form-fields/fields-workspace/fields-shared-components/fields-setting-option-checkboxes/fields-setting-option-checkboxes.component";
import { ShortTextSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/short-text-settings/short-text-settings.component";
import { FieldTypeSettingsContainerComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/field-type-settings-container/field-type-settings-container.component";
import { DropDownListSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/drop-down-list-settings/drop-down-list-settings.component";
import { EmailSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/email-settings/email-settings.component";
import { FieldValidationComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/field-validation/field-validation.component";
import { LongTextSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/long-text-settings/long-text-settings.component";
import { PhoneNumberSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/phone-number-settings/phone-number-settings.component";
import { GeneralSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/general-settings/general-settings.component";
import { NumberSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/number-settings/number-settings.component";
import { DateSettingsComponent } from "./form-fields/fields-workspace/field-container/form-field-settings/date-settings/date-settings.component";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { FormsContainerComponent } from "./documents-forms/forms-container/forms-container.component";
import { FilterPipeModule } from "../../../../shared/pipes";
import { FieldTypePipe } from "./form-fields/side-bar/field-type.pipe";
import { FormDrawingComponent } from "./documents-forms/forms-container/form-drawing/form-drawing.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { FieldsService } from "../../services/fields.service";
import { FinanceService } from "../../../../services/finance/finance.service";
import { TuitionContractModule } from "./tuition-contract/tuition-contract.module";
import { SectionHeaderModule } from "src/app/shared/components";
import { SignatureSidebarModule } from "src/app/shared/components";

import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '@app/components/shared.module';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormFieldSettingsComponent,
    FieldContainerComponent,
    GroupContainerComponent,
    SideBarFieldComponent,
    SideBarGroupComponent,
    FormPaymentComponent,
    DocumentsFormsComponent,
    SideBarGroupComponent,
    GroupSettingsComponent,
    ConsentComponent,
    DocumentsContainerComponent,
    TermsConditionsComponent,
    FieldsSideBarComponent,
    FieldsSideBarNodeComponent,
    FieldsSideBarDetailedComponent,
    FieldsWorkspaceComponent,
    SectionContainerComponent,
    DividerContainerComponent,
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
    DateSettingsComponent,
    FormsContainerComponent,
    FieldTypePipe,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDnDModule,
    FilterPipeModule,
    PdfViewerModule,
    FormBuilderRoutingModule,
    SharedRedComponentsModule,
    SectionHeaderModule,
    TuitionContractModule,
    SignatureSidebarModule,
    CdkTreeModule,
    DragDropModule,
    SharedModule
  ],
  providers: [FieldsService, FinanceService]
})
export class FormBuilderModule {}
