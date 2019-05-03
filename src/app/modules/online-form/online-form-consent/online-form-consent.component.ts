import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {ConsentItemInfo} from "../../vertical-data-collection/v-form-constructor/v-form-builder/v-consent/model/consent.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../enums";
import {Form} from "../../vertical-data-collection/model/form.model";
import {SystemSignatureService} from "../services/signatures/system-signature.service";

@Component({
  selector: 'app-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.css']
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
      if (signed[item]) this.saveSystemSign(item, 'consent', consentId);
    });
  }


  saveSystemSign(personsType, itemType, consentId) {

    this.systemSignatureService.sign(this.form._id, this.form.personId)
      .subscribe((res) => {
        this.form.consentInfo.consents
          .find(item => item.id === consentId).signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType, consentId) {
    return this.form.consentInfo.consents.find(item => item.id === consentId).signature.signed[personsType]
  }

}
