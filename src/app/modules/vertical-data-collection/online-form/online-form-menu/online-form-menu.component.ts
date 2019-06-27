import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";

@Component({
  selector: "app-online-form-menu",
  templateUrl: "./online-form-menu.component.html",
  styleUrls: ["./online-form-menu.component.scss"]
})
export class OnlineFormMenuComponent implements OnInit {
  @Input() form: Form;
  @Output() activeMenuItemEmitter = new EventEmitter<string>();

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  pathIconsFolder = "../../../../../assets/images/icons/";

  activeMenuItem: string = mainMenuNames.generalInfo;

  constructor() {}

  ngOnInit() {
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  setActiveMenuItem(menuItemName) {
    this.activeMenuItem = menuItemName;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  isShowMenuItem(itemMenuName) {
    switch (itemMenuName) {
      case mainMenuNames.consentInfo:
        return this.checkItemIsActive(mainMenuNames.consentInfo);
      case mainMenuNames.paymentSettings:
        return this.checkItemIsActive(mainMenuNames.paymentSettings);
      case mainMenuNames.termsConditions:
        return this.checkItemIsActive(mainMenuNames.termsConditions);
      case mainMenuNames.tuitionContract:
        return this.checkItemIsActive(mainMenuNames.tuitionContract);
      default:
        return true;
    }
  }

  checkItemIsActive(itemMenuName) {
    if (this.form && this.form[itemMenuName]) {
      return this.form[itemMenuName].isActive;
    }
    return false;
  }
}
