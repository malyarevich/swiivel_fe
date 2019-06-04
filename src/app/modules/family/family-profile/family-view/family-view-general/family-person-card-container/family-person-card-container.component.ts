import {Component, Input, OnInit} from '@angular/core';
import {FamilyPerson} from "../../../../../../models/family/family-person.model";
import {HelperFamilyService} from "../../../../../../services/family/helper-family.service";
import {FamilyRoles} from "../../../../../../enums/family-roles";

@Component({
  selector: 'app-family-person-card-container',
  templateUrl: './family-person-card-container.component.html',
  styleUrls: ['./family-person-card-container.component.css']
})
export class FamilyPersonCardContainerComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  showRemoveModal: boolean = false;

  familyRoles = FamilyRoles;

  get fullName() {
    return this.helperFamilyService.getFullName(this.familyPerson);
  }

  constructor(private helperFamilyService: HelperFamilyService) {
  }

  ngOnInit() {
  }

  onCloseRemoveModal(value) {
    this.showRemoveModal = !value;
  }

}
