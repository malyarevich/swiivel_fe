import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PreviewFormPdfComponent } from './preview-form-pdf.component';


@NgModule({
  declarations: [
    PreviewFormPdfComponent,
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    SharedModule,
  ],
  exports: [
    PreviewFormPdfComponent,
  ],
})
export class PreviewFormPdfModule { }
