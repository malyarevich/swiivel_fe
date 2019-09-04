import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Buttons
import { ButtonComponent } from './buttons/button/button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
// Inputs
import { InputButtonGroupComponent } from './input-button-group/input-button-group.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputDynamicComponent } from './input-dynamic/input-dynamic.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';
// Headers
import { PageHeaderComponent} from './headers/page-header/page-header.component';
import { BlockHeaderComponent} from './headers/block-header/block-header.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Buttons
    ButtonComponent,
    IconButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
  ],
  exports: [
    CommonModule,
    // Buttons
    ButtonComponent,
    IconButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
  ]
})
export class SharedModule { }
