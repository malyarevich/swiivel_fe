import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../../services/v-publish-settings-automation.service";
import { IAutomationTemplateListItem } from 'src/app/modules/vertical-data-collection/model/publish-settings.model';

@Component({
  selector: "app-v-automation-template-area",
  templateUrl: "./v-automation-template-area.component.html",
  styleUrls: ["./v-automation-template-area.component.scss"]
})
export class VAutomationTemplateAreaComponent implements OnInit {
  @Input() template: IAutomationTemplateListItem;

  constructor(private automationService: VPublishSettingsAutomationService) {}
  ngOnInit() {
    // console.log(this.template);
  }
}
