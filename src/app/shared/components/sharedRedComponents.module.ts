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
import { SelectMultiSearchFieldComponent } from './fields/select-multi-search-field/select-multi-search-field.component';

// components
import { AddFeeComponent } from './add-fee/add-fee.component';
import { BadgeComponent } from './badge/badge.component';
import { BadgeDropdownComponent } from './badge-dropdown/badge-dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    // buttons
    SearchFilterBtnComponent,
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
    // components
    AddFeeComponent,
    BadgeComponent,
    BadgeDropdownComponent,
    ModalComponent,
    PersonShowComponent,
    SpinnerComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    // buttons
    SearchFilterBtnComponent,
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SearchFieldComponent,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
    // components
    AddFeeComponent,
    BadgeComponent,
    BadgeDropdownComponent,
    ModalComponent,
    PersonShowComponent,
    SpinnerComponent,
    TagComponent,
  ],
})

export class SharedRedComponentsModule {}
