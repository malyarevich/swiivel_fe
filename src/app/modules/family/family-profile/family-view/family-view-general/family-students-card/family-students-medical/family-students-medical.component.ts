import {Component, Input, OnInit} from '@angular/core';
import {StudentInfo} from "../../../../../../../models/family/student-info.model";

@Component({
  selector: 'app-family-students-medical',
  templateUrl: './family-students-medical.component.html',
  styleUrls: ['./family-students-medical.component.css']
})
export class FamilyStudentsMedicalComponent implements OnInit {
  @Input() studentInfo: StudentInfo;

  constructor() { }

  ngOnInit() {
  }

}
