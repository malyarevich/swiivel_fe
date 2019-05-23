import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../enums/family-roles";
import {HelperFamilyService} from "../../../../services/helper-family.service";

@Component({
  selector: 'app-family-parents-card',
  templateUrl: './family-parents-card.component.html',
  styleUrls: ['./family-parents-card.component.css']
})
export class FamilyParentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  familyRoles = FamilyRoles;

  get fullName() {
    return this.helperFamilyService.getFullName(this.familyPerson);
  }

  get fullNameWithMiddle() {
    return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
