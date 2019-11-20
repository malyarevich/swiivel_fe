import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPdfComponent } from './form-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    FormPdfComponent,
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    SharedModule,
  ],
  exports: [
    FormPdfComponent,
  ],
})
export class FormPdfModule { }
