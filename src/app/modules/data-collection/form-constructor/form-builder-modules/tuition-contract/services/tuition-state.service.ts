import { Injectable } from "@angular/core";
import {
  TuitionContract,
  tuitionContractDefault,
  TuitionContractFee
} from "src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model";

@Injectable()
export class TuitionStateService {
  tuitionContract: TuitionContract = tuitionContractDefault;
  isActiveSidebar: boolean = false;
  isActiveSection: boolean = false;

  constructor() {}

  init() {}

  pushFees(item: TuitionContractFee) {
    this.tuitionContract.fees.push(item);
  }

  getFeesIndex(feeTemplateId) {
    return (
      this.tuitionContract.fees.findIndex(fee => fee.id === feeTemplateId) !==
      -1
    );
  }

  toggleIsActiveSidebar() {
    this.isActiveSidebar = !this.isActiveSidebar;
  }

  toggleIsActiveSection() {
    this.isActiveSection = !this.isActiveSection;
  }
}
