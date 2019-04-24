import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineFormRoutingModule } from './online-form-routing.module';
import { OnlineFormViewComponent } from './online-form-view/online-form-view.component';
import { OnlineFormNavComponent } from './online-form-nav/online-form-nav.component';
import { OnlineFormMenuComponent } from './online-form-menu/online-form-menu.component';
import { OnlineFormGeneralInfoComponent } from './online-form-general-info/online-form-general-info.component';

@NgModule({
  declarations: [OnlineFormViewComponent, OnlineFormNavComponent, OnlineFormMenuComponent, OnlineFormGeneralInfoComponent],
  imports: [
    CommonModule,
    OnlineFormRoutingModule
  ]
})
export class OnlineFormModule { }
