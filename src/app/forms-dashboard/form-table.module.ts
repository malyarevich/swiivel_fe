import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FormConstructorComponent } from '@app/form-constructor/form-constructor.component';
import { FormTableRoutingModule } from './form-table-routing.module';
import { FormTableComponent} from './form-table.component';
import { OnlineFormComponent } from '@app/online-form/online-form.component';

import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    FormConstructorComponent,
    FormTableComponent,
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
