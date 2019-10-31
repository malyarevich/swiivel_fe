import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlineFormModule } from '../../online-form/online-form.module';
import { OnlineFormRoutingModule } from './online-form-routing.module';
import { OnlineFormWrapperComponent } from './online-form-wrapper.component';
// import { OnlineFormComponent } from '../online-form/online-form.component';



@NgModule({
  declarations: [
    OnlineFormWrapperComponent
    // OnlineFormComponent
  ],
  imports: [
    CommonModule,
    OnlineFormRoutingModule,
    OnlineFormModule
  ]
})
export class OnlineFormWrapperModule { }
