import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSendComponent } from './form-send.component';
import { FormSendRoutingModule } from './form-send-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SendPreviewComponent } from './send-preview/send-preview.component';
import { SendReleaseComponent } from './send-release/send-release.component';



@NgModule({
  declarations: [
    FormSendComponent,
    SendPreviewComponent,
    SendReleaseComponent
  ],
  imports: [
    CommonModule,
    FormSendRoutingModule,
    SharedModule
  ]
})
export class FormSendModule { }
