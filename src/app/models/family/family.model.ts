import {FamilyProfileInfo} from "./family-profile-info.model";

export interface Family {
  _id: string;
  name: string;
  profile: FamilyProfileInfo;
}

export const initFamily: Family = {
  _id: '',
  name: '',
  profile: {
    address: {
      homeAddress: '',
      city: '',
      zipCode: '',
    },
    contacts: {
      preferredContact: '',
      contactNumber: '',
      homePhoneNumber: '',
    },
    customFields: {
      languageSpoken: '',
      familyRabbi: '',
      familyRabbiPhone: '',
      familyShul: '',
    }
  },
};