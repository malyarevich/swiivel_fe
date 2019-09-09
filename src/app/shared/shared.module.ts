import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDynamicComponent } from './input-dynamic/input-dynamic.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { ButtonComponent } from './button/button.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputDynamicComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputToggleComponent,
    InputCheckboxComponent,
    ButtonComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputDynamicComponent,
    InputTextComponent,
    InputNumberComponent,
    InputToggleComponent,
    InputTextareaComponent,
    InputCheckboxComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
