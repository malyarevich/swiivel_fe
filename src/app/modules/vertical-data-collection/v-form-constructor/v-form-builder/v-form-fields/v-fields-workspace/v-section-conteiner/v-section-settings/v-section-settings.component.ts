import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-section-settings',
  templateUrl: './v-section-settings.component.html',
  styleUrls: ['./v-section-settings.component.scss']
})
export class VSectionSettingsComponent implements OnInit {


  settingsLabel = 'Group Presets';
  constructor() { }

  ngOnInit() {
  }

}
