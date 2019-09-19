import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Buttons
import { ButtonComponent } from './buttons/button/button.component';
import { DropdownButtonComponent } from './buttons/dropdown-button/dropdown-button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { SmallButtonComponent } from './buttons/small-button/small-button.component';
import { DropdownInputComponent } from './inputs/dropdown-input/dropdown-input.component';
// Inputs
import { InputButtonGroupComponent } from './inputs/input-button-group/input-button-group.component';
import { InputCheckboxComponent } from './inputs/input-checkbox/input-checkbox.component';
import { InputDynamicComponent } from './inputs/input-dynamic/input-dynamic.component';
import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { InputTextareaComponent } from './inputs/input-textarea/input-textarea.component';
import { InputToggleComponent } from './inputs/input-toggle/input-toggle.component';

// Headers
import { BlockHeaderComponent} from './headers/block-header/block-header.component';
import { PageHeaderComponent} from './headers/page-header/page-header.component';
import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { InputPhoneNumberComponent } from './inputs/input-phone-number/input-phone-number.component';
import { DialogComponent } from './popup/dialog.component';

// Others
import { RadioGroupComponent } from './inputs/radio-group/radio-group.component';
import { LabelComponent } from './label/label.component';
import { UserItemComponent } from './user-item/user-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Buttons
    ButtonComponent,
    DropdownButtonComponent,
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
    DialogComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Others
    LabelComponent,
    UserItemComponent,
    RadioGroupComponent,
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
    DropdownButtonComponent,
    DialogComponent,
    RadioGroupComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Others
    LabelComponent,
    UserItemComponent,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class SharedModule { }
