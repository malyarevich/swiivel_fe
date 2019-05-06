import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "./models/tuition-contract.model";

@Component({
  selector: 'app-v-tuition-contract',
  templateUrl: './v-tuition-contract.component.html',
  styleUrls: ['./v-tuition-contract.component.css']
})
export class VTuitionContractComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  sectionName: string = 'Tuition Contract';
  sectionWidth: string = "4 Columns";

  isBold: boolean;
  isItalic: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
