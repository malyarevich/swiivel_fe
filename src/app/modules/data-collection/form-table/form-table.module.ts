import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {FormTableComponent} from './form-table.component';
import {FormNavComponent} from './form-nav/form-nav.component';
import {FormTableTbodyComponent} from './form-table-tbody/form-table-tbody.component';
import {FormTableRoutingModule} from './form-table-routing.module';
import {FormStatisticModule} from '../form-statistic/form-statistic.module';
import {SharedRedComponentsModule} from '@app/shared/components/sharedRedComponents.module';
import {FormTableHeaderModule} from '@app/shared/components';
import {FormAccessModalModule} from '../form-access-modal/form-access-modal.module';
import {ClickStopPropagationDirective} from '@app/utils/directives/click-stop-propagation.directive';


@NgModule({
  declarations: [
    FormTableComponent,
    FormNavComponent,
    FormTableTbodyComponent,
    ClickStopPropagationDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FormTableRoutingModule,
    FormStatisticModule,
    SharedRedComponentsModule,
    FormTableHeaderModule,
    FormAccessModalModule,
  ],
  exports: [FormTableComponent],
  providers: []
})
export class FormTableModule {}
