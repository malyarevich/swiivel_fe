import { Component, OnInit, Input } from "@angular/core";
import {
  TuitionContract,
  tuitionContractDefault
} from "src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import { Fee } from "src/app/models/fee.model";
import { cloneDeep, isEmpty } from "lodash";
import { FinanceService } from "src/app/services/finance/finance.service";
import { TuitionStateService } from "../services/tuition-state.service";

@Component({
  selector: "app-tuition-contract-sidebar",
  templateUrl: "./tuition-contract-sidebar.component.html",
  styleUrls: ["./tuition-contract-sidebar.component.scss"]
})
export class TuitionContractSidebarComponent implements OnInit {  
  masterFees: Fee[] = [];
  isRequiredSignature: boolean = false;

  constructor(
    private readonly financeService: FinanceService,
    private tuitionStateService: TuitionStateService
  ) {}

  ngOnInit() {
    this.tuitionStateService.init();
    this.loadMasterFees();

    if (!isEmpty(this.masterFees)) {
      this.initFeeToTuitionContract();
    }
  }

  changeIsRequire() {
    this.isRequiredSignature = !this.isRequiredSignature;
  }

  getIsActiveSidebar(): boolean {
    return this.tuitionStateService.isActiveSidebar;
  }

  getIsActiveSection(): boolean {
    return this.tuitionStateService.isActiveSection;
  }

  toggleIsActiveSidebar() {
    this.tuitionStateService.toggleIsActiveSidebar();
  }

  toggleIsActiveSection() {
    this.tuitionStateService.toggleIsActiveSection();
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
        this.tuitionStateService.pushFees(tuitionFee);
    });
  }

  existFeeToTuitionContract(feeTemplateId) {
    return this.tuitionStateService.getFeesIndex(feeTemplateId);
  }
}
