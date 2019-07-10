import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../services/v-publish-settings-automation.service";
import { IAutomation } from "../../../model/publish-settings.model";

@Component({
  selector: "app-v-automation",
  templateUrl: "./v-automation.component.html",
  styleUrls: ["./v-automation.component.scss"]
})
export class VAutomationComponent implements OnInit {
  @Input() id: string;
  @Input() automation: IAutomation;

  constructor(private automationService: VPublishSettingsAutomationService) {}
  // http://red.dev.codeblue.ventures/api/v1/proxy/forms/public-settings/5d1de9f28ffb0833a8374152
  ngOnInit() { }
  
  getTemplateName(template_id: number): string {
    const filtered_list = this.automation['template_list'].filter((item) => template_id === item.id);
    return filtered_list[0]['name'];
  }
}
