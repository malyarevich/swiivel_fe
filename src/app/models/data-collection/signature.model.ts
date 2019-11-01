export interface ISignature {
  isRequire: boolean;
  type: string; // e|wet => SIGNATURE_TYPES
  eType: string; // external|system => E_SIGNATURE_TYPES
  isBothParents: boolean;
  signed: ISignatureSigned;
}

export interface ISignatureSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const SIGNATURE_TYPES = {
  ESIGN: 'esign',
  WET: 'wet'
};

export const E_SIGNATURE_TYPES = {
  SYSTEM: 'system',
  EXTERNAL: 'external'
};
