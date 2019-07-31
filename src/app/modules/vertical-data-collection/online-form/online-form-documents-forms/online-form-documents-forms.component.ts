import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

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
        this.activeSectionId = newActiveSectionId;
      }
    );
    // TODO: count percent
    this.percent = 0;
    this.onSetPercent.emit(this.percent);
  }

  initSections() {
    if (this.form.documentsForms) {
      this.sections = Object.values(this.form.documentsForms).map(item => {
        return { _id: item.sectionName, name: item.sectionName };
      });
    } else {
      this.sections = [{ _id: "documentsForms", name: "Documents & Forms" }];
    }
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.documentsForms
    ).time;
  }
}
