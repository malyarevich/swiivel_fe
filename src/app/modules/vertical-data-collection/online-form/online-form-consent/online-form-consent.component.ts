import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {ConsentItemInfo} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/consent.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums";
import {Form} from "../../model/form.model";
import {SystemSignatureService} from "../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../../models/shared/signatures/signature-create-response.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";

@Component({
  selector: 'app-online-form-consent',
  templateUrl: './online-form-consent.component.html',
  styleUrls: ['./online-form-consent.component.scss']
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: Form;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  activeConsentId: string;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  consents: ConsentItemInfo[];

  constructor(private systemSignatureService: SystemSignatureService) {
  }

  ngOnInit() {
    this.consents = cloneDeep(this.form.consentInfo.consents);
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.consentInfo).time;
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
