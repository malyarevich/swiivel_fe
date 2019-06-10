import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {cloneDeep} from 'lodash';
import {Form} from "../../../vertical-data-collection/model/form.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums";
// import {PaymentSettingsSignature} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-terms-conditions/model/payment-settings.model";
import {SystemSignatureService} from "../services/signatures/system-signature.service";
import {SignatureCreateResponse} from "../model/signature-create-response.model";

@Component({
  selector: 'app-online-form-payment-settings',
  templateUrl: './online-form-payment-settings.component.html',
  styleUrls: ['./online-form-payment-settings.component.scss'],
})
export class OnlineFormPaymentSettingsComponent implements OnInit {
  @Input() form: Form;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  // signature: PaymentSettingsSignature;
  signature: any;


  constructor(private readonly systemSignatureService: SystemSignatureService) { }

  ngOnInit() {
    this.signature = cloneDeep(this.form.paymentSettings.signature);
  }

  onSystemSign() {
    Object.keys(this.signature.signed).map((item) => {
      if (this.signature.signed[item]) this.saveSystemSign(item, 'paymentSettings');
    });
  }

  saveSystemSign(personsType, itemType) {

    this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.paymentSettings.signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType) {
    return this.form.paymentSettings.signature.signed[personsType]
  }

}
