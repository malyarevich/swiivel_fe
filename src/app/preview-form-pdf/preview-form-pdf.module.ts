import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewFormPdfComponent } from './preview-form-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '@app/shared/shared.module';


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
