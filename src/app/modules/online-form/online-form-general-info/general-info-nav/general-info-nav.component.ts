import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {generalSectionsNames} from "../../model/general-info-section-name.model";

@Component({
  selector: 'app-general-info-nav',
  templateUrl: './general-info-nav.component.html',
  styleUrls: ['./general-info-nav.component.css']
})
export class GeneralInfoNavComponent implements OnInit {
  @Output() activeSectionEmitter = new EventEmitter<string>();

  readonly generalSectionsNames = generalSectionsNames;

  activeSection: string = generalSectionsNames.parentsInfo;

  sectionNames = [
    {name: generalSectionsNames.familyInfo, title: 'Family General Info'},
    {name: generalSectionsNames.parentsInfo, title: 'Parents Info'},
    {name: generalSectionsNames.paternalGrandparents, title: 'Paternal Grandparents'},
    {name: generalSectionsNames.maternalGrandparents, title: 'Maternal Grandparents'},
    {name: generalSectionsNames.studentsInfo, title: 'Student(s) Information'},
    {name: generalSectionsNames.lunch, title: 'Lunch'},
    {name: generalSectionsNames.transportation, title: 'Transportation'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.activeSectionEmitter.emit(this.activeSection);
  }

  setActiveSection(sectionName) {
    this.activeSection = sectionName;
    this.activeSectionEmitter.emit(this.activeSection);
  }

}
