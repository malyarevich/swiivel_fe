import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../../../../../models/data-collection/form-constructor/form-builder/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-split-student',
  templateUrl: './tuition-split-student.component.html',
  styleUrls: ['./tuition-split-student.component.css']
})
export class TuitionSplitStudentComponent implements OnInit {
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
