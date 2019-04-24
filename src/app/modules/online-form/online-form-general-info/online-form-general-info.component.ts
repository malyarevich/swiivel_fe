import { Component, OnInit } from '@angular/core';
import {generalSectionsNames} from "../models/general-info-section-name.model";

@Component({
  selector: 'app-online-form-general-info',
  templateUrl: './online-form-general-info.component.html',
  styleUrls: ['./online-form-general-info.component.css']
})
export class OnlineFormGeneralInfoComponent implements OnInit {

  activeSection: string;

  readonly generalSectionsNames = generalSectionsNames;

  constructor() { }

  ngOnInit() {
  }

  onActiveSection(sectionName) {
    this.activeSection = sectionName;
  }
}
