import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormManagementContainer } from './form-management.container';


export const routes: Routes = [
  {
    path: '',
    component: FormManagementContainer,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormManagementRoutingModule { }
