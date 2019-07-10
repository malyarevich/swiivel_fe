import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../../services/v-publish-settings-automation.service";
import { IAutomationTemplateListItem, IAutomation } from 'src/app/modules/vertical-data-collection/model/publish-settings.model';

@Component({
  selector: "app-v-automation-template-area",
  templateUrl: "./v-automation-template-area.component.html",
  styleUrls: ["./v-automation-template-area.component.scss"]
})
export class VAutomationTemplateAreaComponent implements OnInit {
  @Input() templateId: number;
  @Input() automation: IAutomation;

  constructor(private automationService: VPublishSettingsAutomationService) {}
  ngOnInit() {}

  getTemplateContent() {
    const filtered_list = this.automation['template_list'].filter((item) => this.templateId === item.id);
    return filtered_list[0]['content'];
  }
}
