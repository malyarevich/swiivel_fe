import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSendComponent } from './form-send.component';
import { FormSendRoutingModule } from './form-send-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SendPreviewComponent } from './send-preview/send-preview.component';
import { SendReleaseComponent } from './send-release/send-release.component';
import { FormSendService } from './form-send.service';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { OnlineFormModule } from '@app/online-form/online-form.module';
import { PreviewFormPdfModule } from '@app/preview-form-pdf/preview-form-pdf.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    FormSendComponent,
    SendPreviewComponent,
    SendReleaseComponent,
    PreviewFormComponent
  ],
  imports: [
    CommonModule,
    FormSendRoutingModule,
    SharedModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    OnlineFormModule,
    PreviewFormPdfModule,
    PdfViewerModule,
  ],
  providers: [
    FormSendService,
    DataCollectionService
  ]
})
export class FormSendModule { }
