import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../models/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-split-fee',
  templateUrl: './v-tuition-split-fee.component.html',
  styleUrls: ['./v-tuition-split-fee.component.css']
})
export class VTuitionSplitFeeComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  tempFees = [1600, 1080, 1080, 9840, 3200, 3200];

  constructor() { }

  ngOnInit() {
  }

}
