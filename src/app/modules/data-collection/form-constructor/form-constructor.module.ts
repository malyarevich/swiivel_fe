import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FormConstructorRoutingModule} from './form-constructor-routing.module';
import {SharedRedComponentsModule} from '../../../shared/components/sharedRedComponents.module';
import {GeneralDirectivesModule} from '../../../utils/directives/general-directives.module';

import {PublishSettingsService} from '../services/publish-settings.service';
import {PublishSettingsRemoteService} from '../services/publish-settings-remote.service';
import {PublishSettingsAutomationService} from '../services/publish-settings-automation.service';
import {PublishSettingsPublishSettingsService} from '../services/publish-settings-publish-settings.service';
import {SaveFormService} from '../services/save-form.service';
import {ConstructorDraftService} from '../services/constructor-draft.service';

import {FormNavigationBarComponent} from './form-navigation-bar/form-navigation-bar.component';
import {FormPublishSettingsComponent} from './form-publish-settings/form-publish-settings.component';
import {ConditionsReviewComponent} from './form-publish-settings/conditions-review/conditions-review.component';
import {PublishSettingsComponent} from './form-publish-settings/publish-settings/publish-settings.component';
import {PublishSettingsOnlineFormComponent} from './form-publish-settings/publish-settings/publish-settings-online-form/publish-settings-online-form.component';
import {PublishSettingsPdfFormComponent} from './form-publish-settings/publish-settings/publish-settings-pdf-form/publish-settings-pdf-form.component';
import {AutomationComponent} from './form-publish-settings/automation/automation.component';
import {AutomationHeaderComponent} from './form-publish-settings/automation/automation-header/automation-header.component';
import {AutomationLogicAreaComponent} from './form-publish-settings/automation/automation-logic-area/automation-logic-area.component';
import {AutomationTemplateAreaComponent} from './form-publish-settings/automation/automation-template-area/automation-template-area.component';
import {RedirectPagesComponent} from './form-publish-settings/redirect-pages/redirect-pages.component';
import {PublishMenuComponent} from './form-publish-settings/publish-menu/publish-menu.component';
import {VPublishMenuComponentAdditionalOptions} from './form-publish-settings/publish-menu/additional-options/additional-options.component';
import {FilterPipeModule} from '../../../shared/pipes';


@NgModule({
  declarations: [
    FormNavigationBarComponent,
    FormPublishSettingsComponent,
    ConditionsReviewComponent,
    PublishSettingsComponent,
    PublishSettingsOnlineFormComponent,
    PublishSettingsPdfFormComponent,
    AutomationComponent,
    AutomationHeaderComponent,
    AutomationLogicAreaComponent,
    AutomationTemplateAreaComponent,
    RedirectPagesComponent,
    PublishMenuComponent,
    VPublishMenuComponentAdditionalOptions,
  ],
  imports: [
    CommonModule,
    NgbModule,
    GeneralDirectivesModule,
    SharedRedComponentsModule,
    FormConstructorRoutingModule,
    FilterPipeModule,
  ],
  exports: [],
  providers: [
    SaveFormService,
    ConstructorDraftService,
    PublishSettingsService,
    PublishSettingsRemoteService,
    PublishSettingsAutomationService,
    PublishSettingsPublishSettingsService
  ]
})
export class FormConstructorModule {
}
