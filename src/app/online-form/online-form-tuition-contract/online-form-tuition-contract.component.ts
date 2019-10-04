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
  selector: "sw-online-form-tuition-contract",
  templateUrl: "./online-form-tuition-contract.component.html",
  styleUrls: ["./online-form-tuition-contract.component.scss"]
})
export class OnlineFormTuitionContractComponent implements OnInit {
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

  onSystemSign() {}

  saveSystemSign() {}

  isDisabledSign() {}

  isExist(): boolean {
    return (
      typeof this.form.tuitionContract !== "undefined"
      // && this.form.tuitionContract.tuitionContractItems.length > 0
    );
  }
}
