import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {familyViewSections} from '../../models/family-view-sections'

@Component({
  selector: 'app-family-view-nav',
  templateUrl: './family-view-nav.component.html',
  styleUrls: ['./family-view-nav.component.css']
})
export class FamilyViewNavComponent implements OnInit {
  @Output() activeViewSectionEmitter = new EventEmitter<string>();

  familyViewSections = familyViewSections;
  activeSection: string;

  constructor() { }

  ngOnInit() {
    this.setActiveSection(this.familyViewSections[0].name);
  }

  setActiveSection(sectionName) {
    this.activeSection = sectionName;
    this.activeViewSectionEmitter.emit(this.activeSection);
  }

}
