import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDynamicComponent } from './input-dynamic/input-dynamic.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputDynamicComponent,
    InputTextComponent,
    InputNumberComponent,
    InputToggleComponent,
  ],
  exports: [
    CommonModule,
    InputDynamicComponent,
    InputTextComponent,
    InputNumberComponent,
    InputToggleComponent,
  ]
})
export class SharedModule { }
