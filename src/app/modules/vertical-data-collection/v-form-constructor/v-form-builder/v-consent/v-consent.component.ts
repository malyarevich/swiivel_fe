import {Component, Input, OnInit} from '@angular/core';
import {ConsentInfo} from "./model/consent.model";

@Component({
  selector: 'app-v-consent',
  templateUrl: './v-consent.component.html',
  styleUrls: ['./v-consent.component.css']
})
export class VConsentComponent implements OnInit {
  @Input() consentInfo: ConsentInfo[];

  sectionName: string = 'Parent Consent';

  constructor() {
  }

  ngOnInit() {
  }

}
