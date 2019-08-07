import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {replace, cloneDeep} from 'lodash';
import {uuid} from 'uuid';

import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../../enums";
import {
  ConsentInfo,
  ConsentItemInfo
} from "../../../../../models/data-collection/form-constructor/form-builder/consent.model";
import { ICommand } from 'src/app/models/data-collection/form-constructor/form-builder/component.model';
import {Section} from "../../../../../models/data-collection/section.model";

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit, AfterViewInit {
  @Input() consentInfo: ConsentInfo;

  isExpand: boolean = true;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

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

  onSetCommand(command: ICommand) {
    this.setCommand(command.name, command.showUi, command.value);
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    let success = document.execCommand(name, showUi, value);
  }

  changeSectionName(sectionName: string) {
    this.consentInfo.sectionName = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.consentInfo.sectionWidth = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }
}
