import { Component, OnInit, Input } from '@angular/core';
import { PublishSettingsAutomationService } from '../../../../services/publish-settings-automation.service';
import { IAutomation } from 'src/app/modules/data-collection/model/publish-settings.model';

@Component({
  selector: 'app-automation-logic-area',
  templateUrl: './automation-logic-area.component.html',
  styleUrls: ['./automation-logic-area.component.scss']
})
export class AutomationLogicAreaComponent implements OnInit {
  @Input() logicList: number[];
  @Input() automation: IAutomation;

  constructor(private automationService: PublishSettingsAutomationService) {}
  ngOnInit() {}

  getLogicName(logic_id: any): string {
    let filtered_list = this.automation["logic_list"].filter(
      item => logic_id === item.id
    );
    return filtered_list[0]["name"];
  }
}
