import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {mainMenuNames} from "../models/main-menu-name.model";

@Component({
  selector: 'app-online-form-menu',
  templateUrl: './online-form-menu.component.html',
  styleUrls: ['./online-form-menu.component.scss']
})
export class OnlineFormMenuComponent implements OnInit {
  @Output() activeMenuItemEmitter = new EventEmitter<string>();

  activeMenuItem: string = '';
  menuItems = [
    {name: mainMenuNames.generalInfo, title: 'General Information', time: 48},
    {name: mainMenuNames.documentsForms, title: 'Documents & Forms', time: 15},
    {name: mainMenuNames.consent, title: 'Consent', time: 12},
    {name: mainMenuNames.paymentSettings, title: 'Payment Settings', time: 10},
    {name: mainMenuNames.tuitionContract, title: 'Tuition Contract', time: 6},
    {name: mainMenuNames.termConditions, title: 'Term & Conditions', time: 14},
    {name: mainMenuNames.payment, title: 'Payment', time: 18},
  ];

  constructor() { }

  ngOnInit() {
  }

  setActiveMenuItem(menuItemName) {
    this.activeMenuItem = menuItemName;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

}
