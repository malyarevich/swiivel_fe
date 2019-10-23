import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../enums/index";
import {Section} from "../../section.model";

export interface ConsentInfo {
  sectionName: string;
  sectionWidth: string;
  consents: ConsentItemInfo[];
}

export interface ConsentItemInfo {
  title: string;
  id: string;
  text: ConsentItemInfoText;
  checkbox: ConsentItemInfoCheckbox;
  button?: any;
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
  button: {
    isActive: false,
    text: ''
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
  sectionName: "Parent Consent",
  sectionWidth: Section.full,
  consents: [],
};