import { Component, OnInit, Input } from "@angular/core";
import { VPublishSettingsAutomationService } from "../../../services/v-publish-settings-automation.service";

@Component({
  selector: "app-v-automation",
  templateUrl: "./v-automation.component.html",
  styleUrls: ["./v-automation.component.scss"]
})
export class VAutomationComponent implements OnInit {
  @Input() id: string;

  automationList;
  // defaultObject = {
  //   automation_list: [
  //     {
  //       name: "Automation first",
  //       type_id: "2",
  //       template_id: "2",
  //       logics: [1, 2]
  //     }
  //   ]
  // };

  constructor(private automationService: VPublishSettingsAutomationService) {}
  // http://red.dev.codeblue.ventures/api/v1/proxy/forms/public-settings/5d1de9f28ffb0833a8374152
  ngOnInit() {
    // this.automationService.sendAutomationList(this.defaultObject, this.id);
    this.automationService.getOneAutomationList(this.id).subscribe(
      (list: any) => {
        console.log("loading AutomationList");
        console.log(list);
        this.automationList = list;
      },
      error => console.log(error, "error"),
      () => {
        // this.generalInfoIsValidService.setIsValid(true);
      }
    );
  }
}
