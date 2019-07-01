import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FamilyPersonService} from "../../../../../services/family/family-person.service";
import {FamilyPerson} from "../../../../../models/family/family-person.model";
import {Observable, Subscription} from "rxjs";
import {FamilyRoles} from "../../../../../enums/family-roles";
import {FAMILY_VIEW_GENERAL_TABS} from "../../../../../models/family/family-view-general-tabs";
import {LoaderService} from "../../../../../services/loader/loader.service";
import {FamilyQueryParamsService} from "../../../../../services/family/family-query-params.service";
import {FamilyQueryParams} from "../../../../../models/family/family-query-params.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-family-view-general',
  templateUrl: './family-view-general.component.html',
  styleUrls: ['./family-view-general.component.css']
})
export class FamilyViewGeneralComponent implements OnInit, OnDestroy {
  @Input() familyId: string;

  familySearchTab = FAMILY_VIEW_GENERAL_TABS;
  familyPersons: Observable<FamilyPerson[]>;
  familyRoles = FamilyRoles;

  queryParamsChange: Subscription;
  public loader$: Observable <boolean>;

  constructor(private familyPersonService: FamilyPersonService,
              private loaderService: LoaderService,
              private familyQueryParamsService: FamilyQueryParamsService) {
  }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.searchFamilyPerson();
  }

  searchFamilyPerson() {
    this.queryParamsChange = this.getQueryParams().subscribe((params: FamilyQueryParams) => {
      this.getFamilyPersons(params)
    })
  }

  getQueryParams() {
    return this.familyQueryParamsService.familyQueryParams;
  }

  getFamilyPersons(params) {
    this.familyPersonService.getByFamilyId(this.familyId, params);
    this.familyPersons = this.familyPersonService.familyPersonList;
  }

  ngOnDestroy() {
    this.queryParamsChange.unsubscribe();
  }
}
