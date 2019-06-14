import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-family-grandparents-card',
  templateUrl: './family-grandparents-card.component.html',
  styleUrls: ['./family-grandparents-card.component.css']
})
export class FamilyGrandparentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  get fullNameWithMiddle() {
    return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
  }

  get fullAddress() {
    return this.helperFamilyService.getFullPersonFamilyAddress(this.familyPerson);
  }

  get getAvatarUrl() {
    return environment.avatarUrl + this.familyPerson.person.avatar;
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
