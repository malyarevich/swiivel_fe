import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { FormCreatorComponent } from './form-creator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { WorkareaIntroComponent } from './workarea/intro/intro.component';
import { WorkareaFieldsComponent } from './workarea/fields/fields.component';


@NgModule({
  declarations: [FormCreatorComponent, SidebarComponent, WorkareaComponent, WorkareaIntroComponent, WorkareaFieldsComponent],
  imports: [
    CommonModule,
    FormCreatorRoutingModule
  ]
})
export class FormCreatorModule { }
