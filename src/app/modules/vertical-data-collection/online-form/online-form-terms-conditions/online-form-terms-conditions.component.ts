import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {cloneDeep} from 'lodash';
import {Form} from "../../model/form.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums";
import {TermsConditionsSignature} from "../../v-form-constructor/v-form-builder/v-terms-conditions/model/terms-conditions.model";
import {SystemSignatureService} from "../services/signatures/system-signature.service";
import {SignatureCreateResponse} from "../model/signature-create-response.model";

@Component({
  selector: 'app-online-form-terms-conditions',
  templateUrl: './online-form-terms-conditions.component.html',
  styleUrls: ['./online-form-terms-conditions.component.scss'],
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TermsConditionsSignature;


  constructor(private readonly systemSignatureService: SystemSignatureService) { }

  ngOnInit() {
    this.signature = cloneDeep(this.form.termsConditions.signature);
  }

  onSystemSign() {
    Object.keys(this.signature.signed).map((item) => {
      if (this.signature.signed[item]) this.saveSystemSign(item, 'termsConditions');
    });
  }

  saveSystemSign(personsType, itemType) {

    this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.termsConditions.signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType) {
    return this.form.termsConditions.signature.signed[personsType]
  }

}