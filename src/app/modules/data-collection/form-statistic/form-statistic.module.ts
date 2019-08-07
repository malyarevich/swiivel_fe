import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormStatisticComponent} from './form-statistic.component';
import {FormStatisticViewsComponent} from './form-statistic-views/form-statistic-views.component';
import {FormStatisticInvitesComponent} from './form-statistic-invites/form-statistic-invites.component';
import {FormStatisticSubmissionsComponent} from './form-statistic-submissions/form-statistic-submissions.component';
import {ProgressBarModule} from '../../../shared/components/progress-bar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsStatsService} from '../services/forms-stats.service';



@NgModule({
  declarations: [
    FormStatisticComponent,
    FormStatisticViewsComponent,
    FormStatisticInvitesComponent,
    FormStatisticSubmissionsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ProgressBarModule
  ],
  exports: [FormStatisticComponent],
  providers: [FormsStatsService]
})
export class FormStatisticModule {}
