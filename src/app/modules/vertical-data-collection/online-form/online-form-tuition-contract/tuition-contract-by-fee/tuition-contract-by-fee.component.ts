import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../../v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";

@Component({
  selector: 'app-tuition-contract-by-fee',
  templateUrl: './tuition-contract-by-fee.component.html',
  styleUrls: ['./tuition-contract-by-fee.component.scss']
})
export class TuitionContractByFeeComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  tempFees = [1600, 1080, 1080, 9840, 3200, 3200];

  constructor() { }

  ngOnInit() {
  }

}
