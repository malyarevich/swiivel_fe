import { Injectable, OnInit } from "@angular/core";
import { cloneDeep } from "lodash";
import {
  tuitionContractDefault,
  TuitionContract,
  TuitionContractFee
} from "@app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import { LocalStorageService } from "@app/modules/data-collection/services/local-storage.service";
import { mainMenuNames } from "@app/models/data-collection/form-constructor/online-form/menu-items";

@Injectable()
export class TuitionService implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  pushFees(item: TuitionContractFee) {
    const tuition = cloneDeep(
      this.localStorageService.storage["builder"][mainMenuNames.tuitionContract]
    );
    tuition["fees"].push(item);
    this.rewriteTuition(tuition);
  }

  rewriteTuition(tuition) {
    const wrapper = this.localStorageService.storage['builder'];
    wrapper[mainMenuNames.tuitionContract] = tuition;
    this.localStorageService.mutateStore(wrapper);
  }

  getFeesIndex(feeTemplateId) {
    return (
      this.localStorageService.storage["builder"][
        mainMenuNames.tuitionContract
      ].fees.findIndex(fee => fee.id === feeTemplateId) !== -1
    );
  }
  
  toggleSidebarState() {
    const sidebarStates = cloneDeep(this.localStorageService.storage['builder']['activeSidebarStates']);
    sidebarStates[mainMenuNames.tuitionContract] = !(sidebarStates && sidebarStates[mainMenuNames.tuitionContract]) ? true : false;
    this.localStorageService.rewriteBuilderSidebar(sidebarStates);
  }
  
  activeSidebarState() {
    const sidebarStates = cloneDeep(this.localStorageService.storage['builder']['activeSidebarStates']);
    sidebarStates[mainMenuNames.tuitionContract] = true;
    this.localStorageService.rewriteBuilderSidebar(sidebarStates);
  }

  inactiveSidebarState() {
    const sidebarStates = cloneDeep(this.localStorageService.storage['builder']['activeSidebarStates']);
    sidebarStates[mainMenuNames.tuitionContract] = false;
    this.localStorageService.rewriteBuilderSidebar(sidebarStates);
  }

  toggleSectionState() {
    const sectionStates = cloneDeep(this.localStorageService.storage['builder']['activeSectionStates']);
    sectionStates[mainMenuNames.tuitionContract] = !(sectionStates && sectionStates[mainMenuNames.tuitionContract]) ? true : false;
    this.localStorageService.rewriteBuilderSection(sectionStates)
  }

}
