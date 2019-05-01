import {Component, Input, OnInit} from '@angular/core';
import {ConsentInfo} from "../../vertical-data-collection/v-form-constructor/v-form-builder/v-consent/model/consent.model";

@Component({
  selector: 'app-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.css']
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() consentInfo: ConsentInfo;

  activeConsentId: string;

  constructor() {
  }

  ngOnInit() {
  }

  onActiveConsent(id) {
    this.activeConsentId = id;
  }

}
