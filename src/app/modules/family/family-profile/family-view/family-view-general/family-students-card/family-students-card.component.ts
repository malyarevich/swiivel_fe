import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";

@Component({
  selector: 'app-family-students-card',
  templateUrl: './family-students-card.component.html',
  styleUrls: ['./family-students-card.component.css']
})
export class FamilyStudentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  activeTab: string = 'education';

  constructor() { }

  ngOnInit() {
  }

}
