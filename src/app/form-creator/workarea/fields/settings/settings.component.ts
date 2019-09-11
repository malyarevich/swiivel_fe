import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  type = 103;

  constructor() { }

  ngOnInit() {
  }

  getSectionTitle() {
    let title: string;
    switch (this.type) {
      case 101:
        title = 'Short Text Field Settings';
        break;
      case 102:
        title = 'Long Text Field Settings';
        break;
      case 103:
        title = 'Number Field Settings';
        break;
      case 104:
        title = 'Dropdown Settings';
        break;
      case 106:
        title = 'English Date Settings';
        break;
      case 107:
        title = 'Checkbox Field Settings';
        break;
      case 108:
        title = 'Email Settings';
        break;
      case 109:
        title = 'Phone Number Settings';
        break;
      case 110:
        title = 'Hebrew Date Settings';
        break;
      default:
        title = 'Settings';
        break;
    }
    return title;
  }

}
