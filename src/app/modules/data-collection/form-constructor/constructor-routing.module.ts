import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormGeneralInformationComponent} from "./form-general-information/form-general-information.component";
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {FormPublishSettingsComponent} from "./form-publish-settings/form-publish-settings.component";

export const routes: Routes = [
  {
    path: 'general-information',
    component: FormGeneralInformationComponent
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent
  },
  {
    path: 'publish-settings',
    component: FormPublishSettingsComponent
  },
  {
    path: '',
    redirectTo: 'general-information'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructorRoutingModule {

}
