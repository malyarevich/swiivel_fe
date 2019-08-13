import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormGeneralInformationRoutingModule} from './form-general-information-routing.module';
import {FormGeneralInformationComponent} from './form-general-information.component';
import {FormGeneralMenuComponent} from './form-general-menu/form-general-menu.component';
import {FilterPipeModule} from '../../../../shared/pipes';
import {SharedRedComponentsModule} from '../../../../shared/components/sharedRedComponents.module';
import {FormPeriodsService} from '../../services/form-periods.service';


@NgModule({
  declarations: [
    FormGeneralInformationComponent,
    FormGeneralMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormGeneralInformationRoutingModule,
    FilterPipeModule,
    SharedRedComponentsModule,
  ],
  providers: [FormPeriodsService]
})
export class FormGeneralInformationModule {}
