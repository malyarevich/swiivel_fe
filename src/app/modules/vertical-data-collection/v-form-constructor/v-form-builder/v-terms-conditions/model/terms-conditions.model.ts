import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../../../enums";

export interface TermsConditions {
  isActive: boolean;
  showSideInfo: boolean;
  termsConditionsItems: TermsConditionsItem[];
  signature: TermsConditionsSignature;
}

export interface TermsConditionsItem {
  title: string;
  id: string;
  text: string;
  checkbox: TermsConditionsItemCheckbox;
}

interface TermsConditionsItemCheckbox {
  isActive: boolean;
  checked: boolean;
  text: string;
}

interface TermsConditionsSignature {
  isRequire: boolean;
  type: string; //e|wet
  eType: string; //external|system
  isBothParents: boolean;
  signed: TermsConditionsSigned;
}

export interface TermsConditionsSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const termsConditionsItemDefault: TermsConditionsItem = {
  title: '',
  id: '',
  text: '',
  checkbox: {
    isActive: false,
    checked: false,
    text: '',
  }
};

export const termsConditionsDefault: TermsConditions = {
  isActive: false,
  showSideInfo: false,
  termsConditionsItems: [],
  signature: {
    isRequire: false,
    type: SIGNATURE_TYPES.ESIGN,
    eType: E_SIGNATURE_TYPES.SYSTEM,
    isBothParents: false,
    signed: {parents: false, fathers: false, mothers: false}
  }
};