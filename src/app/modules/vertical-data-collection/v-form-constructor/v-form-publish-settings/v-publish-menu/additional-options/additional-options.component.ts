import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { PublishMenuItems } from "../../models/publish-menu-items";
import { ISubMenus } from "../../models/publish-settings";
import { IAutomationListItem, IAutomation } from '../../../../model/publish-settings.model';

@Component({
  selector: "app-v-publish-menu-additional-options",
  templateUrl: "./additional-options.component.html",
  styleUrls: ["./additional-options.component.scss"]
})
export class VPublishMenuComponentAdditionalOptions implements OnInit {
  @Input() item: object;
  @Input() activeMenuItem: string;
  @Input() automation: IAutomation;
  @Input() automationItem: IAutomationListItem;
  @Output() addAutomation = new EventEmitter();

  automationList: IAutomationListItem[];

  constructor() {}

  ngOnInit() {
    //   console.log(this.activeMenuItem);
    this.automationList = this.automation.automation_list;
  }


  getName(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item.id);
    return filtered_list[0]['name'];
  }

  getTypeName(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item.id);
    return filtered_list[0]['name'];
  }

  getTypeIcon(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item.id);
    switch (filtered_list[0]['type']) {
      case "email":
        return `fa-envelope`;
        break;
      case "mailing":
        return `fa-envelope-open-text`;
        break;
      case "system_notification":
        return `fa-bell`;
        break;
      case "text_message":
        return `fa-file-alt`;
        break;
      case "robocall":
        return `fa-phone-alt`;
        break;
      default:
        return `fa-toilet-paper-alt`;
    }
  }

  addNewAutomation() {
    this.addAutomation.emit();
  }

}