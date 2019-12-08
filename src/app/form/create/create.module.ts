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
import { WorkareaIntroComponent } from './builder/workarea/intro.component';
import { WorkareaTermsConditionComponent } from './builder/workarea/terms-and-conditions.component';
import { WorkareaSectionComponent } from './builder/workarea/fields/section.component';
import { WorkareaGroupComponent } from './builder/workarea/fields/group.component';
import { WorkareaFieldComponent } from './builder/workarea/fields/field.component';
import { WorkareaFieldsComponent } from './builder/workarea/fields/fields.component';
import { SettingsModule } from './builder/workarea/fields/settings/settings.module';
import { WidgetComponent } from './builder/workarea/fields/widget/widget.component';
import { FormDrawingComponent } from './builder/workarea/form-drawing/form-drawing.component';
import { CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { WorkareaFieldPlaceholderComponent } from './builder/workarea/fields/placeholders/field.component';

import { WorkareaGroupPlaceholderComponent } from './builder/workarea/fields/placeholders/group.component';
import { WorkareaSectionPlaceholderComponent } from './builder/workarea/fields/placeholders/section.component';
import { CreateRoutingModule } from './create-routing.module';
import { GeneralComponent } from './general/general.component';
import { ReviewComponent } from './review/review.component';
import { WorkareaHeaderComponent } from './builder/workarea/workarea-header.component';
import { DocumentsFormsComponent } from './builder/workarea/documents-forms.component';


@NgModule({
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
    WorkareaFieldsComponent,
    WorkareaFieldPlaceholderComponent,
    WorkareaGroupPlaceholderComponent,
    WorkareaSectionPlaceholderComponent,
  ],
  entryComponents: [
    WorkareaSectionComponent,
    WorkareaGroupComponent,
    WorkareaFieldComponent,
    WorkareaFieldsComponent,
    WorkareaFieldPlaceholderComponent,
    WorkareaGroupPlaceholderComponent,
    WorkareaSectionPlaceholderComponent,
  ]
})
export class CreateModule { }
