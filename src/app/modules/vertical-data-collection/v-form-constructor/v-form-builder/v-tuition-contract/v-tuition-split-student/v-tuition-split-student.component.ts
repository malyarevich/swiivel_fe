import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../models/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-split-student',
  templateUrl: './v-tuition-split-student.component.html',
  styleUrls: ['./v-tuition-split-student.component.css']
})
export class VTuitionSplitStudentComponent implements OnInit {
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
