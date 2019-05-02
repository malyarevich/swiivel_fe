import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { CreatePayerAccountComponent } from './create-payer-account.component';

@NgModule({
  declarations: [
    CreatePayerAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  exports: [
    CreatePayerAccountComponent,
  ],
  providers: [],
  entryComponents: []
})

export class CreatePayerAccountModule {}
