import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { cloneDeep } from "lodash";
import { Form } from "../../model/form.model";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import { TermsConditionsSignature } from "../../v-form-constructor/v-form-builder/v-terms-conditions/model/terms-conditions.model";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../../models/shared/signatures/signature-create-response.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";

@Component({
  selector: "app-online-form-terms-conditions",
  templateUrl: "./online-form-terms-conditions.component.html",
  styleUrls: ["./online-form-terms-conditions.component.scss"]
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TermsConditionsSignature;

  constructor(
    private readonly systemSignatureService: SystemSignatureService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.termsConditions.signature);
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.termsConditions
    ).time;
  }

  onSystemSign() {
    Object.keys(this.signature.signed).map(item => {
      if (this.signature.signed[item])
        this.saveSystemSign(item, "termsConditions");
    });
  }

  saveSystemSign(personsType, itemType) {
    this.systemSignatureService
      .sign(this.form._id, this.form.personId, itemType)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.termsConditions.signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType) {
    return this.form.termsConditions.signature.signed[personsType];
  }
}
