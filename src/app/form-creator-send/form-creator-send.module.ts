import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { FormCreatorSendRoutingModule } from './form-creator-send-routing.module';
import { FormCreatorSendComponent } from './form-creator-send.component';


@NgModule({
  declarations: [FormCreatorSendComponent],
  imports: [
    CommonModule,
    FormCreatorSendRoutingModule,
    SharedModule,
  ]
})
export class FormCreatorSendModule { }
