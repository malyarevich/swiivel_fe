import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTreeModule} from '@angular/cdk/tree';

import { SharedModule } from '@shared/shared.module';

import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { FormCreatorComponent } from './form-creator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { WorkareaIntroComponent } from './workarea/intro/intro.component';
import { WorkareaFieldsComponent } from './workarea/fields/fields.component';
import { SectionComponent } from './sidebar/section.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';

@NgModule({
  declarations: [FormCreatorComponent, SidebarComponent, WorkareaComponent, WorkareaIntroComponent, WorkareaFieldsComponent, SectionComponent, SidebarIntroComponent, SidebarFieldsComponent],
  imports: [
    CommonModule,
    FormCreatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    CdkTreeModule,
    SharedModule
  ],
  entryComponents: [
    SidebarIntroComponent,
    SidebarFieldsComponent
  ]
})
export class FormCreatorModule { }
