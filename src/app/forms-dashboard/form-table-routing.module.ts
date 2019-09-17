import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTableComponent } from './form-table.component';
import { MainComponent } from '@app/core/components/main.component';
import { AuthGuard } from '@app/core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'forms-dashboard',  component: FormTableComponent, pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTableRoutingModule { }
