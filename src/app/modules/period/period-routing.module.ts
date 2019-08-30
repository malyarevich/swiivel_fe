import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodComponent } from './period.component';
import { PeriodCreateComponent } from './period-create/period-create.component';
import { PeriodEditComponent } from './period-edit/period-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: PeriodComponent,
  },
  {
    path: 'create',
    component: PeriodCreateComponent
  },
  {
    path: 'edit',
    component: PeriodEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule {
}
