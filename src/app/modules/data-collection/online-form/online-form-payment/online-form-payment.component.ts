import { Component, Input, OnInit } from "@angular/core";
import { cloneDeep } from "lodash";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "src/app/enums";
import { Form } from "src/app/models/data-collection/form.model";
import { SignatureCreateResponse } from "src/app/models/shared/signatures/signature-create-response.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "src/app/models/data-collection/form-constructor/online-form/menu-items";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-payment",
  templateUrl: "./online-form-payment.component.html",
  styleUrls: ["./online-form-payment.component.scss"]
})
export class OnlineFormPaymentComponent implements OnInit {
  @Input() form: Form;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  // signature: PaymentSignature;
  signature: any;

  sections: object[];
  activeSectionId: string;

  constructor(
    private readonly systemSignatureService: SystemSignatureService,
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.paymentSettings.signature);
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe(
      newActiveSectionId => {
        //TODO: go to behaviorSubjects
        this.activeSectionId = newActiveSectionId;
      }
    );
    // TODO: count percent
    this.setPercent(100);
  }

  initSections() {
    if (this.form) {
      this.sections = [{ _id: "payment", name: "Payment section" }];
    } else {
      this.sections = [{ _id: "payment", name: "Payment section" }];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(
      mainMenuNames.payment,
      this.sections
    );
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(
      mainMenuNames.payment,
      percent
    );
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
