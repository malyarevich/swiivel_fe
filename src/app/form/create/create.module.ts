import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { GeneralComponent } from './general/general.component';
import { BuilderComponent } from './builder/builder.component';
import { ReviewComponent } from './review/review.component';
import { SharedModule } from '@app/shared/shared.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    CreateComponent,
    GeneralComponent,
    BuilderComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    CdkTreeModule,
    ScrollingModule,
    PdfViewerModule,
  ]
})
export class CreateModule { }
