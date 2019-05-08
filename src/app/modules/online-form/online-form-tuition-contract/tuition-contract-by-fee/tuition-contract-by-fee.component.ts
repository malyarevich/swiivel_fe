import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";

@Component({
  selector: 'app-tuition-contract-by-fee',
  templateUrl: './tuition-contract-by-fee.component.html',
  styleUrls: ['./tuition-contract-by-fee.component.css']
})
export class TuitionContractByFeeComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  constructor() { }

  ngOnInit() {
  }

}
