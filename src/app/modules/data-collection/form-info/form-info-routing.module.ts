import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormInfoComponent} from './form-info.component';

export const routes: Routes = [
  {
    path: '',
    component: FormInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInfoRoutingModule {
}
