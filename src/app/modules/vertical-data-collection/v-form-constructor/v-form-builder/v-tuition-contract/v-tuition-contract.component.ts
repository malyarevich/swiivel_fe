import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "./models/tuition-contract.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES, TUITION_CONTRACT_SPLIT_TYPES} from "../../../../../enums";

@Component({
  selector: 'app-v-tuition-contract',
  templateUrl: './v-tuition-contract.component.html',
  styleUrls: ['./v-tuition-contract.component.css']
})
export class VTuitionContractComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  sectionName: string = 'Tuition Contract';
  sectionWidth: string = "4 Columns";

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  isBold: boolean;
  isItalic: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
