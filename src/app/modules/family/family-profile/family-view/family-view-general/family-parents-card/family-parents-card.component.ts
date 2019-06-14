import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {FamilyRoles} from "../../../../../../enums/family-roles";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-family-parents-card',
  templateUrl: './family-parents-card.component.html',
  styleUrls: ['./family-parents-card.component.css']
})
export class FamilyParentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  familyRoles = FamilyRoles;

  get fullNameWithMiddle() {
    return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
  }

  get getAvatarUrl() {
    return environment.avatarUrl + this.familyPerson.person.avatar;
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
