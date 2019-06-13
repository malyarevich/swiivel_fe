import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

// buttons
import { SearchFilterBtnComponent } from './buttons/search-filter-btn/search-filter-btn.component';

// fields
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { SearchFieldComponent } from './fields/search-field/search-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { SelectMultiCheckboxFieldComponent } from './fields/select-multi-checkbox-field/select-multi-checkbox-field.component';
import { SelectMultiSearchFieldComponent } from './fields/select-multi-search-field/select-multi-search-field.component';

// components
import { BadgeComponent } from './badge/badge.component';
import { BadgeDropdownComponent } from './badge-dropdown/badge-dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainSpinnerComponent } from './main-spinner/main-spinner.component';
import { TagComponent } from './tag/tag.component';
import { ToggleCheckboxFieldComponent } from './fields/toggle-checkbox-field/toggle-checkbox-field.component';
import { DataTableComponent } from './data-table/data-table.component';
import {DataTableHeaderComponent} from "./data-table/data-table-header/data-table-header.component";
import {DataTableHeaderTitleComponent} from "./data-table/data-table-header/data-table-header-title/data-table-header-title.component";
import {DataTableHeaderFilterTextComponent} from "./data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component";
import {DataTableHeaderFilterDateComponent} from "./data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component";
import {NgbDatepicker, NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    // buttons
    SearchFilterBtnComponent,
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiCheckboxFieldComponent,
    SelectMultiSearchFieldComponent,
    // components
    BadgeComponent,
    BadgeDropdownComponent,
    ModalComponent,
    PersonShowComponent,
    SpinnerComponent,
    MainSpinnerComponent,
    TagComponent,
    ToggleCheckboxFieldComponent,
    DataTableComponent,
    DataTableHeaderComponent,
    DataTableHeaderTitleComponent,
    DataTableHeaderFilterTextComponent,
    DataTableHeaderFilterDateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    // buttons
    SearchFilterBtnComponent,
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiCheckboxFieldComponent,
    SelectMultiSearchFieldComponent,
    ToggleCheckboxFieldComponent,
    // components
    BadgeComponent,
    BadgeDropdownComponent,
    ModalComponent,
    PersonShowComponent,
    SpinnerComponent,
    MainSpinnerComponent,
    TagComponent,
    DataTableComponent
  ],
})

export class SharedRedComponentsModule {}
