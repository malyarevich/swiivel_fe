import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCollectionRoutingModule } from './data-collection-routing.module';

import { FormService } from './services/form.service';

import { DataCollectionComponent } from './data-collection.component';
import { HeaderRowComponent } from './header-row/header-row.component';

@NgModule({
  declarations: [
    DataCollectionComponent,
    HeaderRowComponent
  ],
  imports: [
    CommonModule,
    DataCollectionRoutingModule,
  ],
  providers: [
    FormService,
  ]
})
export class DataCollectionModule {}
