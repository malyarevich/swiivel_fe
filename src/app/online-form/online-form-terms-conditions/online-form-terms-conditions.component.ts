import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from "@app/models/data-collection/form";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";

@Component({
  selector: "sw-online-form-terms-conditions",
  templateUrl: "./online-form-terms-conditions.component.html",
  styleUrls: ["./online-form-terms-conditions.component.scss"]
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  signature: any;

  constructor() {}

  ngOnInit() {}
}
