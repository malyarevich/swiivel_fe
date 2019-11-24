import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from '../../../../enums';
import {Section} from '../../section.model';

export interface PaymentSettings {
  sectionName: string;
  sectionWidth: string;
  paymentSettingsItems: PaymentSettingsItem[];
  signature: PaymentSettingsSignature;
  paymentOptionsContent: string;
}

export interface PaymentSettingsItem {
  title: string;
  id: string;
  text: string;
  checkbox: PaymentSettingsItemCheckbox;
}

interface PaymentSettingsItemCheckbox {
  isActive: boolean;
  checked: boolean;
  text: string;
}

export interface PaymentSettingsSignature {
  isRequire: boolean;
  type: string;
  eType: string;
  isBothParents: boolean;
  signed: PaymentSettingsSigned;
}

export interface PaymentSettingsSigned {
  parents: boolean;
  fathers: boolean;
  mothers: boolean;
}

export const paymentSettingsItemDefault: PaymentSettingsItem = {
  title: '',
  id: '',
  text: '',
  checkbox: {
    isActive: false,
    checked: false,
    text: '',
  }
};

export const paymentSettingsDefault: PaymentSettings = {
  sectionName: 'Payment Settings',
  sectionWidth: Section.full,
  paymentSettingsItems: [],
  signature: {
    isRequire: false,
    type: SIGNATURE_TYPES.ESIGN,
    eType: E_SIGNATURE_TYPES.SYSTEM,
    isBothParents: false,
    signed: {parents: false, fathers: false, mothers: false}
  },
  paymentOptionsContent: ''
};
