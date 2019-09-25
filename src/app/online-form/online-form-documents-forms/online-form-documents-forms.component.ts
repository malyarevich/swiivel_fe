import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";
import { Form } from "@app/models/data-collection/form";

@Component({
  selector: "sw-online-form-documents-forms",
  templateUrl: "./online-form-documents-forms.component.html",
  styleUrls: ["./online-form-documents-forms.component.scss"]
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  percent: number;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  sections: object[];

  activeSectionId: string;

  constructor() {}

  ngOnInit() {}

  isDocumentsTab(): boolean {
    return this.currentPosition["tab"] === 0;
  }

  isExternalTab(): boolean {
    return this.currentPosition["tab"] === 1;
  }
}
