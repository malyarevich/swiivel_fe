import {Component, Input, OnInit} from '@angular/core';
import {StudentInfo} from "../../../../../../../models/family/student-info.model";

@Component({
  selector: 'app-family-students-second-contact',
  templateUrl: './family-students-second-contact.component.html',
  styleUrls: ['./family-students-second-contact.component.css']
})
export class FamilyStudentsSecondContactComponent implements OnInit {
  @Input() studentInfo: StudentInfo;

  constructor() { }

  ngOnInit() {
  }

}
