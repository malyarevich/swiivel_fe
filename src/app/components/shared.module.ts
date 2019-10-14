import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Bars
import { BackBarComponent } from './bars/back-bar/back-bar.component';

// Buttons
import { ButtonComponent } from './buttons/button/button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { SmallButtonComponent } from './buttons/small-button/small-button.component';
import { DropdownInputComponent } from './inputs/dropdown-input/dropdown-input.component';
// Inputs
import { InputButtonGroupComponent } from './inputs/input-button-group/input-button-group.component';
import { InputCheckboxComponent } from './inputs/input-checkbox/input-checkbox.component';
import { InputDynamicComponent } from './inputs/input-dynamic/input-dynamic.component';
import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { InputSuggestComponent } from './inputs/input-suggest/input-suggest.component';

import { InputTextareaComponent } from './inputs/input-textarea/input-textarea.component';
import { InputToggleComponent } from './inputs/input-toggle/input-toggle.component';
import { DropdownSelectComponent } from './inputs/dropdown-select/dropdown-select.component';

import { InputFileComponent } from './inputs/input-file/input-file.component';

// Headers
import { BlockHeaderComponent} from './headers/block-header/block-header.component';
import { PageHeaderComponent} from './headers/page-header/page-header.component';
import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { InputPhoneNumberComponent } from './inputs/input-phone-number/input-phone-number.component';
import { DialogComponent } from './popup/dialog.component';

// Utils
import { MainSpinnerComponent } from './utils/main-spinner/main-spinner.component';

// Others
import { RadioGroupComponent } from './inputs/radio-group/radio-group.component';
import { LabelComponent } from './labels/label/label.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SelectOptionDirective } from './inputs/dropdown-select/option.directive';
import { MainComponent } from './main.component';
import { ComponentIdDirective } from './inputs/e2e.directive';
import { PaginatorComponent } from './paginator/paginator.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { StepperService } from './stepper.service';
import { FormComponent } from './form.component';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { InputEnglishDatepickerComponent } from './inputs/input-english-datepicker/input-english-datepicker.component';
import { InputHebrewDatepickerComponent } from './inputs/input-hebrew-datepicker/input-hebrew-datepicker.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localHe from '@angular/common/locales/he';

registerLocaleData(localHe)

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [
    // Bars
    BackBarComponent,
    // Buttons
    ButtonComponent,
    DropdownSelectComponent,
    IconButtonComponent,
    SmallButtonComponent,
    // Inputs
    InputButtonGroupComponent,
    InputCheckboxComponent,
    InputDynamicComponent,
    InputNumberComponent,
    InputTextComponent,
    InputSuggestComponent,
    InputToggleComponent,
    DropdownInputComponent,
    InputPhoneNumberComponent,
    InputEmailComponent,
    InputTextareaComponent,
    DialogComponent,
    InputFileComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Utils
    MainSpinnerComponent,
    // Others
    LabelComponent,
    UserItemComponent,
    RadioGroupComponent,
    StatusLabelComponent,
    // Directives
    SelectOptionDirective,
    ComponentIdDirective,
    MainComponent,
    PaginatorComponent,
    StepperComponent,
    FormComponent,
    InputEnglishDatepickerComponent,
    InputHebrewDatepickerComponent,
  ],
  exports: [
    CommonModule,
    CdkStepperModule,
    // Bars
    BackBarComponent,
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
    InputSuggestComponent,
    InputToggleComponent,
    DropdownInputComponent,
    InputPhoneNumberComponent,
    InputEmailComponent,
    InputTextareaComponent,
    DropdownSelectComponent,
    DialogComponent,
    RadioGroupComponent,
    InputEnglishDatepickerComponent,
    InputHebrewDatepickerComponent,
    InputFileComponent,
    // Headers
    PageHeaderComponent,
    BlockHeaderComponent,
    // Utils
    MainSpinnerComponent,
    // Others
    LabelComponent,
    UserItemComponent,
    ReactiveFormsModule,
    DragDropModule,
    StatusLabelComponent,
    // Directives
    SelectOptionDirective,
    ComponentIdDirective,
    MainComponent,
    PaginatorComponent,
    StepperComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StepperService
  ]
})
export class SharedModule { }
