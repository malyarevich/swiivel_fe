import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FormTableRoutingModule } from './form-table-routing.module';
import { FormTableComponent} from './form-table.component';

import { CdkTableModule } from '@angular/cdk/table';
import { DataCollectionService } from './data-collection.service';

@NgModule({
  declarations: [
    FormTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormTableRoutingModule,
    SharedModule,
    CdkTableModule,
  ],
  entryComponents: [FormTableComponent],
  providers: [
    DataCollectionService,
  ]
})
export class FormTableModule {}