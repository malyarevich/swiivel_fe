import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {mainMenuNames} from "../model/main-menu-name.model";
import {Form} from "../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-form-menu',
  templateUrl: './online-form-menu.component.html',
  styleUrls: ['./online-form-menu.component.scss']
})
export class OnlineFormMenuComponent implements OnInit {
  @Input() form: Form;
  @Output() activeMenuItemEmitter = new EventEmitter<string>();

  activeMenuItem: string = mainMenuNames.generalInfo;
  menuItems = [
    {name: mainMenuNames.generalInfo, title: 'General Information', time: 48},
    {name: mainMenuNames.documentsForms, title: 'Documents & Forms', time: 15},
    {name: mainMenuNames.consentInfo, title: 'Consent', time: 12},
    {name: mainMenuNames.paymentSettings, title: 'Payment Settings', time: 10},
    {name: mainMenuNames.tuitionContract, title: 'Tuition Contract', time: 6},
    {name: mainMenuNames.termsConditions, title: 'Term & Conditions', time: 14},
    {name: mainMenuNames.payment, title: 'Payment', time: 18},
  ];

  constructor() { }

  ngOnInit() {
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  setActiveMenuItem(menuItemName) {
    this.activeMenuItem = menuItemName;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  isShowMenuItem(itemMenuName) {
    switch (itemMenuName) {
      case mainMenuNames.consentInfo: return this.checkItemIsActive(mainMenuNames.consentInfo);
      case mainMenuNames.termsConditions: return this.checkItemIsActive(mainMenuNames.termsConditions);
      case mainMenuNames.tuitionContract: return this.checkItemIsActive(mainMenuNames.tuitionContract);
      default: return true;
    }
  }

  checkItemIsActive(itemMenuName) {
    if(this.form && this.form[itemMenuName]) {
      return this.form[itemMenuName].isActive;
    }
    return false;
  }

}
