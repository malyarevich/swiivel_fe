import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-group-settings',
  templateUrl: './v-group-settings.component.html',
  styleUrls: ['./v-group-settings.component.scss']
})
export class VGroupSettingsComponent implements OnInit {
  @Input() inputGroup;

  tab: string = 'settings';

  constructor() {
  }

  ngOnInit() {
  }

}
