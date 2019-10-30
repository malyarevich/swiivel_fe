import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import {Section} from "../../section.model";

export interface TermsConditions {
  sectionName: string;
  sectionWidth: string;
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

export interface TermsConditionsSignature {
  isRequire: boolean;
  type: string;
  eType: string;
  isBothParents: boolean;
  signed: TermsConditionsSigned;
}

export interface TermsConditionsSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const termsConditionsItemDefault: TermsConditionsItem = {
  title: "",
  id: "",
  text: "",
  checkbox: {
    isActive: false,
    checked: false,
    text: ""
  }
};

export const termsConditionsDefault: TermsConditions = {
  sectionName: 'Terms and Conditions',
  sectionWidth: Section.full,
  termsConditionsItems: [],
  signature: {
    isRequire: true,
    type: SIGNATURE_TYPES.WET,
    eType: E_SIGNATURE_TYPES.EXTERNAL,
    isBothParents: false,
    signed: { parents: false, fathers: false, mothers: false }
  }
};
