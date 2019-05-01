import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ConsentItemInfo} from "./model/consent.model";
import {replace, cloneDeep} from 'lodash';
import {uuid} from 'uuid';

@Component({
  selector: 'app-v-consent',
  templateUrl: './v-consent.component.html',
  styleUrls: ['./v-consent.component.scss']
})
export class VConsentComponent implements OnInit, AfterViewInit {
  @Input() consents: ConsentItemInfo[];

  sectionName: string = 'Parent Consent';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.formatTextStringToHTML();
    // if (!this.consents || !this.consents.length) {
    //   let consentItem = cloneDeep(consentItemDefault);
    //   consentItem.id = uuid();
    //   console.log(consentItem);
    //   this.consents.push(consentItem);
    // }
  }

  // formatTextStringToHTML() {
  //
  //   this.text = replace(this.textString, '{%student_name%}', '<span class="app-consent-var">Students Name</span>');
  //   this.text = replace(this.text, '{%parent%}', '<span class="app-consent-var">Parent</span>');
  //   this.text = replace(this.text, '{%date%}', '<span class="app-consent-var">Date</span>');
  // }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    let success = document.execCommand(name, showUi, value);
  }
}
