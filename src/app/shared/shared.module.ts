import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Buttons
import { ButtonComponent } from './button/button.component';
// Inputs
import { InputButtonGroupComponent } from './input-button-group/input-button-group.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputDynamicComponent } from './input-dynamic/input-dynamic.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';
// Headers
import { PageHeaderComponent} from './headers/page-header/page-header.component';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    // Buttons
    ButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    // Headers
    PageHeaderComponent,
  ],
  exports: [
    CommonModule,
    // Buttons
    ButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    // Headers
    PageHeaderComponent
  ]
})
export class SharedModule { }
