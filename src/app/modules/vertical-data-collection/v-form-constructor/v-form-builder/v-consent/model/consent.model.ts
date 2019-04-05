export interface ConsentInfo {
  title: string;
  text: ConsentInfoText;
  checkbox: ConsentInfoCheckbox;
  signature: ConsentInfoSignature;
}

interface ConsentInfoText {
  value: string;
  isBold: boolean;
  isItalic: boolean;
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
