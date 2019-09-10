import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormTableComponent} from './form-table.component';
import { FormTableRoutingModule } from './form-table-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    FormTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormTableRoutingModule,
    SharedModule
  ],
  exports: [FormTableComponent],
})
export class FormTableModule {}
