import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormManagementComponent} from './form-management.component';


export const routes: Routes = [
  {
    path: '',
    component: FormManagementComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormManagementRoutingModule { }
