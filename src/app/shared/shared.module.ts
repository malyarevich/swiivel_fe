import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Buttons
import { ButtonComponent } from './buttons/button/button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { SmallButtonComponent } from './buttons/small-button/small-button.component';
// Inputs
import { InputButtonGroupComponent } from './inputs/input-button-group/input-button-group.component';
import { InputCheckboxComponent } from './inputs/input-checkbox/input-checkbox.component';
import { InputDynamicComponent } from './inputs/input-dynamic/input-dynamic.component';
import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { InputToggleComponent } from './inputs/input-toggle/input-toggle.component';
import { DropdownInputComponent } from './inputs/dropdown-input/dropdown-input.component';

// Headers
import { PageHeaderComponent} from './headers/page-header/page-header.component';
import { BlockHeaderComponent} from './headers/block-header/block-header.component';
import { InputPhoneNumberComponent } from './input-phone-number/input-phone-number.component';
import { InputEmailComponent } from './input-email/input-email.component';

// Others
import { UserItemComponent } from './user-item/user-item.component';
import { InputTextareaComponent } from './inputs/input-textarea/input-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Buttons
    ButtonComponent,
    IconButtonComponent,
    SmallButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    DropdownInputComponent,
    InputPhoneNumberComponent,
    InputEmailComponent,
    InputTextareaComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Others
    UserItemComponent,
  ],
  exports: [
    CommonModule,
    // Buttons
    ButtonComponent,
    IconButtonComponent,
    SmallButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputToggleComponent,
    DropdownInputComponent,
    InputPhoneNumberComponent,
    InputEmailComponent,
    InputTextareaComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Others
    UserItemComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
