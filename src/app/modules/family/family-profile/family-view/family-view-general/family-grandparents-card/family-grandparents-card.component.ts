import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-grandparents-card',
  templateUrl: './family-grandparents-card.component.html',
  styleUrls: ['./family-grandparents-card.component.css']
})
export class FamilyGrandparentsCardComponent implements OnInit {
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
