import { Component, Input, OnInit } from "@angular/core";
import { cloneDeep } from "lodash";
import { PaymentSettings } from "./../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/payment-settings.model";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../../enums";
import { SystemSignatureService } from '../../../../../services/signatures/system-signature.service';

@Component({
  selector: "app-v-payment-settings",
  templateUrl: "./v-payment-settings.component.html",
  styleUrls: ["./v-payment-settings.component.scss"]
})
export class VPaymentSettingsComponent implements OnInit {
  @Input() paymentSettings: PaymentSettings;

  sectionName: string = "Payment Settings";
  sectionWidth: string = "4 Columns";

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  // signature: PaymentSettingsSignature;
  signature: SystemSignatureService;

  constructor() {}

  ngOnInit() {
    this.signature = cloneDeep(this.paymentSettings.signature);
  }

  onChangePaymentOptionsContent(innerHTML: string) {
    this.paymentSettings.paymentOptionsContent = innerHTML;
  }
}
