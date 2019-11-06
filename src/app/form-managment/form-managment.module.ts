import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { FormManagmentComponent } from '@app/form-managment/form-managment.component';
import { FormManagmentRoutingModule } from '@app/form-managment/form-managment.routing.module';

@NgModule({
  declarations: [
    FormManagmentComponent,
  ],
  imports: [
    CommonModule,
    FormManagmentRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  entryComponents: [FormManagmentComponent]
})
export class FormManagmentModule { }
