import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FormTableRoutingModule } from './form-table-routing.module';
import { FormTableComponent} from './form-table.component';

import { CdkTableModule } from '@angular/cdk/table';
import { FormConstructorComponent } from '@app/forms-dashboard/form-constructor/form-constructor.component';
import { OnlineFormComponent } from '@app/forms-dashboard/online-form/online-form.component';

@NgModule({
  declarations: [
    FormTableComponent,
    FormConstructorComponent,
    OnlineFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormTableRoutingModule,
    SharedModule,
    CdkTableModule,
  ],
  entryComponents: [FormTableComponent],
})
export class FormTableModule {}
