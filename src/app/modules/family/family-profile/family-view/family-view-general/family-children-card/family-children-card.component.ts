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
