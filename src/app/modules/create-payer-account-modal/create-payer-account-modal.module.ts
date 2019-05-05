import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';

import { PersonService } from '../../services/person/person.service';

import { CreatePayerAccountModalComponent } from './create-payer-account-modal.component';

@NgModule({
  declarations: [
    CreatePayerAccountModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRedComponentsModule,
  ],
  exports: [
    CreatePayerAccountModalComponent,
  ],
  providers: [
    PersonService,
  ],
  entryComponents: []
})

export class CreatePayerAccountModalModule {}
