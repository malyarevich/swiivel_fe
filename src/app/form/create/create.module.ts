import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { GeneralComponent } from './general/general.component';
import { BuilderComponent } from './builder/builder.component';
import { ReviewComponent } from './review/review.component';
import { SharedModule } from '@app/shared/shared.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SidebarFieldsComponent } from './builder/sidebar/fields.component';
import { SidebarTermsConditionsComponent } from './builder/sidebar/terms-conditions.component';
import { SidebarDocumentsFormsComponent } from './builder/sidebar/documents-forms.component';
import { SidebarConsentComponent } from './builder/sidebar/consent.component';
import { WorkareaConsentComponent } from './builder/workarea/consent.component';
import { WorkareaIntroComponent } from './builder/workarea/intro.component';
import { WorkareaTermsConditionComponent } from './builder/workarea/terms-and-conditions.component';
import { WorkareaSectionComponent } from './builder/workarea/fields/section.component';
import { WorkareaGroupComponent } from './builder/workarea/fields/group.component';
import { WorkareaFieldComponent } from './builder/workarea/fields/field.component';
import { WorkareaFieldsComponent } from './builder/workarea/fields/fields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SettingsModule } from './builder/workarea/fields/settings/settings.module';
import { WorkareaHeaderComponent } from './builder/workarea/workarea-header.component';
import { DocumentsFormsComponent } from './builder/workarea/documents-forms.component';
import { WidgetComponent } from './builder/workarea/fields/widget/widget.component';
import { FormDrawingComponent } from './builder/workarea/form-drawing/form-drawing.component';


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
    FormDrawingComponent,
    WorkareaSectionComponent,
    WorkareaGroupComponent,
    WorkareaFieldComponent,
    WorkareaFieldsComponent
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
  ],
  entryComponents: [
    WorkareaSectionComponent,
    WorkareaGroupComponent,
    WorkareaFieldComponent,
    WorkareaFieldsComponent
  ]
})
export class CreateModule { }
