import { Component, OnInit, Input } from "@angular/core";
import { IAutomation } from "../../../model/publish-settings.model";
import { PublishMenuItems } from "../models/publish-menu-items";
import { VPublishSettingsAutomationLocalService } from '../../../services/v-publish-settings-automation-local.service';

@Component({
  selector: "app-v-automation",
  templateUrl: "./v-automation.component.html",
  styleUrls: ["./v-automation.component.scss"]
})
export class VAutomationComponent implements OnInit {
  @Input() id: string;
  @Input() automation: IAutomation;
  @Input() activeMenuItem: string;

  publishMenuItems = PublishMenuItems;

  isHideAutomationItemContent: boolean[];

  constructor(
    private automationLocalService: VPublishSettingsAutomationLocalService
    ) {}
  // http://red.dev.codeblue.ventures/api/v1/proxy/forms/public-settings/5d1de9f28ffb0833a8374152
  ngOnInit() { 
    this.isHideAutomationItemContent = this.automationLocalService.isHideAutomationItemContent;
    this.automationLocalService.onSwitchAutomationItemContent.subscribe((obj) => {
      this.isHideAutomationItemContent[obj['id']] = obj['value'];
    });}
  
  getTemplateName(template_id: number): string {
    const filtered_list = this.automation['template_list'].filter((item) => template_id === item.id);
    return filtered_list[0]['name'];
  }
}
