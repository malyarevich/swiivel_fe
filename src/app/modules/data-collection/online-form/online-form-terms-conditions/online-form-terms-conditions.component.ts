import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from "@angular/core";
import { cloneDeep } from "lodash";
import { Form } from "../../model/form.model";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../../models/shared/signatures/signature-create-response.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/data-collection/form-constructor/online-form/menu-items";
import {TermsConditionsSignature} from "../../../../models/data-collection/form-constructor/form-builder/terms-conditions.model";
import { OnlineFormNavigationService } from '../services/online-form-navigation.service';

@Component({
  selector: "app-online-form-terms-conditions",
  templateUrl: "./online-form-terms-conditions.component.html",
  styleUrls: ["./online-form-terms-conditions.component.scss"]
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TermsConditionsSignature;

  sections: object[];
  activeSectionId: string;

  constructor(
    private readonly systemSignatureService: SystemSignatureService,
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.termsConditions.signature);
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe((newActiveSectionId) => {
      //TODO: go to behaviorSubjects 
      this.activeSectionId = newActiveSectionId;
    });
    // TODO: count percent
    this.setPercent(100);
  }

  initSections() {
    if (this.form.termsConditions && this.form.termsConditions.termsConditionsItems.length > 0) {
      this.sections = Object.values(this.form.termsConditions.termsConditionsItems).map((item) => {
        return {_id: item.id, name: item.title }
      });
    } else {
      this.sections = [{_id: "termsConditions", name: "Terms & Conditions section"}];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(mainMenuNames.termsConditions, this.sections);
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.termsConditions
    ).time;
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(mainMenuNames.termsConditions, percent);
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