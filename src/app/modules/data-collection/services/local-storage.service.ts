import { Injectable, OnInit, Output, EventEmitter } from "@angular/core";
import {cloneDeep} from 'lodash';
import {
  tuitionContractDefault,
  TuitionContract,
  TuitionContractFee
} from "@app/models/data-collection/form-constructor/form-builder/tuition-contract.model";
import {mainMenuNames} from "@app/models/data-collection/form-constructor/online-form/menu-items";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  @Output() onChangeStorage: EventEmitter<object> = new EventEmitter();
  storage: object = {};

  constructor() {
    this.storage["builder"] = {};
    this.storage["builder"][mainMenuNames.tuitionContract] = tuitionContractDefault;
    this.storage["builder"] = {
      ...this.storage["builder"],
      activeSidebarStates: {},
      activeSectionStates: {}
    };
    this.onChangeStorage.emit(this.storage);
  }

  mutateStore(wrapObject: object) {
    this.storage = { ...this.storage, ...wrapObject };
    this.onChangeStorage.emit(this.storage);
  }

  rewriteBuilderSidebar(activeSidebarStates) {
    const wrapper = {};
    wrapper["builder"] = cloneDeep(this.storage['builder']);
    wrapper["builder"]['activeSidebarStates'] = activeSidebarStates;
    this.mutateStore(wrapper);
  }

  
  rewriteBuilderSection(activeSectionStates) {
    const wrapper = {};
    wrapper["builder"] = cloneDeep(this.storage['builder']);
    wrapper["builder"]['activeSectionStates'] = activeSectionStates;
    this.mutateStore(wrapper);
  }
}
