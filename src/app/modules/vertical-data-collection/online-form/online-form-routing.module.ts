import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OnlineFormViewComponent} from "./online-form-view/online-form-view.component";


export const routes: Routes = [
  {
    path: '',
    component: OnlineFormViewComponent,
    children: [
      {
        path: '',
        component: OnlineFormViewComponent,
      },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFormRoutingModule { }
