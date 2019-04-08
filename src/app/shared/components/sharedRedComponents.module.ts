import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { SelectComponent } from './select/select.component';
import { SelectMultiSearchComponent } from './select-multi-search/select-multi-search.component';

@NgModule({
  declarations: [
    InputComponent,
    ModalComponent,
    SelectComponent,
    SelectMultiSearchComponent,
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
    InputComponent,
    ModalComponent,
    NgSelectModule,
    ReactiveFormsModule,
    SelectComponent,
    SelectMultiSearchComponent,
  ],
})

export class SharedRedComponentsModule {}
