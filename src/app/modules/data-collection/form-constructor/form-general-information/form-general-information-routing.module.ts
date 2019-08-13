import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormGeneralInformationComponent} from './form-general-information.component';


export const routes: Routes = [
  {
    path: '',
    component: FormGeneralInformationComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGeneralInformationRoutingModule { }
