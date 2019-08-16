import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AutomationComponent} from '@modules/data-collection/form-constructor/form-publish-settings/automation/automation.component';
import {AutomationHeaderComponent} from '@modules/data-collection/form-constructor/form-publish-settings/automation/automation-header/automation-header.component';
import {AutomationLogicAreaComponent} from '@modules/data-collection/form-constructor/form-publish-settings/automation/automation-logic-area/automation-logic-area.component';
import {AutomationTemplateAreaComponent} from '@modules/data-collection/form-constructor/form-publish-settings/automation/automation-template-area/automation-template-area.component';


@NgModule({
  declarations: [
    AutomationComponent,
    AutomationHeaderComponent,
    AutomationLogicAreaComponent,
    AutomationTemplateAreaComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [AutomationComponent],
  providers: []
})
export class AutomationModule {
}
