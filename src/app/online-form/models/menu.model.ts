
export const mainMenuNames: IMainMenuNames = {
  packetIntroduction: 'packetIntroduction',
  generalInfo: 'formFields',
  documentsForms: 'documentsForms',
  consentInfo: 'consent',
  paymentSettings: 'paymentSettings',
  tuitionContract: 'tuition',
  termsConditions: 'termsConditionals',
  payment: 'formPayment',
};

export const menuItems: IMenuItems[] = [
  {
    name: mainMenuNames.packetIntroduction,
    title: 'Packet Introduction',
    time: 3,
    icon: 'packet-introduction'
  },
  {
    name: mainMenuNames.generalInfo,
    title: 'General Information',
    time: 48,
    icon: 'general-information'
  },
  {
    name: mainMenuNames.documentsForms,
    title: 'Additional documents',
    time: 15,
    icon: 'documents-forms'
  },
  {
    name: mainMenuNames.consentInfo,
    title: 'Consent',
    time: 12,
    icon: 'consent'
  },
  {
    name: mainMenuNames.paymentSettings,
    title: 'Payment Settings',
    time: 10,
    icon: 'payment-settings'
  },
  {
    name: mainMenuNames.tuitionContract,
    title: 'Tuition Contract',
    time: 6,
    icon: 'tuition-contract'
  },
  {
    name: mainMenuNames.termsConditions,
    title: 'Term & Conditions',
    time: 14,
    icon: 'term-conditions'
  },
  {
    name: mainMenuNames.payment,
    title: 'Payment',
    time: 18,
    icon: 'payment'
  }
];

export interface IMainMenuNames {
  packetIntroduction: string;
  generalInfo: string;
  documentsForms: string;
  consentInfo: string;
  paymentSettings: string;
  tuitionContract: string;
  termsConditions: string;
  payment: string;
}

export interface IMenuItems {
  name: string;
  title: string;
  time: number;
  icon: string;
}
