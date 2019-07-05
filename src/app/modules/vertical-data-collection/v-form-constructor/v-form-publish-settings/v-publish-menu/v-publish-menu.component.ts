import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { PublishMenuItems } from "../models/publish-menu-items";
import { ISubMenus } from "../models/publish-settings";

@Component({
  selector: "app-v-publish-menu",
  templateUrl: "./v-publish-menu.component.html",
  styleUrls: ["./v-publish-menu.component.scss"]
})
export class VPublishMenuComponent implements OnInit {
  @Input() stateSub: ISubMenus;
  @Output() activeMenuItemEmitter = new EventEmitter();
  @Output() stateSubEmitter = new EventEmitter<ISubMenus>();

  activeMenuItem: string = PublishMenuItems.conditions;

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
      addOptions: [
        {
          listTitle: "List of Automation",
          automation_list: [
            {
              id: 1,
              name: "Automation first",
              type_id: 2,
              template_id: 2,
              logics: [1, 2]
            }
          ]
        }
      ]
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.redirect],
      value: PublishMenuItems.redirect
    }
  ];

  constructor() {}

  ngOnInit() {
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
    this.stateSubEmitter.emit(this.stateSub);
  }

  setActiveItem(value) {
    this.activeMenuItem = value;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  toggleSubMenu(item, type) {
    this.stateSub[item][type] != this.stateSub[item][type];
    this.stateSubEmitter.emit(this.stateSub);
  }
}
