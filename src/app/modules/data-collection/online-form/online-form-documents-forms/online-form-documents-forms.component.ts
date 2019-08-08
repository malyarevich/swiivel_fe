import { Component, Input, OnInit } from "@angular/core";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "src/app/models/data-collection/form-constructor/online-form/menu-items";
import { Form } from "src/app/models/data-collection/form.model";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;

  percent: number;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  //TODO: Remove this hard code use to solve filter/forEach/map for section (type = 114)
  //look at general-info for more understanding
  // sections: object[] = [
  //   {
  //     _id: 'documents',
  //     name: 'Documents for Parents'
  //   },
  //   {
  //     _id: 'pdf-forms',
  //     name: 'External Forms'
  //   }
  // ];
  sections: object[];

  activeSectionId: string;

  constructor(
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe(
      newActiveSectionId => {
        //TODO: go to behaviorSubjects
        this.activeSectionId = newActiveSectionId;
      }
    );
    // TODO: count percent
    this.setPercent(0);
  }

  initSections() {
    if (this.form.documentsForms) {
      this.sections = Object.values(this.form.documentsForms).map(item => {
        return { _id: item.sectionName, name: item.sectionName };
      });
    } else {
      this.sections = [{ _id: "documentsForms", name: "Documents & Forms" }];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(
      mainMenuNames.documentsForms,
      this.sections
    );
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(
      mainMenuNames.documentsForms,
      percent
    );
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.documentsForms
    ).time;
  }
}
