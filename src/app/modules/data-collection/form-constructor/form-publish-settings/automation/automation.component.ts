import { Component, OnInit, Input } from "@angular/core";
import { IAutomation } from "../../../model/publish-settings.model";
import { PublishMenuItems } from "../../../model/publish-menu-items";
import { PublishSettingsAutomationService } from '../../../services/publish-settings-automation.service';

@Component({
  selector: "app-automation",
  templateUrl: "./automation.component.html",
  styleUrls: ["./automation.component.scss"]
})
export class AutomationComponent implements OnInit {
  @Input() id: string;
  @Input() automation: IAutomation;
  @Input() activeMenuItem: string;

  publishMenuItems = PublishMenuItems;

  isHideAutomationItemContent: boolean[];

  constructor(
    private automationService: PublishSettingsAutomationService
    ) {}
  // http://red.dev.codeblue.ventures/api/v1/proxy/forms/public-settings/5d1de9f28ffb0833a8374152
  ngOnInit() { 
    this.isHideAutomationItemContent = this.automationService.isHideAutomationItemContent;
    this.automationService.onSwitchAutomationItemContent.subscribe((obj) => {
      this.isHideAutomationItemContent[obj['id']] = obj['value'];
    })
  }
  
  getTemplateName(template_id: number): string {
    const filtered_list = this.automation['template_list'].filter((item) => template_id === item.id);
    return filtered_list[0]['name'];
  }
}
