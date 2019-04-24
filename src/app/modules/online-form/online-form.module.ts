import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineFormRoutingModule } from './online-form-routing.module';
import { OnlineFormViewComponent } from './online-form-view/online-form-view.component';
import { OnlineFormNavComponent } from './online-form-nav/online-form-nav.component';
import { OnlineFormMenuComponent } from './online-form-menu/online-form-menu.component';
import { OnlineFormGeneralInfoComponent } from './online-form-general-info/online-form-general-info.component';
import {OnlineFormService} from "./online-form.service";
import { GeneralInfoNavComponent } from './online-form-general-info/general-info-nav/general-info-nav.component';
import { GeneralInfoStudentsComponent } from './online-form-general-info/general-info-students/general-info-students.component';

@NgModule({
  declarations: [
    OnlineFormViewComponent,
    OnlineFormNavComponent,
    OnlineFormMenuComponent,
    OnlineFormGeneralInfoComponent,
    GeneralInfoNavComponent,
    GeneralInfoStudentsComponent
  ],
  imports: [
    CommonModule,
    OnlineFormRoutingModule
  ],
  providers: [OnlineFormService]
})
export class OnlineFormModule { }
