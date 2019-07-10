import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../../services/v-publish-settings-automation.service";
import {
  IAutomationLogicListItem,
  IAutomation
} from "src/app/modules/vertical-data-collection/model/publish-settings.model";

@Component({
  selector: "app-v-automation-logic-area",
  templateUrl: "./v-automation-logic-area.component.html",
  styleUrls: ["./v-automation-logic-area.component.scss"]
})
export class VAutomationLogicAreaComponent implements OnInit {
  @Input() logicList: number[];
  @Input() automation: IAutomation;

  constructor(private automationService: VPublishSettingsAutomationService) {}
  ngOnInit() {}

  getLogicName(logic_id: any): string {
    let filtered_list = this.automation["logic_list"].filter(
      item => logic_id === item.id
    );
    return filtered_list[0]["name"];
  }
}
