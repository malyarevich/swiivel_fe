import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormBuilderComponent} from './form-builder.component';


export const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
