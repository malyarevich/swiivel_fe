import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-conditions-review',
  templateUrl: './conditions-review.component.html',
  styleUrls: ['./conditions-review.component.scss']
})
export class ConditionsReviewComponent implements OnInit {

  isFamilyInfo: boolean = false;
  isParentInfo: boolean = false;
  isStudentInfo: boolean = true;
  isMedicalInfo: boolean = false;
  isSchoolFeeInfo: boolean = false;
  isPaymentInfo: boolean = false;

  isFieldLogic: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
