import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-group-settings',
  templateUrl: './v-group-settings.component.html',
  styleUrls: ['./v-group-settings.component.scss']
})
export class VGroupSettingsComponent implements OnInit {
  @Input() inputGroup;

  tab: string = 'settings';

  groupPreset: string = 'Preset 1';
  supportText: string = 'Actually Student\'s Address';
  limitAmount: number = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
