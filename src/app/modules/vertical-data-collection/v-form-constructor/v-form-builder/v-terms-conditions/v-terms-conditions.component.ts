import {Component, Input, OnInit} from '@angular/core';
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../../enums";
import {TermsConditions} from "../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/terms-conditions.model";

@Component({
  selector: 'app-v-terms-conditions',
  templateUrl: './v-terms-conditions.component.html',
  styleUrls: ['./v-terms-conditions.component.scss']
})
export class VTermsConditionsComponent implements OnInit {
  @Input() termsConditions: TermsConditions;

  isExpand: boolean = true;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor() { }

  ngOnInit() {
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }

  changeSectionName(sectionName: string) {
    this.termsConditions.sectionName = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.termsConditions.sectionWidth = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }

}
