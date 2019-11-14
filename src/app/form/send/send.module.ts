import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send.component';
import { SendRoutingModule } from './send-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SendPreviewComponent } from './send-preview/send-preview.component';
import { SendReleaseComponent } from './send-release/send-release.component';
import { SendService } from './send.service';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { OnlineFormModule } from '@app/online-form/online-form.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    SendComponent,
    SendPreviewComponent,
    SendReleaseComponent,
    PreviewFormComponent
  ],
  imports: [
    CommonModule,
    SendRoutingModule,
    SharedModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    OnlineFormModule,
    PdfViewerModule
  ],
  providers: [
    SendService,
    DataCollectionService
  ]
})
export class SendModule { }
