import { Component, OnInit, Input } from "@angular/core";
import { PublishSettingsAutomationService } from "../../../../services/publish-settings-automation.service";
import {
  IAutomationListItem,
  IAutomation
} from "../../../../model/publish-settings.model";

@Component({
  selector: "app-automation-header",
  templateUrl: "./automation-header.component.html",
  styleUrls: ["./automation-header.component.scss"]
})
export class AutomationHeaderComponent implements OnInit {
  @Input() automationItem: IAutomationListItem;
  @Input() automation: IAutomation;

  createdBy: string;
  updatedBy: string;

  constructor(
    private automationService: PublishSettingsAutomationService
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
    const obj: object = {"_id": _id, "type_id": parseInt(type_id, 10)};
    this.automationService.changeAutomationItemType(obj);
  }

  removeAutomationItem(itemId: number) {
    this.automationService.removeAutomationItem(itemId);
  }

  toggleAutomationItemContent(_id: number) {
    this.automationService.toggleAutomationItemContent(_id);
  }

  getStatusContent(_id: number) {
    return this.automationService.isHideAutomationItemContent[_id];
  }

}
