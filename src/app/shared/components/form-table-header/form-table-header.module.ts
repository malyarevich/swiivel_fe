import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableHeaderTitleComponent} from './table-header-title/table-header-title.component';
import {TableHeaderFilterTextComponent} from './table-header-filter-text/table-header-filter-text.component';
import {TableHeaderFilterDateComponent} from './table-header-filter-date/table-header-filter-date.component';
import {FormTableHeaderComponent} from './form-table-header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    FormTableHeaderComponent,
    TableHeaderTitleComponent,
    TableHeaderFilterTextComponent,
    TableHeaderFilterDateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [FormTableHeaderComponent]
})
export class FormTableHeaderModule {}
