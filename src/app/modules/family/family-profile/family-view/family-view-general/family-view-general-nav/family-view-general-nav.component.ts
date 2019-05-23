import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FamilyViewGeneralTab, familyViewGeneralTabs,} from '../../../models/family-view-general-tabs'
import {Family} from "../../../../../../models/family/family.model";
import {FamilyService} from "../../../../../../services/family/family.service";

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
  activeTab: string;
  searchQuery: string;

  showModal: boolean = false;

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.getFamilyName();
    this.setActiveTab(this.familyViewGeneralTabs[0].name);
  }

  getFamilyName() {
    this.familyService.family.subscribe((res: Family) => {
      this.familyName = res.name;
    })
  }

  setActiveTab(tabName) {
    this.activeTab = tabName;
    this.activeTabEmitter.emit(this.activeTab);
  }

  onShowAddFamilyMemberModal() {
    this.showModal = true;
  }

  onCloseAddFamilyMemberModal() {
    this.showModal = false;
  }

  setSearchQuery(query) {
    this.searchQueryEmitter.emit(query);
  }
}
