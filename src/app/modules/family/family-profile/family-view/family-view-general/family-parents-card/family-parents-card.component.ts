import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-parents-card',
  templateUrl: './family-parents-card.component.html',
  styleUrls: ['./family-parents-card.component.css']
})
export class FamilyParentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  famylyRoles = FamilyRoles;

  constructor() { }

  ngOnInit() {
  }

}
