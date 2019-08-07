import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";
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
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-payment-settings",
  templateUrl: "./online-form-payment-settings.component.html",
  styleUrls: ["./online-form-payment-settings.component.scss"]
})
export class OnlineFormPaymentSettingsComponent implements OnInit {
  @Input() form: Form;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  // signature: PaymentSettingsSignature;
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
    if (this.form.paymentSettings && this.form.paymentSettings.paymentSettingsItems.length > 0) {
      this.sections = Object.values(
        this.form.paymentSettings.paymentSettingsItems
      ).map(item => {
        return { _id: item.id, name: item.title };
      });
    } else {
      this.sections = [{ _id: "paymentSettings", name: "Payment Settings section" }];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(mainMenuNames.paymentSettings, this.sections);
  }

  getTime() {
    return this.menuItems.find(
      o => o.name === this.mainMenuNames.paymentSettings
    ).time;
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(mainMenuNames.paymentSettings, percent);
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
