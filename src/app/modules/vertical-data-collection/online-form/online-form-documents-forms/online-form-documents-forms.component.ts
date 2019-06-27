import { Component, Input, OnInit } from "@angular/core";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";

@Component({
  selector: "app-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  
  navContent: object = [
    {
      id: "documents",
      title: "Documents for Parents"
    },
    {
      id: "pdf-forms",
      title: "School Forms"
    }
  ];

  activeId: string = "documents";

  constructor() {}

  ngOnInit() {
    // console.log(this.form);
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.documentsForms).time;
  }

  logWhatIWant() {
    console.log(this.form.forms[0].form);
  }

  onActive(id: string) {
    this.activeId = id;
  }
}
