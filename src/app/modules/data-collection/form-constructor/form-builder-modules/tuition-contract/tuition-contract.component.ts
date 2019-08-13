import {Component, Input, OnInit} from '@angular/core';
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES, TUITION_CONTRACT_SPLIT_TYPES} from "src/app/enums";
import {TuitionContract} from "src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model";

@Component({
  selector: 'app-tuition-contract',
  templateUrl: './tuition-contract.component.html',
  styleUrls: ['./tuition-contract.component.css']
})
export class TuitionContractComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

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
