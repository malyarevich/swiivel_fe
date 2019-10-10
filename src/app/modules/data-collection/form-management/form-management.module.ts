import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {FormManagementComponent} from './form-management.component';
import {FormManagementRoutingModule} from './form-management-routing.module';
import {FormStatisticModule} from '../form-statistic/form-statistic.module';
import {SharedRedComponentsModule} from '../../../shared/components/sharedRedComponents.module';
import {FormTableHeaderModule} from '../../../shared/components';
import {FormAccessModalModule} from '../form-access-modal/form-access-modal.module';


@NgModule({
  declarations: [
    FormManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FormManagementRoutingModule,
    FormStatisticModule,
    SharedRedComponentsModule,
    FormTableHeaderModule,
    FormAccessModalModule,
  ],
  exports: [FormManagementComponent],
  providers: []
})
export class FormManagementModule {}
