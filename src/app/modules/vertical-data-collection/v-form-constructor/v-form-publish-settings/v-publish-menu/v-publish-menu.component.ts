import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PublishMenuItems} from "../models/publish-menu-items";

@Component({
  selector: 'app-v-publish-menu',
  templateUrl: './v-publish-menu.component.html',
  styleUrls: ['./v-publish-menu.component.scss']
})
export class VPublishMenuComponent implements OnInit {
  @Output() activeMenuItemEmitter = new EventEmitter();

  activeMenuItem: string = PublishMenuItems.conditions;

  menuItems = [
    {title: PublishMenuItems.titles[PublishMenuItems.conditions], value: PublishMenuItems.conditions},
    {title: PublishMenuItems.titles[PublishMenuItems.settings], value: PublishMenuItems.settings},
    {title: PublishMenuItems.titles[PublishMenuItems.automation], value: PublishMenuItems.automation},
    {title: PublishMenuItems.titles[PublishMenuItems.redirect], value: PublishMenuItems.redirect},
  ];

  constructor() { }

  ngOnInit() {
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

  setActiveItem(value) {
    this.activeMenuItem = value;
    this.activeMenuItemEmitter.emit(this.activeMenuItem);
  }

}
