import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { cloneDeep } from "lodash";
import {
  TuitionContract,
  TuitionContractSignature
} from "../../v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
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

@Component({
  selector: "app-online-form-tuition-contract",
  templateUrl: "./online-form-tuition-contract.component.html",
  styleUrls: ["./online-form-tuition-contract.component.scss"]
})
export class OnlineFormTuitionContractComponent implements OnInit {
  @Input() form: Form;
  @Output() onSetPercent: EventEmitter<number> = new EventEmitter();

  percent: number;
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TuitionContractSignature;

  constructor(
    private readonly systemSignatureService: SystemSignatureService
  ) {}

  ngOnInit() {
    this.signature = cloneDeep(this.form.tuitionContract.signature);
    // TODO: count percent
    this.percent = 0;
    this.onSetPercent.emit(this.percent);
  }
  getTime() {
    return this.menuItems.find(o => o.name === this.mainMenuNames.tuitionContract)
      .time;
  }

  onSystemSign() {}

  saveSystemSign() {}

  isDisabledSign() {}
}
