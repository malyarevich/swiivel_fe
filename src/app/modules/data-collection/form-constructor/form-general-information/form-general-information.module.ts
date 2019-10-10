import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGeneralInformationRoutingModule } from './form-general-information-routing.module';
import { FormGeneralInformationComponent } from './form-general-information.component';
import { FormGeneralMenuComponent } from './form-general-menu/form-general-menu.component';
import { FilterPipeModule } from '../../../../shared/pipes';
import { SharedRedComponentsModule } from '../../../../shared/components/sharedRedComponents.module';
import { FormPeriodsService } from '../../services/form-periods.service';
import { FormGeneralBasicInfoComponent } from './form-general-basic-info/form-general-basic-info.component';
import { FormGeneralWayCreateComponent } from './form-general-way-create/form-general-way-create.component';
import { FormGeneralDatesComponent } from './form-general-dates/form-general-dates.component';
import { FormGeneralEligibleComponent } from './form-general-eligible/form-general-eligible.component';
import { FormGeneralPeriodComponent } from './form-general-period/form-general-period.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '@app/components/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    FormGeneralInformationComponent,
    FormGeneralMenuComponent,
    FormGeneralBasicInfoComponent,
    FormGeneralWayCreateComponent,
    FormGeneralDatesComponent,
    FormGeneralEligibleComponent,
    FormGeneralPeriodComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormGeneralInformationRoutingModule,
    FilterPipeModule,
    SharedRedComponentsModule,
    ScrollingModule,
    SharedModule,
    PdfViewerModule,
  ],
  providers: [FormPeriodsService]
})
export class FormGeneralInformationModule { }
