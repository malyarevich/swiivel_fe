import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../../models/family/family-person.model";

@Component({
  selector: 'app-family-edit-child',
  templateUrl: './family-edit-child.component.html',
  styleUrls: ['./family-edit-child.component.css']
})
export class FamilyEditChildComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  constructor() { }

  ngOnInit() {
  }

}
