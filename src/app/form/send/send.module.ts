import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendRoutingModule } from './send-routing.module';
import { SendComponent } from './send.component';


@NgModule({
  declarations: [SendComponent],
  imports: [
    CommonModule,
    SendRoutingModule
  ]
})
export class SendModule { }
