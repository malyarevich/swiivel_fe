import {Component, Input, OnInit} from '@angular/core';
import {ShowFeeDiscountsModel, ShowFeeModel} from "../models/show-fee.model";

@Component({
  selector: 'app-v-tuition-split-student',
  templateUrl: './v-tuition-split-student.component.html',
  styleUrls: ['./v-tuition-split-student.component.css']
})
export class VTuitionSplitStudentComponent implements OnInit {
  @Input() showFee: ShowFeeModel;
  @Input() showFeeDiscounts: ShowFeeDiscountsModel;

  constructor() { }

  ngOnInit() {
  }

}
