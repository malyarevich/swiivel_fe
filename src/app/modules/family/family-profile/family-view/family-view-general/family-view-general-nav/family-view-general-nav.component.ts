import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FamilyViewGeneralTab, familyViewGeneralTabs,} from '../../../models/family-view-general-tabs'
@Component({
  selector: 'app-family-view-general-nav',
  templateUrl: './family-view-general-nav.component.html',
  styleUrls: ['./family-view-general-nav.component.css']
})
export class FamilyViewGeneralNavComponent implements OnInit {
  @Output() activeTabEmitter = new EventEmitter<string>();
  @Output() searchQueryEmitter = new EventEmitter<string>();

  familyViewGeneralTabs: FamilyViewGeneralTab[] = familyViewGeneralTabs;
  activeTab: string;
  searchQuery: string;

  showModal: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setActiveTab(this.familyViewGeneralTabs[0].name);
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
