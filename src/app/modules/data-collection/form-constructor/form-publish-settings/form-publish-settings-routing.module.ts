import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormPublishSettingsComponent} from './form-publish-settings.component';

export const routes: Routes = [
  {
    path: '',
    component: FormPublishSettingsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPublishSettingsRoutingModule { }
