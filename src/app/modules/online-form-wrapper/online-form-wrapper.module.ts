import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineFormRoutingModule } from './online-form-routing.module';
import { OnlineFormModule } from '../online-form/online-form.module';
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
