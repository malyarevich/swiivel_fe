import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseComponent } from './release/release.component';
import { FormSendNavBarComponent } from './form-send-nav-bar/form-send-nav-bar.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  {
    path: '',
    component: FormSendNavBarComponent,
    children: [
      {
        path: 'release',
        component: ReleaseComponent
      },
      {
        path: 'preview',
        component: PreviewComponent
      },
      {
        path: '',
        redirectTo: 'release'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSendRoutingModule {

}
