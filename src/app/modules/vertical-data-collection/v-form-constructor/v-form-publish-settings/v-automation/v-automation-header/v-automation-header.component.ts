import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationLocalService } from "../../../../services/v-publish-settings-automation-local.service";
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

  constructor(
    private automationLocalService: VPublishSettingsAutomationLocalService
  ) {}

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

  onChangeAutomationName(id: number, name: string) {
    const obj: object = {"id": id, "name": name};
    this.automationLocalService.changeAutomationItemName(obj);
  }

  onChangeAutomationType(id: number, type_id: string) {
    const obj: object = {"id": id, "type_id": parseInt(type_id, 10) };
    this.automationLocalService.changeAutomationItemType(obj);
  }

  removeAutomationItem(itemId: number) {
    this.automationLocalService.removeAutomationItem(itemId);
  }

  switchAutomationItemContent(id: number) {
    this.automationLocalService.switchAutomationItemContent(id);
  }

  getStatusContent(id: number) {
    return this.automationLocalService.isHideAutomationItemContent[id];
  }

}
