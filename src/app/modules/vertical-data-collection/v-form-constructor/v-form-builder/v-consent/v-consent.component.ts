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

  text = '';
  textString = 'I {%parent%} allow my child {%student_name%} to play in sport game to {%date%}';

  constructor() {
  }

  ngOnInit() {
    if (!this.consentInfo.length) this.consentInfo.push(consentItemDefault);
  }

  ngAfterViewInit() {
    // this.formatTextStringToHTML();
  }

  formatTextStringToHTML() {

    this.text = replace(this.textString, '{%student_name%}', '<span class="app-consent-var">Students Name</span>');
    this.text = replace(this.text, '{%parent%}', '<span class="app-consent-var">Parent</span>');
    this.text = replace(this.text, '{%date%}', '<span class="app-consent-var">Date</span>');
  }

}
