import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormPublishSettingsRoutingModule} from './form-publish-settings-routing.module';
import {FormPublishSettingsComponent} from './form-publish-settings.component';
import {AutomationComponent} from './automation/automation.component';
import {AutomationHeaderComponent} from './automation/automation-header/automation-header.component';
import {AutomationLogicAreaComponent} from './automation/automation-logic-area/automation-logic-area.component';
import {AutomationTemplateAreaComponent} from './automation/automation-template-area/automation-template-area.component';
import {RedirectPagesComponent} from './redirect-pages/redirect-pages.component';
import {PublishMenuComponent} from './publish-menu/publish-menu.component';
import {PublishMenuComponentAdditionalOptions} from './publish-menu/additional-options/additional-options.component';
import {PublishSettingsService} from '../../services/publish-settings.service';
import {PublishSettingsRemoteService} from '../../services/publish-settings-remote.service';
import {PublishSettingsAutomationService} from '../../services/publish-settings-automation.service';
import {PublishSettingsPublishSettingsService} from '../../services/publish-settings-publish-settings.service';
import {SharedRedComponentsModule} from '@app/shared/components/sharedRedComponents.module';
import {ConditionsReviewModule} from '@modules/data-collection/form-constructor/form-publish-settings/conditions-review/conditions-review.module';
import {PublishSettingsModule} from '@modules/data-collection/form-constructor/form-publish-settings/publish-settings/publish-settings.module';


@NgModule({
  declarations: [
    FormPublishSettingsComponent,
    AutomationComponent,
    AutomationHeaderComponent,
    AutomationLogicAreaComponent,
    AutomationTemplateAreaComponent,
    RedirectPagesComponent,
    PublishMenuComponent,
    PublishMenuComponentAdditionalOptions,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormPublishSettingsRoutingModule,
    SharedRedComponentsModule,
    ConditionsReviewModule,
    PublishSettingsModule,
  ],
  providers: [
    PublishSettingsService,
    PublishSettingsRemoteService,
    PublishSettingsAutomationService,
    PublishSettingsPublishSettingsService
  ]
})
export class FormPublishSettingsModule {
}
