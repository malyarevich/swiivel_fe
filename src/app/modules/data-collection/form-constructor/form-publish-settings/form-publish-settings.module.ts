import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormPublishSettingsRoutingModule} from './form-publish-settings-routing.module';
import {FormPublishSettingsComponent} from './form-publish-settings.component';
import {RedirectPagesComponent} from './redirect-pages/redirect-pages.component';
import {PublishMenuComponent} from './publish-menu/publish-menu.component';
import {PublishMenuComponentAdditionalOptions} from './publish-menu/additional-options/additional-options.component';
import {PublishSettingsService} from '../../services/publish-settings.service';
import {PublishSettingsRemoteService} from '../../services/publish-settings-remote.service';
import {PublishSettingsAutomationService} from '../../services/publish-settings-automation.service';
import {PublishSettingsPublishSettingsService} from '../../services/publish-settings-publish-settings.service';
import {SharedRedComponentsModule} from '@app/shared/components/sharedRedComponents.module';
import {ConditionsReviewModule} from './conditions-review/conditions-review.module';
import {PublishSettingsModule} from './publish-settings/publish-settings.module';
import {AutomationModule} from './automation/automation.module';


@NgModule({
  declarations: [
    FormPublishSettingsComponent,
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
    AutomationModule,
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
