import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-parent-sibling-card',
  templateUrl: './family-parent-sibling-card.component.html',
  styleUrls: ['./family-parent-sibling-card.component.css']
})
export class FamilyParentSiblingCardComponent implements OnInit {

  @Input() familyPerson: FamilyPerson;

  get fullNameWithMiddle() {
    return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
  }

  constructor(private helperFamilyService: HelperFamilyService) { }

  ngOnInit() {
  }

}
