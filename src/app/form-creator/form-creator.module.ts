import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTreeModule} from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { FormCreatorComponent } from './form-creator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkareaFieldsComponent } from './workarea/fields/fields.component';
import { SectionComponent } from './sidebar/section.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SettingsModule } from './workarea/fields/settings/settings.module';
import { WorkareaIntroComponent } from './workarea/intro/intro.component';
import { WorkareaComponent } from './workarea/workarea.component';

@NgModule({
  declarations: [FormCreatorComponent, SidebarComponent, WorkareaComponent, WorkareaIntroComponent, WorkareaFieldsComponent, SectionComponent, SidebarIntroComponent, SidebarFieldsComponent],
  imports: [
    CommonModule,
    FormCreatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    CdkTreeModule,
    SharedModule,
    SettingsModule
  ],
  entryComponents: [
    SidebarIntroComponent,
    SidebarFieldsComponent
  ]
})
export class FormCreatorModule { }
