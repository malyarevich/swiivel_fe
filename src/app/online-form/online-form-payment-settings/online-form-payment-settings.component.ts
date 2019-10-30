import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormModel } from "@models/data-collection/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";

@Component({
  selector: "sw-online-form-payment-settings",
  templateUrl: "./online-form-payment-settings.component.html",
  styleUrls: ["./online-form-payment-settings.component.scss"]
})
export class OnlineFormPaymentSettingsComponent implements OnInit {
  @Input() form: FormModel;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  signature: any;

  sections: object[];
  activeSectionId: string;

  constructor() {}

  ngOnInit() {}

  isExist(): boolean {
    return typeof this.form.paymentSettings !== "undefined"; // && this.form.paymentSettings.payments.length > 0;
  }
}
