import {TUITION_CONTRACT_SPLIT_TYPES} from "../../../../../../enums/tuition-contract-split-type";

export interface TuitionContract {
  isActive: boolean,
  showSideInfo: boolean,
  splitBy: string;
  showFees: TuitionContractFee[];
  text: string;
  signature: TuitionContractSignature;
}

export interface TuitionContractFee {
  name: string;
  title: string;
  isActive: boolean;
  discount: {
    isAllow: boolean;
    isActive: boolean
  }
}

interface TuitionContractSignature {
  isRequire: boolean;
  type: string; //e|wet
  eType: string; //external|system
  isBothParents: boolean;
}

export const tuitionContractDefault: TuitionContract = {
  isActive: false,
  showSideInfo: false,
  splitBy: TUITION_CONTRACT_SPLIT_TYPES.STUDENT,
  showFees: [
    {name: 'dormitory', title: 'Bais Medrash Winter Dormitory Fee', isActive: true, discount: {isAllow: true, isActive: false}},
    {name: 'registration', title: 'Registration', isActive: true, discount: {isAllow: true, isActive: false}},
    {name: 'activity', title: 'Activity', isActive: false, discount: {isAllow: false, isActive: false}},
    {name: 'tuition', title: 'Tuition', isActive: true, discount: {isAllow: true, isActive: false}},
    {name: 'scholarship', title: 'Scholarship', isActive: true, discount: {isAllow: true, isActive: false}},
    {name: 'lunch', title: 'Lunch Fee', isActive: true, discount: {isAllow: true, isActive: false}},
  ],
  text: '',
  signature: {
    isRequire: true,
    type: 'e',
    eType: 'external',
    isBothParents: true,
  }
};