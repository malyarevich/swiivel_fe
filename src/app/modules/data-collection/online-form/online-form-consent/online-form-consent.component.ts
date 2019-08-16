import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { cloneDeep } from "lodash";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "src/app/enums";
import { Form } from "src/app/models/data-collection/form.model";
import { SignatureCreateResponse } from "src/app/models/shared/signatures/signature-create-response.model";
import { ConsentItemInfo } from "src/app/models/data-collection/form-constructor/form-builder/consent.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "src/app/models/data-collection/form-constructor/online-form/menu-items";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-consent",
  templateUrl: "./online-form-consent.component.html",
  styleUrls: ["./online-form-consent.component.scss"]
})
export class OnlineFormConsentComponent implements OnInit {
  @Input() form: Form;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  activeConsentId: string;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  consents: ConsentItemInfo[];

  sections: object[];
  activeSectionId: string;

  constructor(
    private systemSignatureService: SystemSignatureService,
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe(
      newActiveSectionId => {
        //TODO: go to behaviorSubjects
        this.activeSectionId = newActiveSectionId;
      }
    );
    this.initConsents();
    // TODO: count percent
    this.setPercent(100);
  }

  initSections() {
    if (this.form.consentInfo && this.form.consentInfo.consents.length > 0) {
      this.sections = Object.values(this.form.consentInfo.consents).map(
        item => {
          return { _id: item["id"], name: item["title"] };
        }
      );
    } else {
      this.sections = [{ _id: "consentInfo", name: "Consent section" }];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(
      mainMenuNames.consentInfo,
      this.sections
    );
  }

  initConsents() {
    this.consents = cloneDeep(this.form.consentInfo.consents).map(item => {
      return { ...item, _id: item.id, name: item.title };
    });
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(
      mainMenuNames.consentInfo,
      percent
    );
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.consentInfo)
      .time;
  }

  onActiveConsent(id) {
    this.activeConsentId = id;
  }

  onSystemSign(consentId) {
    let signed = this.consents.find(item => item.id === consentId).signature
      .signed;
    Object.keys(signed).map(item => {
      if (signed[item]) this.saveSystemSign(item, "consentInfo", consentId);
    });
  }

  saveSystemSign(personsType, itemType, consentId) {
    this.systemSignatureService
      .sign(this.form._id, this.form.personId, itemType, consentId)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.consentInfo.consents.find(
          item => item.id === consentId
        ).signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType, consentId) {
    return this.form.consentInfo.consents.find(item => item.id === consentId)
      .signature.signed[personsType];
  }
}
