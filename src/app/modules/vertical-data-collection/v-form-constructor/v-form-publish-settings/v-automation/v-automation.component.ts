import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../services/v-publish-settings-automation.service";
import { IAutomation } from "../../../model/publish-settings.model";

@Component({
  selector: "app-v-automation",
  templateUrl: "./v-automation.component.html",
  styleUrls: ["./v-automation.component.scss"]
})
export class VAutomationComponent implements OnInit {
  @Input() id: string;

  automation: IAutomation;

  defaultObject: IAutomation = {
    automation_list: [
      {
        name: "Automation first",
        type_id: 2,
        template_id: 2,
        logics: [
          {
            logic: "1",
            name: "Serion"
          },
          {
            logic: "2",
            name: "Ferion"
          }
        ]
      }
    ]
  };

  constructor(private automationService: VPublishSettingsAutomationService) {}
  // http://red.dev.codeblue.ventures/api/v1/proxy/forms/public-settings/5d1de9f28ffb0833a8374152
  ngOnInit() {
    this.automationService.getOneAutomation(this.id).subscribe(
      (automation: IAutomation) => {
        // console.log("loading AutomationList");
        // console.log(automation);
        this.automation = automation;
      },
      error => console.log(error, "error"),
      () => {
        // this.generalInfoIsValidService.setIsValid(true);
      }
    );
  }

  createAutomation() {
    this.automationService.sendAutomation(this.defaultObject, this.id);
  }
}
