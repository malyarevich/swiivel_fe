import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { FormPayerAccountModalModule } from '../form-payer-account-modal/form-payer-account-modal.module';
import { PayerAccountComponent } from './components/payer-account/payer-account.component';
import { PayerAccountsComponent } from './components/payer-accounts/payer-accounts.component';

import { PayersService } from './services/payers.service';
import { PaymentMethodsService } from '../../services/payment-methods/payment-methods.service';

const routes: Routes = [
  {
    path: '',
    children:  [
      {
        path: '',
        component: PayerAccountsComponent,
      },
      {
        path: ':id',
        component: PayerAccountComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    PayerAccountComponent,
    PayerAccountsComponent,
  ],
  imports: [
    CommonModule,
    FormPayerAccountModalModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  providers: [
    PayersService,
    PaymentMethodsService,
  ],
  entryComponents: []
})

export class PayerAccountsModule {}
