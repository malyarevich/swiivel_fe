import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VFormBuilderComponent} from './v-form-constructor/v-form-builder/v-form-builder.component';
import {RouterModule, Routes} from '@angular/router';
import {VFormService} from './v-form.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {VFieldContainerComponent} from './v-form-constructor/v-form-builder/v-form-fields/v-field-conteiner/v-field-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VFormTableComponent} from './v-form-table/v-form-table.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {VFormNavComponent} from './v-form-table/v-form-nav/v-form-nav.component';
import {VFormAccessComponent} from "./v-form-access-modal/v-form-access/v-form-access.component";
import {VFormAccessModalComponent} from "./v-form-access-modal/v-form-access-modal.component";
import {VFormViewComponent} from './v-form-view/v-form-view.component';
import {VFormViewContainerComponent} from './v-form-view/v-form-view-container/v-form-view-container.component';
import {VFieldsService} from "./v-fields.service";
import {TimeFieldComponent} from "./v-form-view/fileds/time-field/time-field.component";
import {ShortTextFieldComponent} from "./v-form-view/fileds/short-text-field/short-text-field.component";
import {PhoneNumberFieldComponent} from "./v-form-view/fileds/phone-number-field/phone-number-field.component";
import {NumberTextFieldComponent} from "./v-form-view/fileds/number-text-field/number-text-field.component";
import {MultipleOptionsFieldComponent} from "./v-form-view/fileds/multiple-options-field/multiple-options-field.component";
import {LongTextFieldComponent} from "./v-form-view/fileds/long-text-field/long-text-field.component";
import {LabelFieldComponent} from "./v-form-view/fileds/label-field/label-field.component";
import {HebrewDateFieldComponent} from "./v-form-view/fileds/hebrew-date-field/hebrew-date-field.component";
import {EmptyLineFieldComponent} from "./v-form-view/fileds/empty-line-field/empty-line-field.component";
import {EmailFieldComponent} from "./v-form-view/fileds/email-field/email-field.component";
import {DropDownListFieldComponent} from "./v-form-view/fileds/drop-down-list-field/drop-down-list-field.component";
import {DateTimeFieldComponent} from "./v-form-view/fileds/date-time-field/date-time-field.component";
import {entryComponents} from "./entryComponents";
import {VDataCollectionComponent} from './v-data-collection.component';
import {VContentDirective} from "./v-form-view/v-content.directive";
import {VFormNavigationBarComponent} from './v-form-constructor/v-form-navigation-bar/v-form-navigation-bar.component';
import {VFormSectionComponent} from './v-form-constructor/v-form-section/v-form-section.component';
import {VFormPublishSettingsComponent} from './v-form-constructor/v-form-publish-settings/v-form-publish-settings.component';
import {VFormAutomationComponent} from './v-form-constructor/v-form-automation/v-form-automation.component';
import {routes as constructorRoutes} from './v-form-constructor/constructor-routing.module'
import {FormUtils} from './utils/form.utils';
import {VFormTableHeaderComponent} from './v-form-table/v-form-table-header/v-form-table-header.component';
import {TableHeaderTitleComponent} from './v-form-table/v-form-table-header/table-header-title/table-header-title.component';
import {TableHeaderFilterTextComponent} from './v-form-table/v-form-table-header/table-header-filter-text/table-header-filter-text.component';
import {TableHeaderFilterDateComponent} from './v-form-table/v-form-table-header/table-header-filter-date/table-header-filter-date.component';
import {VFormGeneralInformationComponent} from "./v-form-constructor/v-form-general-information/v-form-general-information.component";
import {VGroupContainerComponent} from './v-form-constructor/v-form-builder/v-form-fields/v-group-container/v-group-container.component';
import {FilterPipe} from "./v-form-constructor/v-form-builder/v-form-fields/v-side-bar/filter.pipe";
import { VSideBarFieldComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-side-bar-field/v-side-bar-field.component';
import { VFormGeneralMenuComponent } from './v-form-constructor/v-form-general-information/v-form-general-menu/v-form-general-menu.component';
import {ClarityModule} from "@clr/angular";
import {VFormFieldSettingsComponent} from "./v-form-constructor/v-form-builder/v-form-fields/v-field-conteiner/v-form-field-settings/v-form-field-settings.component";
import { VSideBarGroupComponent } from './v-form-constructor/v-form-builder/v-form-fields/v-side-bar/v-side-bar-group/v-side-bar-group.component';
import {GeneralDirectivesModule} from "../../utils/directives/general-directives.module";
import { VTuitionContractComponent } from './v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-contract.component';
import { VTuitionSplitFeeComponent } from './v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-split-fee/v-tuition-split-fee.component';
import { VTuitionSplitStudentComponent } from './v-form-constructor/v-form-builder/v-tuition-contract/v-tuition-split-student/v-tuition-split-student.component';
import { VFormPaymentComponent } from './v-form-constructor/v-form-builder/v-form-payment/v-form-payment.component';
import { VDocumentsFormsComponent } from './v-form-constructor/v-form-builder/v-documents-forms/v-documents-forms.component';
import { VGroupSettingsComponent } from './v-form-constructor/v-form-builder/v-group-container/v-group-settings/v-group-settings.component';

const routes: Routes = [
  {
    path: '',
    component: VDataCollectionComponent,
    children: [
      {
        path: '',
        component: VFormTableComponent,
      },
      {
        path: 'v-form-constructor',
        component: VFormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'v-form-constructor/:id',
        component: VFormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'onlineform/:id',
        component: VFormViewComponent
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
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ClarityModule,
    DragDropModule,
    ReactiveFormsModule,
    GeneralDirectivesModule,
  ],
  providers: [VFormService, VFieldsService, FormUtils],
  entryComponents: [entryComponents]
})
export class VerticalDataCollectionModule {
}
