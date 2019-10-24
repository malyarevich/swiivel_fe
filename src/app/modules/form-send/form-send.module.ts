import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseComponent } from './release/release.component';
import { FormSendRoutingModule } from './form-send-routing.module';
import { FormSendNavBarComponent } from './form-send-nav-bar/form-send-nav-bar.component';
import { PreviewComponent } from './preview/preview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '@app/components/shared.module';
import { DataCollectionModule } from '../data-collection/data-collection.module';
import { DataCollectionService } from '../data-collection/forms-dashboard/data-collection.service';
import { CdkTreeModule } from '@angular/cdk/tree';
import { OnlineFormModule } from '../online-form/online-form.module';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    ReleaseComponent,
    FormSendNavBarComponent,
    PreviewComponent,
    PreviewFormComponent,
  ],
  imports: [
    CommonModule,
    FormSendRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule,
    SharedModule,
    CdkTreeModule,
    OnlineFormModule,
    PdfViewerModule

  ],
  providers: [
    DataCollectionService
  ]
})
export class FormSendModule { }
