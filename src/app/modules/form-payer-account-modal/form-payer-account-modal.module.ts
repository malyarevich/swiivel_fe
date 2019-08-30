import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { PersonService } from '../../services/person/person.service';
import { PayersService } from '../payer-accounts/services/payers.service';
import { RecipientService } from '../../services/recipient/recipient.service';

import { FormPayerAccountModalComponent } from './form-payer-account-modal.component';
import { FormPayerAccountModalFeeComponent } from './form-payer-account-modal-fee/form-payer-account-modal-fee.component';
import {
  FormPayerAccountModalResponsibleFeesComponent
} from './form-payer-account-modal-responsible-fees/form-payer-account-modal-responsible-fees.component';
import { FormPayerAccountModalPaymentComponent } from './forn-payer-account-modal-payment/form-payer-account-modal-payment.component';
import { SortService } from '@app/shared/services/sort/sort.service';

@NgModule({
  declarations: [
    FormPayerAccountModalComponent,
    FormPayerAccountModalFeeComponent,
    FormPayerAccountModalResponsibleFeesComponent,
    FormPayerAccountModalPaymentComponent
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
    SortService
  ],
  entryComponents: []
})

export class FormPayerAccountModalModule {}
