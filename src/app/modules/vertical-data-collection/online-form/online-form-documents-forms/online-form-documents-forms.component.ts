import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
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
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

  percent: number;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  
  navContent: object = [
    {
      id: "documents",
      title: "Documents for Parents"
    },
    {
      id: "pdf-forms",
      title: "External Forms"
    }
  ];

  activeId: string = "documents";

  constructor() {}

  ngOnInit() {
    // console.log(this.form);
    // TODO: count percent
    this.percent = 0;
    this.onSetPercent.emit(this.percent)
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.documentsForms).time;
  }

  onActive(id: string) {
    this.activeId = id;
  }
}
