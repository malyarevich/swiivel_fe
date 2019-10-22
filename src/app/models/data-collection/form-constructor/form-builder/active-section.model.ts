export interface IActiveSections {
  packetIntroduction: IActiveSection;
  formFields: IActiveSection;
  documentsForms: IActiveSection;
  consent: IActiveSection;
  tuition: IActiveSection;
  paymentSettings: IActiveSection;
  termsConditionals: IActiveSection;
  formPayment: IActiveSection;
}

export interface IActiveSection {
  isActive: boolean;
  showSideInfo: boolean;
}

export const activeSectionsDefault: IActiveSections = {
  packetIntroduction: {isActive: false, showSideInfo: false},
  formFields: {isActive: false, showSideInfo: false},
  documentsForms: {isActive: false, showSideInfo: false},
  consent: {isActive: false, showSideInfo: false},
  tuition: {isActive: false, showSideInfo: false},
  paymentSettings: {isActive: false, showSideInfo: false},
  termsConditionals: {isActive: false, showSideInfo: false},
  formPayment: {isActive: false, showSideInfo: false}
};
