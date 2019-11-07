import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormManagementContainer } from '@app/form-management/form-management.component';
import { AuthGuard } from '@core/auth.guard';
import { MainComponent } from '@shared/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id',  component: FormManagementContainer },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormManagementRoutingModule { }
