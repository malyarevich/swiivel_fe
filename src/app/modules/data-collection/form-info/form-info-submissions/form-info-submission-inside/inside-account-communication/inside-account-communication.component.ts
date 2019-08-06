import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-inside-account-communication',
  templateUrl: './inside-account-communication.component.html',
  styleUrls: ['./inside-account-communication.component.css']
})
export class InsideAccountCommunicationComponent implements OnInit {

  activeTab: string = 'sms';

  constructor() { }

  ngOnInit() {
  }

  onActiveTab(value) {
    this.activeTab = value;
  }

}
