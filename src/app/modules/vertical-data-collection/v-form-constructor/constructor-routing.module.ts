import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VFormGeneralInformationComponent} from "./v-form-general-information/v-form-general-information.component";
import {VFormSectionComponent} from "./v-form-section/v-form-section.component";
import {VFormBuilderComponent} from "./v-form-builder/v-form-builder.component";
import {VFormPublishSettingsComponent} from "./v-form-publish-settings/v-form-publish-settings.component";
import {VFormAutomationComponent} from "./v-form-automation/v-form-automation.component";

export const routes: Routes = [
  {
    path: 'general-information',
    component: VFormGeneralInformationComponent
  },
  {
    path: 'form-section',
    component: VFormSectionComponent
  },
  {
    path: 'form-builder',
    component: VFormBuilderComponent
  },
  {
    path: 'publish-settings',
    component: VFormPublishSettingsComponent
  },
  {
    path: 'automation',
    component: VFormAutomationComponent
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
