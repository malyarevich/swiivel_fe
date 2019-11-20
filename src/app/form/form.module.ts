import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormService } from './form.service';
import { FormSendService } from '@app/form-send/form-send.service';


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
