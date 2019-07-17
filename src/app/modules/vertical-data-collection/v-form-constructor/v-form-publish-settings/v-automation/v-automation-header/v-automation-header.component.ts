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

  constructor(
    private automationService: VPublishSettingsAutomationService
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

  onChangeAutomationName(_id: number, name: string) {
    const obj: object = {"_id": _id, "name": name};
    this.automationService.changeAutomationItemName(obj);
  }

  onChangeAutomationType(_id: number, type_id: string) {
    const obj: object = {"_id": _id, "type_id": parseInt(type_id, 10) };
    this.automationService.changeAutomationItemType(obj);
  }

  removeAutomationItem(itemId: number) {
    this.automationService.removeAutomationItem(itemId);
  }

  switchAutomationItemContent(_id: number) {
    this.automationService.switchAutomationItemContent(_id);
  }

  getStatusContent(_id: number) {
    return this.automationService.isHideAutomationItemContent[_id];
  }

}
