import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {ConsentItemInfo} from "../../v-form-constructor/v-form-builder/v-consent/model/consent.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums";
import {Form} from "../../model/form.model";
import {SystemSignatureService} from "../services/signatures/system-signature.service";
import {SignatureCreateResponse} from '../model/signature-create-response.model'

@Component({
  selector: 'app-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.scss']
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: Form;

  activeConsentId: string;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  consents: ConsentItemInfo[];

  constructor(private systemSignatureService: SystemSignatureService) {
  }

  ngOnInit() {
    this.consents = cloneDeep(this.form.consentInfo.consents);
  }

  onActiveConsent(id) {
    this.activeConsentId = id;
  }

  onSystemSign(consentId) {
    let signed = this.consents.find(item => item.id === consentId).signature.signed;
    Object.keys(signed).map((item) => {
      if (signed[item]) this.saveSystemSign(item, 'consentInfo', consentId);
    });
  }


  saveSystemSign(personsType, itemType, consentId) {

    this.systemSignatureService.sign(this.form._id, this.form.personId, itemType, consentId)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.consentInfo.consents
          .find(item => item.id === consentId).signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType, consentId) {
    return this.form.consentInfo.consents.find(item => item.id === consentId).signature.signed[personsType]
  }

}
