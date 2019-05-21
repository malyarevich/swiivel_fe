import {Component, Input, OnInit} from '@angular/core';
import {FamilyPersonService} from "../../../services/family-person.service";
import {FamilyPerson} from "../../../../../models/family/family-person.model";
import {Observable} from "rxjs";
import {FamilyRoles} from "../../../../../enums/family-roles";

@Component({
  selector: 'app-family-view-general',
  templateUrl: './family-view-general.component.html',
  styleUrls: ['./family-view-general.component.css']
})
export class FamilyViewGeneralComponent implements OnInit {
  @Input() familyId: string;

  familyPersons: Observable<FamilyPerson[]>;

  familyRoles = FamilyRoles;

  constructor(private familyPersonService: FamilyPersonService) {
  }

  ngOnInit() {
    this.getFamilyPersons();
  }

  getFamilyPersons() {
    this.familyPersons = this.familyPersonService.familyPersonList;
    this.familyPersonService.getByFamilyId(this.familyId);
  }
}
