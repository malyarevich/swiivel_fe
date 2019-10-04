import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { cloneDeep } from "lodash";
import { Form } from "@app/models/data-collection/form";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../models/menu.model";

@Component({
  selector: "sw-online-form-payment",
  templateUrl: "./online-form-payment.component.html",
  styleUrls: ["./online-form-payment.component.scss"]
})
export class OnlineFormPaymentComponent implements OnInit {
  @Input() form: Form;
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

  ngOnInit() {
    this.signature = cloneDeep(this.form.paymentSettings.signature);
  }

  isDisabledSign(personsType) {
    return this.form.paymentSettings.signature.signed[personsType];
  }

  isExist(): boolean {
    return typeof this.form.payment !== "undefined"; // && this.form.payment.payments.length > 0;
  }
}
