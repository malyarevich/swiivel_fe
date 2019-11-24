import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BuilderComponent } from './builder/builder.component';
import { SidebarConsentComponent } from './builder/sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './builder/sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './builder/sidebar/fields.component';
import { SidebarTermsConditionsComponent } from './builder/sidebar/terms-conditions.component';
import { WorkareaConsentComponent } from './builder/workarea/consent.component';
import { DocumentsFormsComponent } from './builder/workarea/documents-forms.component';
import { WorkareaFieldsComponent } from './builder/workarea/fields/fields.component';
import { SettingsModule } from './builder/workarea/fields/settings/settings.module';
import { WidgetComponent } from './builder/workarea/fields/widget/widget.component';
import { FormDrawingComponent } from './builder/workarea/form-drawing/form-drawing.component';
import { WorkareaIntroComponent } from './builder/workarea/intro.component';
import { WorkareaTermsConditionComponent } from './builder/workarea/terms-and-conditions.component';
import { WorkareaHeaderComponent } from './builder/workarea/workarea-header.component';
import { CreateRoutingModule } from './create-routing.module';
import { GeneralComponent } from './general/general.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    GeneralComponent,
    BuilderComponent,
    ReviewComponent,
    SidebarFieldsComponent,
    SidebarTermsConditionsComponent,
    SidebarDocumentsFormsComponent,
    SidebarConsentComponent,
    WorkareaConsentComponent,
    WorkareaIntroComponent,
    WorkareaTermsConditionComponent,
    WorkareaFieldsComponent,
    WorkareaHeaderComponent,
    DocumentsFormsComponent,
    WidgetComponent,
    FormDrawingComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    CdkTreeModule,
    ScrollingModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    SettingsModule
  ]
})
export class CreateModule { }
