import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './input-container/input-container.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    InputContainerComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputContainerComponent,
  ]
})
export class SharedModule { }
