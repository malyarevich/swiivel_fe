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
  type: string;
  eType: string;
  isBothParents: boolean;
  signed: ConsentSignatureSigned;
}

export interface ConsentSignatureSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const consentInfoDefault: ConsentInfo = {
  sectionName: 'Parent Consent',
  sectionWidth: '4 columns',
  consents: [],
};
