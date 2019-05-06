import {Component, Input, OnInit} from '@angular/core';
import {ConsentItemInfo} from "../v-consent/model/consent.model";
import {TermsConditionsItem} from "./model/terms-conditions.model";

@Component({
  selector: 'app-v-terms-conditions',
  templateUrl: './v-terms-conditions.component.html',
  styleUrls: ['./v-terms-conditions.component.css']
})
export class VTermsConditionsComponent implements OnInit {
  @Input() termsConditions: TermsConditionsItem[];

  constructor() { }

  ngOnInit() {
  }

}
