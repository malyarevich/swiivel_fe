import { TUITION_CONTRACT_SPLIT_TYPES } from "../../../../enums/tuition-contract-split-type";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../enums";

export interface TuitionContract {
  isActive: boolean;
  showSideInfo: boolean;
  splitBy: string;
  fees: TuitionContractFee[];
  text: string;
  signature: TuitionContractSignature;
}

export interface TuitionContractFee {
  id: number;
  name: string;
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
  isActive: false,
  showSideInfo: false,
  splitBy: TUITION_CONTRACT_SPLIT_TYPES.STUDENT,
  fees: [
    // {name: 'dormitory', title: 'Bais Medrash Winter Dormitory Fee', isActive: true, discount: {isAllow: true, isActive: false}},
    // {name: 'registration', title: 'Registration', isActive: true, discount: {isAllow: true, isActive: false}},
    // {name: 'activity', title: 'Activity', isActive: false, discount: {isAllow: false, isActive: false}},
    // {name: 'tuition', title: 'Tuition', isActive: true, discount: {isAllow: true, isActive: false}},
    // {name: 'scholarship', title: 'Scholarship', isActive: true, discount: {isAllow: true, isActive: false}},
    // {name: 'lunch', title: 'Lunch Fee', isActive: true, discount: {isAllow: true, isActive: false}},
  ],
  text: "",
  signature: {
    isRequire: false,
    type: SIGNATURE_TYPES.ESIGN,
    eType: E_SIGNATURE_TYPES.SYSTEM,
    isBothParents: false,
    signed: { parents: false, fathers: false, mothers: false }
  }
};
