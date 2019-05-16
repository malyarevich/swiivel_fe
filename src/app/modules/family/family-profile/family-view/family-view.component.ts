import { Component, OnInit } from '@angular/core';
import {FAMILY_VIEW_SECTIONS} from "../models/family-view-sections";

@Component({
  selector: 'app-family-view',
  templateUrl: './family-view.component.html',
  styleUrls: ['./family-view.component.css']
})
export class FamilyViewComponent implements OnInit {

  activeSection: string;
  FAMILY_VIEW_SECTIONS = FAMILY_VIEW_SECTIONS;

  constructor() { }

  ngOnInit() {
  }

  setActiveSection(sectionName) {
    this.activeSection = sectionName;
  }

}
