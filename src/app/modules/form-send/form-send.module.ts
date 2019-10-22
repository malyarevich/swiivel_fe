import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseComponent } from './release/release.component';
import { FormSendRoutingModule } from './form-send-routing.module';
import { FormSendNavBarComponent } from './form-send-nav-bar/form-send-nav-bar.component';
import { PreviewComponent } from './preview/preview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    ReleaseComponent,
    FormSendNavBarComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    FormSendRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ]
})
export class FormSendModule { }
