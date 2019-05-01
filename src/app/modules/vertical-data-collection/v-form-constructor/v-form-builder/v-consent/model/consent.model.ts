
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
  text: string;
}

interface ConsentItemInfoSignature {
  isRequire: boolean;
  type: string; //e|wet
  eType: string; //external|system
  isBothParents: boolean;
}

export const consentItemDefault: ConsentItemInfo = {
  title: '',
  id: '',
  text: {
    value: '',
  },
  checkbox: {
    isActive: false,
    text: '',
  },
  signature: {
    isRequire: false,
    type: 'e', //e|wet
    eType: 'external', //external|system
    isBothParents: false,
  }
};

export const consentInfoDefault: ConsentInfo = {
  isActive: false,
  showSideInfo: false,
  consents: [],
};