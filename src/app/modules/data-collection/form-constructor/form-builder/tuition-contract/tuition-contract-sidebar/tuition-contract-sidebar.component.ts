import { Component, OnInit, Input } from "@angular/core";
import {
  TuitionContract,
  tuitionContractDefault
} from "src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import { Fee } from "@app/models/fee.model";
import { cloneDeep, isEmpty } from "lodash";
import { FinanceService } from "@app/services/finance/finance.service";
import { LocalStorageService } from "@app/modules/data-collection/services/local-storage.service";
import { mainMenuNames } from "@app/models/data-collection/form-constructor/online-form/menu-items";
import { TuitionService } from "../services/tuition.services";
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES,
  TUITION_CONTRACT_SPLIT_TYPES
} from "src/app/enums";

@Component({
  selector: "app-tuition-contract-sidebar",
  templateUrl: "./tuition-contract-sidebar.component.html",
  styleUrls: ["./tuition-contract-sidebar.component.scss"]
})
export class TuitionContractSidebarComponent implements OnInit {
  masterFees: Fee[] = [];
  isRequiredSignature: boolean = false;
  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;

  constructor(
    private readonly financeService: FinanceService,
    private localStorageService: LocalStorageService,
    private tuitionService: TuitionService
  ) {}

  ngOnInit() {
    this.loadMasterFees();
    if (!isEmpty(this.masterFees)) {
      this.initFeeToTuitionContract();
    }
  }

  changeIsRequire() {
    this.isRequiredSignature = !this.isRequiredSignature;
  }

  getIsActiveSidebar(): boolean {
    return this.localStorageService.storage['builder']['activeSidebarStates'][
      mainMenuNames.tuitionContract
    ];
  }

  getIsActiveSection(): boolean {
    return this.localStorageService.storage['builder']['activeSectionStates'][
      mainMenuNames.tuitionContract
    ];
  }

  toggleIsActiveSidebar() {
    this.tuitionService.toggleSidebarState();
  }

  dependSidebar() {
    if (this.getIsActiveSection) {
      this.activeSidebar();
    } else {
      this.inactiveSidebar();
    }
  }

  activeSidebar() {
    this.tuitionService.activeSidebarState();
  }

  inactiveSidebar() {
    this.tuitionService.inactiveSidebarState();
  }

  toggleIsActiveSection() {
    this.tuitionService.toggleSectionState();
  }

  loadMasterFees() {
    this.financeService.getMasterFees().subscribe(res => {
      this.masterFees = res.fees;
    });
  }

  initFeeToTuitionContract() {
    this.addFeeToTuitionContract();
    // this.deleteFeeFromTuitionContract()
  }

  addFeeToTuitionContract() {
    this.masterFees.map((fee: Fee) => {
      let { id, name, amount, description } = fee;
      let tuitionFee = {
        id,
        name,
        amount,
        description,
        isActive: false,
        isActiveDiscount: false
      };

      if (!this.existFeeToTuitionContract(tuitionFee.id))
        this.tuitionService.pushFees(tuitionFee);
    });
  }

  getTuitionFees() {
    return this.localStorageService.storage['builder'][
      mainMenuNames.tuitionContract
    ];
  }

  getSplitBy() {
    // console.log(this.localStorageService.storage['builder'][mainMenuNames.tuitionContract] || this.localStorageService.storage['builder'][mainMenuNames.tuitionContract]['splitBy'] === TUITION_CONTRACT_SPLIT_TYPES.STUDENT || this.localStorageService.storage['builder'][mainMenuNames.tuitionContract] || this.localStorageService.storage['builder'][mainMenuNames.tuitionContract]['splitBy']);
    return this.localStorageService.storage['builder'][mainMenuNames.tuitionContract] ? this.localStorageService.storage['builder'][mainMenuNames.tuitionContract]['splitBy'] : false;
  }

  getTuition(): TuitionContract {
    return this.localStorageService.storage['builder'][mainMenuNames.tuitionContract];
  }

  setSplitBy(value: string) {
    const tuition = cloneDeep(this.getTuition());
    tuition['splitBy'] = value;
    this.tuitionService.rewriteTuition(tuition);
  }

  existFeeToTuitionContract(feeTemplateId) {
    return this.tuitionService.getFeesIndex(feeTemplateId);
  }
}
