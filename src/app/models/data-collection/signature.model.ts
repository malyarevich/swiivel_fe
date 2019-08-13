export interface ISignature {
  isRequire: boolean;
  type: string; //e|wet => SIGNATURE_TYPES
  eType: string; //external|system => E_SIGNATURE_TYPES
  isBothParents: boolean;
  signed: ISignatureSigned;
}

export interface ISignatureSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}