import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../vertical-data-collection/v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
import {TUITION_CONTRACT_SPLIT_TYPES} from "../../../enums";

@Component({
  selector: 'app-online-form-tuition-contract',
  templateUrl: './online-form-tuition-contract.component.html',
  styleUrls: ['./online-form-tuition-contract.component.css']
})
export class OnlineFormTuitionContractComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;

  constructor() {
  }

  ngOnInit() {
  }

}
