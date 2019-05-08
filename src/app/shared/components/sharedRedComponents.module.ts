import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { InputFieldComponent } from './fields/input-field/input-field.component';
import { ModalComponent } from './modal/modal.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { SelectMultiSearchFieldComponent } from './fields/select-multi-search-field/select-multi-search-field.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';

@NgModule({
  declarations: [
    CheckboxFieldComponent,
    InputFieldComponent,
    ModalComponent,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    CheckboxFieldComponent,
    CommonModule,
    FormsModule,
    InputFieldComponent,
    ModalComponent,
    NgSelectModule,
    ReactiveFormsModule,
    SelectFieldComponent,
    SelectMultiSearchFieldComponent,
  ],
})

export class SharedRedComponentsModule {}
