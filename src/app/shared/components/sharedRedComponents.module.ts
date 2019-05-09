import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

// fields
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { SelectMultiSearchFieldComponent } from './fields/select-multi-search-field/select-multi-search-field.component';

// components
import { AddFeeComponent } from './add-fee/add-fee.component';
import { ModalComponent } from './modal/modal.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
    // components
    AddFeeComponent,
    ModalComponent,
    PersonShowComponent,
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
    // fields
    CheckboxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
    // components
    AddFeeComponent,
    ModalComponent,
    PersonShowComponent,
    TagComponent,
  ],
})

export class SharedRedComponentsModule {}
