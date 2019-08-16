import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PublishSettingsComponent} from '@modules/data-collection/form-constructor/form-publish-settings/publish-settings/publish-settings.component';
import {PublishSettingsOnlineFormComponent} from '@modules/data-collection/form-constructor/form-publish-settings/publish-settings/publish-settings-online-form/publish-settings-online-form.component';
import {PublishSettingsPdfFormComponent} from '@modules/data-collection/form-constructor/form-publish-settings/publish-settings/publish-settings-pdf-form/publish-settings-pdf-form.component';
import {SharedRedComponentsModule} from '@app/shared/components/sharedRedComponents.module';


@NgModule({
  declarations: [
    PublishSettingsComponent,
    PublishSettingsOnlineFormComponent,
    PublishSettingsPdfFormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedRedComponentsModule,
  ],
  exports: [PublishSettingsComponent],
  providers: []
})
export class PublishSettingsModule {
}
