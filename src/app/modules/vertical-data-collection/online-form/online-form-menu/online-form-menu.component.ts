import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { IActiveSections, IActiveSection } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";

@Component({
  selector: "app-online-form-menu",
  templateUrl: "./online-form-menu.component.html",
  styleUrls: ["./online-form-menu.component.scss"]
})
export class OnlineFormMenuComponent implements OnInit {
  @Input() activeSections: IActiveSections;
  @Input() percents: number[];
  @Output() activeMenuItemEmitter = new EventEmitter<string>();

  activeMenuList: Object;
  hoveredItems = [];

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  pathIconsFolder = "../../../../../assets/images/icons/";

  activeMenuItem: string = mainMenuNames.generalInfo;

  constructor() {}

  ngOnInit() {
    this.initActiveMenuList();
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  initActiveMenuList() {
    let activeMenuList = {};
    for (let key in this.activeSections) {
      if (this.activeSections[key] && this.activeSections[key].isActive) {
        activeMenuList[key] = (this.activeSections[key]);
      }
    }
    this.activeMenuList = activeMenuList;
  }

  setActiveMenuItem(menuItemName) {
    this.activeMenuItem = menuItemName;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  isShowMenuItem(itemMenuName) {
    return this.activeMenuList[itemMenuName];
  }

  setHovered(itemName) {
    this.hoveredItems[itemName] = true;
  }

  unsetHovered(itemName) {
    this.hoveredItems[itemName] = false;
  }

  isHovered(itemName) {
    return this.hoveredItems[itemName] === true;
  }
}
