import {Component, Input, OnInit} from '@angular/core';
import {TuitionContract} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";

@Component({
  selector: 'app-tuition-contract-by-student',
  templateUrl: './tuition-contract-by-student.component.html',
  styleUrls: ['./tuition-contract-by-student.component.css']
})
export class TuitionContractByStudentComponent implements OnInit {
  @Input() tuitionContract: TuitionContract;

  constructor() {
  }

  ngOnInit() {
  }

}
