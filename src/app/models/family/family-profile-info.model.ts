export interface FamilyProfileInfo {
  address: {
    homeAddress: string;
    city: string;
    zipCode: string;
  };
  contacts: {
    preferredContact: string;
    contactNumber: string;
    homePhoneNumber: string;
  };
  customFields: {
    languageSpoken: string;
    familyRabbi: string;
    familyRabbiPhone: string;
    familyShul: string;
  }
}