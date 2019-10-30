import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Form } from "@app/models/data-collection/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: "sw-online-form-payment-settings",
  templateUrl: "./online-form-payment-settings.component.html",
  styleUrls: ["./online-form-payment-settings.component.scss"]
})
export class OnlineFormPaymentSettingsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
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
