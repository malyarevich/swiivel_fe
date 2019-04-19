import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-inside-account-communication',
  templateUrl: './v-inside-account-communication.component.html',
  styleUrls: ['./v-inside-account-communication.component.css']
})
export class VInsideAccountCommunicationComponent implements OnInit {

  activeTab: string = 'sms';

  constructor() { }

  ngOnInit() {
  }

  onActiveTab(value) {
    this.activeTab = value;
  }

}
