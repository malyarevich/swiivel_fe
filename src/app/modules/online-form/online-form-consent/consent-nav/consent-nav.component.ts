import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsentItemInfo} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/consent.model";

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
    if(this.consents.length) this.setActiveConsentId(this.consents[0].id);
  }

  setActiveConsentId(id) {
    this.activeConsentId = id;
    this.activeConsentEmitter.emit(this.activeConsentId);
  }
}
