import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { PublishMenuItems } from "../../../model/publish-menu-items";
import { IData, PublishSettingsEntity } from "../../../model/publish-settings.model";
import { PublishSettingsPublishSettingsService } from '../../../services/publish-settings-publish-settings.service';
import { PublishSettingsService } from '../../../services/publish-settings.service';

@Component({
  selector: "app-publish-menu",
  templateUrl: "./publish-menu.component.html",
  styleUrls: ["./publish-menu.component.scss"]
})
export class PublishMenuComponent implements OnInit {
  @Input() data: IData;
  @Input() activeMenuItem: string;

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
        listTitle: "List of Automation"
      }
    },
    {
      title: PublishMenuItems.titles[PublishMenuItems.redirect],
      value: PublishMenuItems.redirect
    }
  ];

  constructor(
    private vPublishSettingsService: PublishSettingsService,
    private publishSettingsService: PublishSettingsPublishSettingsService,
    ) {}

  ngOnInit() {    
    if (this.data["publish_settings"] === undefined) {
      this.publishSettingsService.toggleState(PublishSettingsEntity.defaultStateSub);
      this.data["publish_settings"] = {state: PublishSettingsEntity.defaultStateSub}
    }
  }

  setActiveItem(value) {
    this.activeMenuItem = value;
    this.vPublishSettingsService.changeActiveMenuItem(this.activeMenuItem);
  }

  toggleSubMenu(item, type) {
    const typeObj = {
        ...this.data["publish_settings"]["state"]["settings"],
    }[type];
    const settingsObj = {
      
      ...this.data["publish_settings"]["state"]["settings"],
      ...typeObj
    }
    const obj = {
      ...this.data["publish_settings"]["state"],
      "settings": settingsObj
    }
    this.publishSettingsService.toggleState(obj)
  }
}
