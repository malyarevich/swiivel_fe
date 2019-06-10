import {Component, Input, OnInit} from '@angular/core';
import {FamilyQueryParamsService} from "../../../../../../services/family/family-query-params.service";
import {FamilyQueryParams} from "../../../../../../models/family/family-query-params.model";

@Component({
  selector: 'app-family-view-documents-nav',
  templateUrl: './family-view-documents-nav.component.html',
  styleUrls: ['./family-view-documents-nav.component.css']
})
export class FamilyViewDocumentsNavComponent implements OnInit {
  @Input() familyName: string;
  queryParams: FamilyQueryParams;

  constructor(private familyQueryParamsService: FamilyQueryParamsService) { }

  ngOnInit() {
    this.initQueryParams();
  }

  initQueryParams() {
    this.familyQueryParamsService.familyQueryParams.subscribe(params => {
      this.queryParams = {...params};
    })
  }

  setSearchQuery(query) {
    this.familyQueryParamsService.setQueryParams(query);
  }

}
