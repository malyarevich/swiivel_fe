import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../../services/v-publish-settings-automation.service";
import { IAutomationLogicListItem } from 'src/app/modules/vertical-data-collection/model/publish-settings.model';

@Component({
  selector: "app-v-automation-logic-area",
  templateUrl: "./v-automation-logic-area.component.html",
  styleUrls: ["./v-automation-logic-area.component.scss"]
})
export class VAutomationLogicAreaComponent implements OnInit {
  @Input() logicList: IAutomationLogicListItem[];

  constructor(private automationService: VPublishSettingsAutomationService) {}
  ngOnInit() {
    // console.log(this.logicList);
  }
}
