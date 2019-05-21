import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";

@Component({
  selector: 'app-family-children-card',
  templateUrl: './family-children-card.component.html',
  styleUrls: ['./family-children-card.component.css']
})
export class FamilyChildrenCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  constructor() { }

  ngOnInit() {
  }

}
