import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormSendService } from '@app/form-send/form-send.service';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormService } from './form.service';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  providers: [
    FormService,
    FormSendService
  ]
})
export class FormModule { }
