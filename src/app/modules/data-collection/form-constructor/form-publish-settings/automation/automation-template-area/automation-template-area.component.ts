import { Component, OnInit, Input } from '@angular/core';
import { PublishSettingsAutomationService } from '../../../../services/publish-settings-automation.service';
import { IAutomation } from 'src/app/modules/data-collection/model/publish-settings.model';

@Component({
  selector: 'app-automation-template-area',
  templateUrl: './automation-template-area.component.html',
  styleUrls: ['./automation-template-area.component.scss']
})
export class AutomationTemplateAreaComponent implements OnInit {
  @Input() templateId: number;
  @Input() automation: IAutomation;

  constructor(private automationService: PublishSettingsAutomationService) {}
  ngOnInit() {}

  getTemplateContent() {
    const filtered_list = this.automation['template_list'].filter((item) => this.templateId === item.id);
    return filtered_list[0]['content'];
  }
}
