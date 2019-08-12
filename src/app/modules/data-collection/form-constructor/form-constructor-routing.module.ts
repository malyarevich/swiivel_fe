import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormGeneralInformationComponent} from './form-general-information/form-general-information.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {FormPublishSettingsComponent} from './form-publish-settings/form-publish-settings.component';
import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';

export const routes: Routes = [
  {
    path: '',
    component: FormNavigationBarComponent,
    children: [
      {
        path: 'general-information',
        children: [
          {
            path: '',
            loadChildren: () => import('./form-general-information/form-general-information.module')
              .then(m => m.FormGeneralInformationModule)
          }
        ]
      },
      {
        path: 'form-builder',
        children: [
          {
            path: '',
            loadChildren: () => import('./form-builder/form-builder.module')
              .then(m => m.FormBuilderModule)
          }
        ]
      },
      {
        path: 'publish-settings',
        component: FormPublishSettingsComponent
      },
      {
        path: '',
        redirectTo: 'general-information'
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConstructorRoutingModule {

}
