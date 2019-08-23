import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputTextComponent
  ],
  exports: [
    CommonModule,
    InputTextComponent
  ]
})
export class SharedModule { }
