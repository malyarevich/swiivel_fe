import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums/index";

export interface ConsentInfo {
  isActive: boolean;
  showSideInfo: boolean;
  consents: ConsentItemInfo[];
}

export interface ConsentItemInfo {
  title: string;
  id: string;
  text: ConsentItemInfoText;
  checkbox: ConsentItemInfoCheckbox;
  signature: ConsentItemInfoSignature;
}

interface ConsentItemInfoText {
  value: string;
}

interface ConsentItemInfoCheckbox {
  isActive: boolean;
  checked: boolean;
  text: string;
}

interface ConsentItemInfoSignature {
  isRequire: boolean;
  type: string; //e|wet
  eType: string; //external|system
  isBothParents: boolean;
  signed: ConsentSignatureSigned;
}

export interface ConsentSignatureSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const consentItemDefault: ConsentItemInfo = {
  title: '',
  id: '',
  text: {
    value: '',
  },
  checkbox: {
    isActive: false,
    checked: false,
    text: '',
  },
  signature: {
    isRequire: false,
    type: SIGNATURE_TYPES.ESIGN,
    eType: E_SIGNATURE_TYPES.SYSTEM,
    isBothParents: false,
    signed: {parents: false, fathers: false, mothers: false}
  }
};

export const consentInfoDefault: ConsentInfo = {
  isActive: false,
  showSideInfo: false,
  consents: [],
};