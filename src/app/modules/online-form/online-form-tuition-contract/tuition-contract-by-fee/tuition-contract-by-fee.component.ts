import {Component, Input, OnInit} from '@angular/core';
// import {TuitionContract} from "../../../../../models/data-collection/form-constructor/form-builder/tuition-contract.model";

@Component({
  selector: 'sw-tuition-contract-by-fee',
  templateUrl: './tuition-contract-by-fee.component.html',
  styleUrls: ['./tuition-contract-by-fee.component.scss']
})
export class TuitionContractByFeeComponent implements OnInit {
  @Input() tuitionContract: any;

  tempFees = [1600, 1080, 1080, 9840, 3200, 3200];

  constructor() { }

  ngOnInit() {
  }

}
