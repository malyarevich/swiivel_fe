import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputTextComponent,
    DropdownComponent,
  ],
  entryComponents: [
    DropdownComponent
  ],
  exports: [
    CommonModule,
    InputTextComponent,
    DropdownComponent
  ]
})

export class SharedModule {
}

