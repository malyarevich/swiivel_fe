import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ConsentInfo, consentItemDefault} from "./model/consent.model";
import { replace } from 'lodash'

@Component({
  selector: 'app-v-consent',
  templateUrl: './v-consent.component.html',
  styleUrls: ['./v-consent.component.scss']
})
export class VConsentComponent implements OnInit, AfterViewInit {
  @Input() consentInfo: ConsentInfo[];

  sectionName: string = 'Parent Consent';

  // text = '';
  // textString = 'I {%parent%} allow my child {%student_name%} to play in sport game to {%date%}';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.formatTextStringToHTML();
    if (!this.consentInfo || !this.consentInfo.length) this.consentInfo.push(consentItemDefault);
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
