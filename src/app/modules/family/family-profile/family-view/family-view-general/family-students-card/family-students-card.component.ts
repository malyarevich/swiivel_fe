import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-family-students-card',
  templateUrl: './family-students-card.component.html',
  styleUrls: ['./family-students-card.component.css']
})
export class FamilyStudentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  activeTab: string = 'education';

  get fullNameWithMiddle() {
    return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
  }

  get getFatherFullName() {
    let father = this.familyPerson.parents.find((item) => item.person_role === 'father');
    return this.helperFamilyService.getFullName(father);
  }

  get getMotherFullName() {
    let mother = this.familyPerson.parents.find((item) => item.person_role === 'mother');
    return this.helperFamilyService.getFullName(mother);
  }

  get getAvatarUrl() {
    return environment.avatarUrl + this.familyPerson.person.avatar;
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
