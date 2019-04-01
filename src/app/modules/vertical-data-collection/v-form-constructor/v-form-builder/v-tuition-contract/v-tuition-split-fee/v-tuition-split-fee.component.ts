import {Component, Input, OnInit} from '@angular/core';
import {ShowFeeModel} from "../models/show-fee.model";

@Component({
  selector: 'app-v-tuition-split-fee',
  templateUrl: './v-tuition-split-fee.component.html',
  styleUrls: ['./v-tuition-split-fee.component.css']
})
export class VTuitionSplitFeeComponent implements OnInit {
  @Input() showFee: ShowFeeModel;

  constructor() { }

  ngOnInit() {
  }

}
