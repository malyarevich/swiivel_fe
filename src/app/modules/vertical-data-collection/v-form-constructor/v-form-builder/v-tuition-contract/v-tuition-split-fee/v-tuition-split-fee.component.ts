import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-split-fee',
  templateUrl: './v-tuition-split-fee.component.html',
  styleUrls: ['./v-tuition-split-fee.component.css']
})
export class VTuitionSplitFeeComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  get totalFees() {
    let total = 0;
    this.tuitionContract.fees.map((fee) => {
      total += fee.isActive ? +fee.amount : 0;
    });
    return total;
  }

  constructor() { }

  ngOnInit() {
  }

}
