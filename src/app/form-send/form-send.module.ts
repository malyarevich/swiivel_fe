import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSendComponent } from './form-send.component';
import { FormSendRoutingModule } from './form-send-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SendPreviewComponent } from './send-preview/send-preview.component';
import { SendReleaseComponent } from './send-release/send-release.component';
import { FormSendService } from './form-send.service';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormSendComponent,
    SendPreviewComponent,
    SendReleaseComponent
  ],
  imports: [
    CommonModule,
    FormSendRoutingModule,
    SharedModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormSendService,
    DataCollectionService
  ]
})
export class FormSendModule { }
