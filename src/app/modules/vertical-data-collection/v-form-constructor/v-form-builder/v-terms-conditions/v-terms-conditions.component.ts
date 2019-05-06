import {Component, Input, OnInit} from '@angular/core';
import {TermsConditions} from "./model/terms-conditions.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../../enums";

@Component({
  selector: 'app-v-terms-conditions',
  templateUrl: './v-terms-conditions.component.html',
  styleUrls: ['./v-terms-conditions.component.scss']
})
export class VTermsConditionsComponent implements OnInit {
  @Input() termsConditions: TermsConditions;

  sectionName: string = 'Terms and Conditions';
  sectionWidth: string = "4 Columns";

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor() { }

  ngOnInit() {
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }

}
