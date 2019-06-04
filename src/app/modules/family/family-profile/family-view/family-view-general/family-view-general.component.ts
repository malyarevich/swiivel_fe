import {Component, Input, OnInit} from '@angular/core';
import {FamilyPersonService} from "../../../../../services/family/family-person.service";
import {FamilyPerson} from "../../../../../models/family/family-person.model";
import {Observable} from "rxjs";
import {FamilyRoles} from "../../../../../enums/family-roles";
import {FAMILY_VIEW_GENERAL_TABS} from "../../models/family-view-general-tabs";
import {LoaderService} from "../../../../../services/loader/loader.service";
import {FamilyQueryParamsService} from "../../../../../services/family/family-query-params.service";
import {FamilyQueryParams} from "../../../../../models/family/family-query-params.model";

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

  params: FamilyQueryParams;

  constructor(private familyPersonService: FamilyPersonService,
              private loaderService: LoaderService,
              private familyQueryParamsService: FamilyQueryParamsService) {
  }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.getQueryParams();
    this.getFamilyPersons();
  }

  getQueryParams() {
    this.familyQueryParamsService.familyQueryParams.subscribe(params => this.params = {...params});
  }

  getFamilyPersons(params?) {
    this.familyPersons = this.familyPersonService.familyPersonList;
    this.familyPersonService.getByFamilyId(this.familyId, params);
  }

  onSetFilterTab(filter) {
    this.familyQueryParamsService.setFilterParams(filter);
    this.getFamilyPersons(this.params);
  }

  onSetSearchQuery(query) {
    this.familyQueryParamsService.setQueryParams(query);
    this.getFamilyPersons(this.params);
  }
}
