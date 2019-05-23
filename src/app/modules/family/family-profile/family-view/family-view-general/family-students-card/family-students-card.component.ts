import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";

@Component({
  selector: 'app-family-students-card',
  templateUrl: './family-students-card.component.html',
  styleUrls: ['./family-students-card.component.css']
})
export class FamilyStudentsCardComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;

  activeTab: string = 'education';

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
