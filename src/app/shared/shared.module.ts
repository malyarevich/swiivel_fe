import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDynamicComponent } from './input-dynamic/input-dynamic.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputDynamicComponent,
    InputTextComponent,
    InputNumberComponent,
  ],
  exports: [
    CommonModule,
    InputDynamicComponent,
    InputTextComponent,
    InputNumberComponent,
  ]
})
export class SharedModule { }
