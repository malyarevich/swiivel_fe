import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { PersonService } from '../../services/person/person.service';
import { PayersService } from '../payer-accounts/services/payers.service';
import { RecipientService } from '../../services/recipient/recipient.service';

import { FormPayerAccountModalComponent } from './form-payer-account-modal.component';
import { FormPayerAccountModalFeeComponent } from './form-payer-account-modal-fee/form-payer-account-modal-fee.component';

@NgModule({
  declarations: [
    FormPayerAccountModalComponent,
    FormPayerAccountModalFeeComponent,
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
    PayersService,
    RecipientService,
  ],
  entryComponents: []
})

export class FormPayerAccountModalModule {}
