import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { CreatePayerAccountComponent } from './create-payer-account.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePayerAccountComponent,
    children:  [
      {
        path: '',
        component: CreatePayerAccountComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    CreatePayerAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  providers: [],
  entryComponents: []
})

export class CreatePayerAccountModule {}
