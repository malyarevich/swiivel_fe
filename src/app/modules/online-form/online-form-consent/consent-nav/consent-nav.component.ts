import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsentItemInfo} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-consent/model/consent.model";

@Component({
  selector: 'app-consent-nav',
  templateUrl: './consent-nav.component.html',
  styleUrls: ['./consent-nav.component.css']
})
export class ConsentNavComponent implements OnInit {
  @Input() consents: ConsentItemInfo[];
  @Output() activeConsentEmitter = new EventEmitter<string>();

  activeConsentId: string;

  constructor() {
  }

  ngOnInit() {
    this.activeConsentId = this.consents[0].id;
    this.activeConsentEmitter.emit(this.activeConsentId);
  }

  setActiveConsentId(id) {
    this.activeConsentId = id;
    this.activeConsentEmitter.emit(this.activeConsentId);
  }
}
