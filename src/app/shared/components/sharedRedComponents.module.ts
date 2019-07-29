import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutoSizeInputModule } from 'ngx-autosize-input';

// buttons
import { SearchFilterBtnComponent } from './buttons/search-filter-btn/search-filter-btn.component';

// fields
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { DatePickerFieldComponent } from './fields/datepicker-field/datepicker-field.component';
import { InputEditableFieldComponent } from './fields/input-ediatble-field/input-editable-field.component';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { SearchFieldComponent } from './fields/search-field/search-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { SelectMultiCheckboxFieldComponent } from './fields/select-multi-checkbox-field/select-multi-checkbox-field.component';
import { SelectMultiSearchFieldComponent } from './fields/select-multi-search-field/select-multi-search-field.component';
import { ToggleFieldComponent } from './fields/toggle-field/toggle-field.component';

// components
import { BadgeComponent } from './badge/badge.component';
import { BadgeDropdownComponent } from './badge-dropdown/badge-dropdown.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableHeaderComponent } from './data-table/data-table-header/data-table-header.component';
import { DataTableHeaderTitleComponent } from './data-table/data-table-header/data-table-header-title/data-table-header-title.component';
import {
  DataTableHeaderFilterTextComponent
} from './data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component';
import {
  DataTableHeaderFilterDateComponent
} from './data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component';
import { ModalComponent } from './modal/modal.component';
import { PersonAvatarChangeComponent } from './person-avatar-change/person-avatar-change.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainSpinnerComponent } from './main-spinner/main-spinner.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { TagComponent } from './tag/tag.component';
import { TableTheadComponent } from './table-thead/table-thead.component';
import { TipQuestionComponent } from './tip-question/tip-question.component';
import { ToggleCheckboxFieldComponent } from './fields/toggle-checkbox-field/toggle-checkbox-field.component';
import { CommandDropdownComponent } from './command-dropdown/command-dropdown.component';
import { ExtendedFieldComponent } from './fields/extended-field/extended-field.component';
import { SignaturesComponent } from './signatures/signatures.component';

// form builder
import { SectionHeaderComponent } from './form-builder/section-header/section-header.component';

// multi icons
import { CaretsComponent } from './multi-icons/carets/carets.component';
import { ToolTipQuestionComponent } from './tool-tip-question/tool-tip-question.component';

@NgModule({
  declarations: [
    // buttons
    SearchFilterBtnComponent,
    // fields
    ExtendedFieldComponent,
    CheckboxFieldComponent,
    DatePickerFieldComponent,
    InputEditableFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiCheckboxFieldComponent,
    SelectMultiSearchFieldComponent,
    ToggleFieldComponent,
    // components
    BadgeComponent,
    BadgeDropdownComponent,
    CommandDropdownComponent,
    DataTableComponent,
    DataTableHeaderComponent,
    DataTableHeaderTitleComponent,
    DataTableHeaderFilterTextComponent,
    DataTableHeaderFilterDateComponent,
    MainSpinnerComponent,
    SvgIconComponent,
    ModalComponent,
    PersonAvatarChangeComponent,
    PersonShowComponent,
    SpinnerComponent,
    TableTheadComponent,
    TagComponent,
    TipQuestionComponent,
    ToolTipQuestionComponent,
    ToggleCheckboxFieldComponent,
    // complex
    SignaturesComponent,
    // form builder
    SectionHeaderComponent,
    // multi icons
    CaretsComponent,
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    NgSelectModule,
    ReactiveFormsModule,
    AutoSizeInputModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    NgSelectModule,
    ReactiveFormsModule,
    // buttons
    SearchFilterBtnComponent,
    // fields
    ExtendedFieldComponent,
    CheckboxFieldComponent,
    DatePickerFieldComponent,
    InputEditableFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiCheckboxFieldComponent,
    SelectMultiSearchFieldComponent,
    ToggleCheckboxFieldComponent,
    ToggleFieldComponent,
    // components
    BadgeComponent,
    BadgeDropdownComponent,
    CommandDropdownComponent,
    DataTableComponent,
    MainSpinnerComponent,
    SvgIconComponent,
    ModalComponent,
    PersonAvatarChangeComponent,
    PersonShowComponent,
    SpinnerComponent,
    TableTheadComponent,
    TagComponent,
    TipQuestionComponent,
    ToolTipQuestionComponent,
    // complex
    SignaturesComponent,
    // form builder
    SectionHeaderComponent,
    // multi icons
    CaretsComponent
  ],
})
export class SharedRedComponentsModule {}
