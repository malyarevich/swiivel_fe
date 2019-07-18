import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from "@angular/core";
import { cloneDeep } from "lodash";
import { Form } from "../../model/form.model";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
// import {PaymentSettingsSignature} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-terms-conditions/model/payment-settings.model";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../../models/shared/signatures/signature-create-response.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";

@Component({
  selector: "app-online-form-payment",
  templateUrl: "./online-form-payment.component.html",
  styleUrls: ["./online-form-payment.component.scss"]
})
export class OnlineFormPaymentComponent implements OnInit {
  @Input() form: Form;
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  // signature: PaymentSignature;
  signature: any;

  constructor(
    private readonly systemSignatureService: SystemSignatureService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.paymentSettings.signature);
    // TODO: count percent
    this.percent = 100;
    this.onSetPercent.emit(this.percent);
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.paymentSettings
    ).time;
  }

  onSystemSign() {
    Object.keys(this.signature.signed).map(item => {
      if (this.signature.signed[item])
        this.saveSystemSign(item, "paymentSettings");
    });
  }

  saveSystemSign(personsType, itemType) {
    this.systemSignatureService
      .sign(this.form._id, this.form.personId, itemType)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.paymentSettings.signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType) {
    return this.form.paymentSettings.signature.signed[personsType];
  }
}
