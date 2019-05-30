import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PublishMenuItems } from "../models/publish-menu-items";

@Component({
  selector: "app-v-publish-menu",
  templateUrl: "./v-publish-menu.component.html",
  styleUrls: ["./v-publish-menu.component.scss"]
})
export class VPublishMenuComponent implements OnInit {
  @Output() activeMenuItemEmitter = new EventEmitter();

  activeMenuItem: string = PublishMenuItems.conditions;

  subMenus: ISubMenus = {
    settings: {
      online: false,
      pdf: false,
    },
  }

  menuItems = [
    {
      title: PublishMenuItems.titles[PublishMenuItems.conditions],
      value: PublishMenuItems.conditions
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.settings],
      value: PublishMenuItems.settings,
      subMenus:  [
        {
          type: PublishMenuItems.subMenus[PublishMenuItems.settings].types['online'],
          name: PublishMenuItems.subMenus[PublishMenuItems.settings].names['online'],
        },
        {
          type: PublishMenuItems.subMenus[PublishMenuItems.settings].types['pdf'],
          name: PublishMenuItems.subMenus[PublishMenuItems.settings].names['pdf'],
        }
      ]
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.automation],
      value: PublishMenuItems.automation
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.redirect],
      value: PublishMenuItems.redirect
    }
  ];

  constructor() {}

  ngOnInit() {
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  setActiveItem(value) {
    this.activeMenuItem = value;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  toggleSubMenu(item, type) {
    this.subMenus[item][type] != this.subMenus[item][type];
  }
}

export interface ISubMenus {
  settings: ISettingsMenu;
}

export interface ISettingsMenu {
  online: boolean,
  pdf: boolean,
}