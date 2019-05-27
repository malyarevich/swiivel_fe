import {Component, Input, OnInit} from '@angular/core';
import {FamilyPersonService} from "../../../../../services/family/family-person.service";
import {FamilyPerson} from "../../../../../models/family/family-person.model";
import {Observable} from "rxjs";
import {FamilyRoles} from "../../../../../enums/family-roles";
import {FAMILY_VIEW_GENERAL_TABS} from "../../models/family-view-general-tabs";
import {LoaderService} from "../../../../../services/loader/loader.service";

@Component({
  selector: 'app-family-view-general',
  templateUrl: './family-view-general.component.html',
  styleUrls: ['./family-view-general.component.css']
})
export class FamilyViewGeneralComponent implements OnInit {
  @Input() familyId: string;

  familySearchTab = FAMILY_VIEW_GENERAL_TABS;
  familyPersons: Observable<FamilyPerson[]>;
  familyRoles = FamilyRoles;
  public loader$: Observable <boolean>;

  params = {
    filter: '',
    query: '',
  };

  constructor(private familyPersonService: FamilyPersonService, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.getFamilyPersons(this.params);
  }

  getFamilyPersons(params) {
    this.familyPersons = this.familyPersonService.familyPersonList;
    this.familyPersonService.getByFamilyId(this.familyId, params);
  }

  onSetFilterTab(filter) {
    this.params.filter = filter;
    this.getFamilyPersons(this.params);
  }

  onSetSearchQuery(query) {
    this.params.query = query;
    this.getFamilyPersons(this.params);
  }
}
