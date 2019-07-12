import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { PublishMenuItems } from "../../models/publish-menu-items";
import { ISubMenus } from "../../models/publish-settings";
import { IAutomationListItem, IAutomation } from '../../../../model/publish-settings.model';
import { VPublishSettingsAutomationLocalService } from 'src/app/modules/vertical-data-collection/services/v-publish-settings-automation-local.service';
import { routes } from 'src/app/modules/online-form/online-form-routing.module';

@Component({
  selector: "app-v-publish-menu-additional-options",
  templateUrl: "./additional-options.component.html",
  styleUrls: ["./additional-options.component.scss"]
})
export class VPublishMenuComponentAdditionalOptions implements OnInit {
  @Input() item: object;
  @Input() activeMenuItem: string;
  @Input() automation: IAutomation;

  arrayIsHoverTrash: boolean[] = [];

  constructor(
    private automationLocalService: VPublishSettingsAutomationLocalService
    ) {}

  ngOnInit() {
      // console.log(this.automation);
  }


  getName(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item['id']);
    return filtered_list[0]['name'];
  }

  getTypeName(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => {
      return type_id === item['id'];
    } );
    return filtered_list[0]['name'];
  }

  getTypeIcon(type_id: number): string {
    // console.log(type_id);
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item['id']);
    // console.log(filtered_list);
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
        return `fa-phone-volume`;
        break;
      default:
        return `fa-toilet-paper-alt`;
    }
  }

  addAutomationItem() {
    this.automationLocalService.addAutomationItem();
  }

  removeAutomationItem(itemId: number) {
    this.automationLocalService.removeAutomationItem(itemId);
  }

  goToHash(hash: string) {
    // console.log(hash);
    
    // Root App Module:
    // imports[ ...
    // RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
    // ...]
  }

}