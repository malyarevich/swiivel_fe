import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineFormComponent } from './online-form.component';

export const routes: Routes = [
  {
    path: '',
    component: OnlineFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFormRoutingModule { }
