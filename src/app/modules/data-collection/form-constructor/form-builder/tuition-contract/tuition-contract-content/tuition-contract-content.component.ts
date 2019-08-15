import { Component, OnInit, Input } from "@angular/core";
import { TuitionContract } from "@app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES,
  TUITION_CONTRACT_SPLIT_TYPES
} from "src/app/enums";
import { LocalStorageService } from "@app/modules/data-collection/services/local-storage.service";
import { mainMenuNames } from "@app/models/data-collection/form-constructor/online-form/menu-items";
import { TuitionService } from "../services/tuition.services";
import { Subscription } from "rxjs";

@Component({
  selector: "app-tuition-contract-content",
  templateUrl: "./tuition-contract-content.component.html",
  styleUrls: ["./tuition-contract-content.component.scss"]
})
export class TuitionContractContentComponent implements OnInit {
  tuitionContract: TuitionContract;
  tuitionContractSubscription: Subscription;

  isExpand: boolean = true;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor(
    private localStorageService: LocalStorageService,
    private tuitionService: TuitionService
  ) {}

  ngOnInit() {
    this.tuitionContract = this.localStorageService.storage["builder"][
      mainMenuNames.tuitionContract
    ];
    this.tuitionContractSubscription = this.localStorageService.onChangeStorage.subscribe(
      (storage: object) => {
        this.tuitionContract =
          storage["builder"][mainMenuNames.tuitionContract];
      }
    );
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }

  changeSectionName(sectionName: string) {
    this.tuitionContract["sectionName"] = sectionName;
    this.tuitionService.rewriteTuition(this.tuitionContract);
  }

  changeSectionWidth(sectionWidthType: string) {
    this.tuitionContract["sectionWidth"] = sectionWidthType;
    this.tuitionService.rewriteTuition(this.tuitionContract);
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }

  getIsActiveSection(): boolean {
    return this.localStorageService.storage['builder']['activeSectionStates'][
      mainMenuNames.tuitionContract
    ];
  }
}
