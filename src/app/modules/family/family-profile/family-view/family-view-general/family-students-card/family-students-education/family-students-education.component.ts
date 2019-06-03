import {Component, Input, OnInit} from '@angular/core';
import {StudentInfo} from "../../../../../../../models/family/student-info.model";

@Component({
  selector: 'app-family-students-education',
  templateUrl: './family-students-education.component.html',
  styleUrls: ['./family-students-education.component.css']
})
export class FamilyStudentsEducationComponent implements OnInit {
  @Input() studentInfo: StudentInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
