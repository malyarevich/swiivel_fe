import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { PersonService } from '../../services/person/person.service';

import { FormPayerAccountModalComponent } from './form-payer-account-modal.component';

@NgModule({
  declarations: [
    FormPayerAccountModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  exports: [
    FormPayerAccountModalComponent,
  ],
  providers: [
    PersonService,
  ],
  entryComponents: []
})

export class FormPayerAccountModalModule {}
