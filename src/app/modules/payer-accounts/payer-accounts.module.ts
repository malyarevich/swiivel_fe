import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { CreatePayerAccountModalModule } from '../create-payer-account-modal/create-payer-account-modal.module';
import { PayerComponent } from './components/payer/payer.component';
import { PayersComponent } from './components/payers/payers.component';

import { PayersService } from './services/payers.service';

const routes: Routes = [
  {
    path: '',
    children:  [
      {
        path: '',
        component: PayersComponent,
      },
      {
        path: ':id',
        component: PayerComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    PayerComponent,
    PayersComponent,
  ],
  imports: [
    CommonModule,
    CreatePayerAccountModalModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  providers: [
    PayersService,
  ],
  entryComponents: []
})

export class PayerAccountsModule {}
