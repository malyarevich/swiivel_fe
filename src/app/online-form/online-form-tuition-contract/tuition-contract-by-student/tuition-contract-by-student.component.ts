import {Component, Input, OnInit} from '@angular/core';
// import {TuitionContract} from "../../../../../models/data-collection/form-constructor/form-builder/tuition-contract.model";

@Component({
  selector: 'sw-tuition-contract-by-student',
  templateUrl: './tuition-contract-by-student.component.html',
  styleUrls: ['./tuition-contract-by-student.component.scss']
})
export class TuitionContractByStudentComponent implements OnInit {
  @Input() tuitionContract: any;

  constructor() {
  }

  ngOnInit() {
  }

}
