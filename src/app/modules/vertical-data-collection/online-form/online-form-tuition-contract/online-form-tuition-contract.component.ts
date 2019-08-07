import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { cloneDeep } from "lodash";
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES,
  TUITION_CONTRACT_SPLIT_TYPES
} from "../../../../enums";
import { SystemSignatureService } from "../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../../models/shared/signatures/signature-create-response.model";
import { Form } from "../../model/form.model";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import {TuitionContractSignature} from "../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";
import { OnlineFormNavigationService } from '../services/online-form-navigation.service';

@Component({
  selector: "app-online-form-tuition-contract",
  templateUrl: "./online-form-tuition-contract.component.html",
  styleUrls: ["./online-form-tuition-contract.component.scss"]
})
export class OnlineFormTuitionContractComponent implements OnInit {
  @Input() form: Form;

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TuitionContractSignature;

  sections: object[];
  activeSectionId: string;

  constructor(
    private readonly systemSignatureService: SystemSignatureService,
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.tuitionContract.signature);
    this.initSections();
    this.onlineFormNavigationService.onActiveSectionItem.subscribe((newActiveSectionId) => {
      //TODO: go to behaviorSubjects 
      this.activeSectionId = newActiveSectionId;
    });
    // TODO: count percent
    this.setPercent(100);
  }

  initSections() {
    if (this.form.tuitionContract) {
      this.sections = [{_id: this.form.tuitionContract.sectionName, name: this.form.tuitionContract.sectionName}];
    } else {
      this.sections = [{_id: "tuitionContract", name: "Tuition Contract section"}];
    }
    this.onlineFormNavigationService.setSectionItemOfMenuItems(mainMenuNames.tuitionContract, this.sections);
  }

  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.tuitionContract)
      .time;
  }

  setPercent(percent: number) {
    this.percent = percent;
    this.onlineFormNavigationService.setSectionPercent(mainMenuNames.documentsForms, percent);
  }

  onSystemSign() {}

  saveSystemSign() {}

  isDisabledSign() {}
}
