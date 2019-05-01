export interface ConsentInfo {
  title: string;
  text: ConsentInfoText;
  checkbox: ConsentInfoCheckbox;
  signature: ConsentInfoSignature;
}

interface ConsentInfoText {
  value: string;
}

interface ConsentInfoCheckbox {
  isActive: boolean;
  text: string;
}

interface ConsentInfoSignature {
  isRequire: boolean;
  type: string; //e|wet
  eType: string; //external|system
  isBothParents: boolean;
}

export const consentItemDefault = {
  title: '',
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
