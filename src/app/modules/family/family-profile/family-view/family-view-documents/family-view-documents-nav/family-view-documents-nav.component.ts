import { Component, OnInit } from '@angular/core';
import {FamilyQueryParamsService} from "../../../../../../services/family/family-query-params.service";

@Component({
  selector: 'app-family-view-documents-nav',
  templateUrl: './family-view-documents-nav.component.html',
  styleUrls: ['./family-view-documents-nav.component.css']
})
export class FamilyViewDocumentsNavComponent implements OnInit {

  constructor(private familyQueryParamsService: FamilyQueryParamsService) { }

  ngOnInit() {
  }

  setSearchQuery(query) {
    this.familyQueryParamsService.setQueryParams(query);
  }

}
