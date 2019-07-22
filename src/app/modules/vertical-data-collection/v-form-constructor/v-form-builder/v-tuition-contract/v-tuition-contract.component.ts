import {Component, Input, OnInit} from '@angular/core';
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES, TUITION_CONTRACT_SPLIT_TYPES} from "../../../../../enums";
import {TuitionContract} from "../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-contract',
  templateUrl: './v-tuition-contract.component.html',
  styleUrls: ['./v-tuition-contract.component.css']
})
export class VTuitionContractComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  // sectionName: string = 'Tuition Contract';
  // sectionWidth: string = "4 Columns";
  isExpand: boolean = true;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor() {
  }

  ngOnInit() {
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }

  changeSectionName(sectionName: string) {
    this.tuitionContract.sectionName = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.tuitionContract.sectionWidth = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }

}
