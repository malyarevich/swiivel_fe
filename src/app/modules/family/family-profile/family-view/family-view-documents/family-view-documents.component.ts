import {Component, Input, OnInit} from '@angular/core';
import {Family} from "../../../../../models/family/family.model";
import {FamilyService} from "../../../../../services/family/family.service";
import {FamilyQueryParamsService} from "../../../../../services/family/family-query-params.service";
import {FamilyQueryParams} from "../../../../../models/family/family-query-params.model";

@Component({
  selector: 'app-family-view-documents',
  templateUrl: './family-view-documents.component.html',
  styleUrls: ['./family-view-documents.component.css']
})
export class FamilyViewDocumentsComponent implements OnInit {
  @Input() familyId: string;
  familyName: string;
  queryParams: FamilyQueryParams;

  constructor(private familyService: FamilyService,
              private familyQueryParamsService: FamilyQueryParamsService) {
  }

  ngOnInit() {
    this.getFamilyName();
    this.initQueryParams();
  }

  initQueryParams() {
    this.familyQueryParamsService.familyQueryParams.subscribe(params => {
      this.queryParams = {...params};
    })
  }

  getFamilyName() {
    this.familyService.family.subscribe((res: Family) => {
      this.familyName = res.name;
    })
  }

  setSearchQuery(query) {
    this.familyQueryParamsService.setQueryParams(query);
  }

}
