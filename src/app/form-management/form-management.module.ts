import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { FormManagementRoutingModule } from '@app/form-management/form-management.routing.module';

import { FormManagementHeaderComponent } from '@app/form-management/form-management-header/form-management-header.component';
import { FormManagementComponent } from '@app/form-management/form-management.component';

@NgModule({
  declarations: [
    FormManagementComponent,
    FormManagementHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormManagementRoutingModule,
  ],
  providers: [],
  entryComponents: [FormManagementComponent]
})
export class FormManagementModule { }
