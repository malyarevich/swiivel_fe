import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-children-card',
  templateUrl: './family-children-card.component.html',
  styleUrls: ['./family-children-card.component.css']
})
export class FamilyChildrenCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

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

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
