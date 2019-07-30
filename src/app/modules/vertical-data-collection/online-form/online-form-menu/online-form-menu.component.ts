import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { IActiveSections } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";
import { OnlineFormNavigationService } from '../services/online-form-navigation.service';

@Component({
  selector: "app-online-form-menu",
  templateUrl: "./online-form-menu.component.html",
  styleUrls: ["./online-form-menu.component.scss"]
})
export class OnlineFormMenuComponent implements OnInit {
  @Input() percents: number[];
  @Output() activeMenuItemEmitter = new EventEmitter<string>();

  activeSections: IActiveSections;
  hoveredItems = [];

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  pathIconsFolder = "assets/images/icons/";

  constructor(private onlineFormNavigationService: OnlineFormNavigationService) {}

  ngOnInit() {
    this.activeSections = this.onlineFormNavigationService.getActiveSections();
    console.log(this.activeSections);
    this.initActiveMenuList();
  }

  initActiveMenuList() {
    let activeMenuList = {};
    for (let key in this.activeSections) {
      if (this.activeSections[key] && this.activeSections[key].isActive) {
        activeMenuList[key] = (this.activeSections[key]);
      }
    }

    this.onlineFormNavigationService.setActiveSections(<IActiveSections>activeMenuList);
    this.onlineFormNavigationService.setActiveMenuItem(this.onlineFormNavigationService.getMenuItemNameById(0));
  }

  getActiveMenuItem(): string {
    return this.onlineFormNavigationService.getActiveMenuItem()
  }

  setActiveMenuItem(menuItemName: string) {
    this.onlineFormNavigationService.setActiveMenuItem(menuItemName)
  }

  isShowMenuItem(itemMenuName) {
    return this.activeSections[itemMenuName].isActive;
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
