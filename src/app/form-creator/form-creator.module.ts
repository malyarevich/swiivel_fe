import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { FormCreatorComponent } from './form-creator.component';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SectionComponent } from './sidebar/section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';
import { WorkareaFieldsComponent } from './workarea/fields/fields.component';
import { SettingsModule } from './workarea/fields/settings/settings.module';
import { WorkareaIntroComponent } from './workarea/intro/intro.component';
import { WorkareaComponent } from './workarea/workarea.component';

import { TreeModule } from 'angular-tree-component';
import { FormCreatorService } from './form-creator.service';


@NgModule({
  declarations: [

    FormCreatorComponent,
    SidebarComponent,
    WorkareaComponent,
    WorkareaIntroComponent,
    WorkareaFieldsComponent,
    SectionComponent,
    SidebarIntroComponent,
    SidebarFieldsComponent,
    SidebarDocumentsFormsComponent,
    SidebarConsentComponent,
    SidebarTermsConditionsComponent,
  ],
  imports: [
    CommonModule,
    TreeModule,
    FormCreatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SharedModule,
    SettingsModule
  ],
  entryComponents: [
    SidebarIntroComponent,
    SidebarFieldsComponent,
    SidebarDocumentsFormsComponent,
    SidebarConsentComponent,
    SidebarTermsConditionsComponent,
  ],
  providers: [FormCreatorService]
})
export class FormCreatorModule { }
