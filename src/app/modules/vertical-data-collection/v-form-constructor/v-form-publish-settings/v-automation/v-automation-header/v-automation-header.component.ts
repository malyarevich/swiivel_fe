import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../../services/v-publish-settings-automation.service";
import {
  IAutomationListItem,
  IAutomation
} from "../../../../model/publish-settings.model";

@Component({
  selector: "app-v-automation-header",
  templateUrl: "./v-automation-header.component.html",
  styleUrls: ["./v-automation-header.component.scss"]
})
export class VAutomationHeaderComponent implements OnInit {
  @Input() automationItem: IAutomationListItem;
  @Input() automation: IAutomation;

  createdBy: string;
  updatedBy: string;

  constructor(private automationService: VPublishSettingsAutomationService) {}

  ngOnInit() {
    this.createdBy =
      this.automationItem["created_by"] !== undefined
        ? `${this.automationItem["created_by"]["full_name"]} ${
            this.automationItem["created_by"]["created_at"]
          }`
        : `You (not yet created)`;

    this.updatedBy =
      this.automationItem["created_by"] !== undefined
        ? `${this.automationItem["updated_by"]["full_name"]} ${
            this.automationItem["updated_by"]["updated_at"]
          }`
        : `You (not yet updated)`;
  }
}
