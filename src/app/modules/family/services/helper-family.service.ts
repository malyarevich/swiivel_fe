import { Injectable } from '@angular/core';
import {FamilyPerson} from "../../../models/family/family-person.model";

@Injectable()
export class HelperFamilyService {

  constructor() { }

  getFullName(familyPerson: FamilyPerson) {
    let fullName = '';
    fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
    fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
    return fullName;
  }

  getFullWithMiddleName(familyPerson: FamilyPerson) {
    let fullName = '';
    fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
    fullName += familyPerson.person.middle_name ? ' ' + familyPerson.person.middle_name : '';
    fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
    return fullName;
  }
}
