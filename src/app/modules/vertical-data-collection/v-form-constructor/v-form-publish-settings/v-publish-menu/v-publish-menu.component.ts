import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { PublishMenuItems } from "../models/publish-menu-items";
import { ISubMenus } from "../models/publish-settings";
import { IAutomationListItem, IAutomation } from '../../../model/publish-settings.model';

@Component({
  selector: "app-v-publish-menu",
  templateUrl: "./v-publish-menu.component.html",
  styleUrls: ["./v-publish-menu.component.scss"]
})
export class VPublishMenuComponent implements OnInit {
  @Input() stateSub: ISubMenus;
  @Input() automation: IAutomation;
  @Output() addAutomation = new EventEmitter();
  @Output() activeMenuItemEmitter = new EventEmitter();
  @Output() stateSubEmitter = new EventEmitter<ISubMenus>();

  activeMenuItem: string;
  automationList: IAutomationListItem[];

  // stateSub: ISubMenus = {
  //   settings: {
  //     online: false,
  //     pdf: false,
  //   },
  // };

  menuItems = [
    {
      title: PublishMenuItems.titles[PublishMenuItems.conditions],
      value: PublishMenuItems.conditions
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.settings],
      value: PublishMenuItems.settings,
      stateSub: [
        {
          type:
            PublishMenuItems.stateSub[PublishMenuItems.settings].types[
              "online"
            ],
          name:
            PublishMenuItems.stateSub[PublishMenuItems.settings].names["online"]
        },
        {
          type:
            PublishMenuItems.stateSub[PublishMenuItems.settings].types["pdf"],
          name:
            PublishMenuItems.stateSub[PublishMenuItems.settings].names["pdf"]
        }
      ]
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.automation],
      value: PublishMenuItems.automation,
      addOptions: {
        listTitle: "List of Automation",
      }
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.redirect],
      value: PublishMenuItems.redirect
    }
  ];

  constructor() {}

  ngOnInit() {
    this.activeMenuItemEmitter.emit(PublishMenuItems.conditions);
    this.stateSubEmitter.emit(this.stateSub);
    this.automationList = this.automation.automation_list;
  }

  setActiveItem(value) {
    this.activeMenuItem = value;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  toggleSubMenu(item, type) {
    this.stateSub[item][type] != this.stateSub[item][type];
    this.stateSubEmitter.emit(this.stateSub);
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
