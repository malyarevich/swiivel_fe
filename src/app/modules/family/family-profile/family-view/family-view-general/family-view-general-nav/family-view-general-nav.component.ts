import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyViewGeneralTab, familyViewGeneralTabs} from '../../../../../../models/family/family-view-general-tabs'
import {Family} from "../../../../../../models/family/family.model";
import {FamilyService} from "../../../../../../services/family/family.service";
import {FamilyQueryParamsService} from "../../../../../../services/family/family-query-params.service";
import {FamilyQueryParams} from "../../../../../../models/family/family-query-params.model";

@Component({
  selector: 'app-family-view-general-nav',
  templateUrl: './family-view-general-nav.component.html',
  styleUrls: ['./family-view-general-nav.component.css']
})
export class FamilyViewGeneralNavComponent implements OnInit {
  @Input() familyId;
  @Output() activeTabEmitter = new EventEmitter<string>();
  @Output() searchQueryEmitter = new EventEmitter<string>();

  familyName: string;

  familyViewGeneralTabs: FamilyViewGeneralTab[] = familyViewGeneralTabs;
  queryParams: FamilyQueryParams;

  showModal: boolean = false;

  constructor(private familyService: FamilyService, private familyQueryParamsService: FamilyQueryParamsService) { }

  ngOnInit() {
    this.getFamilyName();
    this.getActiveTab();
  }

  getFamilyName() {
    this.familyService.family.subscribe((res: Family) => {
      this.familyName = res.name;
    })
  }

  getActiveTab() {
    this.familyQueryParamsService.familyQueryParams.subscribe(params => {
      this.queryParams = {...params};
    })
  }

  setActiveTab(filter) {
    this.familyQueryParamsService.setFilterParams(filter);
  }

  setSearchQuery(query) {
    this.familyQueryParamsService.setQueryParams(query);
  }

  onShowAddFamilyMemberModal() {
    this.showModal = true;
  }

  onCloseAddFamilyMemberModal() {
    this.showModal = false;
  }
}
