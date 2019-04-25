import {Component, Input, OnInit} from '@angular/core';
import {generalSectionsNames} from "../model/general-info-section-name.model";
import {Form} from "../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-form-general-info',
  templateUrl: './online-form-general-info.component.html',
  styleUrls: ['./online-form-general-info.component.css']
})
export class OnlineFormGeneralInfoComponent implements OnInit {
  @Input() form: Form;

  activeSection: string;

  readonly generalSectionsNames = generalSectionsNames;

  constructor() {
  }

  ngOnInit() {
  }

  onActiveSection(sectionName) {
    this.activeSection = sectionName;
  }
}
