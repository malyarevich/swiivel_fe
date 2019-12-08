import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { IndependentComponentsModule } from '@app/independent-components/independent-components.module';
>>>>>>> development
import { SharedModule } from '@app/shared/shared.module';
import { FormSendRoutingModule } from './form-send-routing.module';
import { FormSendComponent } from './form-send.component';
import { FormSendService } from './form-send.service';
import { SendPreviewComponent } from './send-preview/send-preview.component';
import { SendReleaseComponent } from './send-release/send-release.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { OnlineFormModule } from '@app/online-form/online-form.module';
import { PreviewFormPdfModule } from '@app/preview-form-pdf/preview-form-pdf.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
<<<<<<< HEAD
import { PreviewFormComponent } from './preview-form/preview-form.component';
=======
import { SendReleasePeriodsComponent } from './send-release/send-release-periods/send-release-periods.component';
import { SendReleaseRoundsComponent } from './send-release/send-release-rounds/send-release-rounds.component';
>>>>>>> development




@NgModule({
  declarations: [
    FormSendComponent,
    SendPreviewComponent,
    SendReleaseComponent,
    SendReleasePeriodsComponent,
    SendReleaseRoundsComponent
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
    IndependentComponentsModule
  ],
  providers: [
    FormSendService,
    DataCollectionService
  ]
})
export class FormSendModule { }
