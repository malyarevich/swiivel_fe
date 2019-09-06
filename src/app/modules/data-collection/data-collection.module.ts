import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataCollectionRoutingModule } from './data-collection-routing.module';

import { DataCollectionComponent } from './data-collection.component';
import { DataCollectionService } from '@core/api.service';

@NgModule({
  declarations: [
    // DataCollectionComponent,
  ],
  imports: [
    CommonModule,
    DataCollectionRoutingModule,
  ],
  providers: [
  ]
})
export class DataCollectionModule {}
