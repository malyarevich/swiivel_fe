import { Component, OnInit, Input } from "@angular/core";
import { IAutomationListItem, IAutomation } from '../../../../model/publish-settings.model';
import { PublishSettingsAutomationService } from '../../../../services/publish-settings-automation.service';

@Component({
  selector: "app-publish-menu-additional-options",
  templateUrl: "./additional-options.component.html",
  styleUrls: ["./additional-options.component.scss"]
})
export class PublishMenuComponentAdditionalOptions implements OnInit {
  @Input() item: object;
  @Input() activeMenuItem: string;
  @Input() automation: IAutomation;

  arrayIsHoverTrash: boolean[] = [];

  constructor(
    private automationService: PublishSettingsAutomationService
    ) {}

  ngOnInit() {
  }

  getTypeName(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => {
      return type_id === item['id'];
    } );
    return filtered_list[0]['name'];
  }

  getTypeIcon(type_id: number): string {
    const filtered_list = this.automation['type_list'].filter((item) => type_id === item['id']);
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
    this.automationService.addAutomationItem();
  }

  removeAutomationItem(itemId: number) {
    this.automationService.removeAutomationItem(itemId);
  }

  goToHash(hash: string) {
    // console.log(hash);
    
    // Root App Module:
    // imports[ ...
    // RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
    // ...]
  }

}