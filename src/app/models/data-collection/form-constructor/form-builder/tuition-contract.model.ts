import { TUITION_CONTRACT_SPLIT_TYPES } from "../../../../enums/tuition-contract-split-type";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";
import {Section} from "../../section.model";

export interface TuitionContract {
  sectionName: string;
  sectionWidth: string;
  splitBy: string;
  fees: TuitionContractFee[];
  text: string;
  signature: TuitionContractSignature;
}

export interface TuitionContractFee {
  id: number;
  name: string;
  amount: string;
  description: string;
  isActive: boolean;
  isActiveDiscount: boolean;
}

export interface TuitionContractSignature {
  isRequire: boolean;
  type: string;
  eType: string;
  isBothParents: boolean;
  signed: TuitionContractSigned;
}

export interface TuitionContractSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const tuitionContractDefault: TuitionContract = {
  sectionName: 'Tuition Contract',
  sectionWidth: Section.full,
  splitBy: TUITION_CONTRACT_SPLIT_TYPES.STUDENT,
  fees: [],
  text: "",
  signature: {
    isRequire: false,
    type: SIGNATURE_TYPES.ESIGN,
    eType: E_SIGNATURE_TYPES.SYSTEM,
    isBothParents: false,
    signed: { parents: false, fathers: false, mothers: false }
  }
};
