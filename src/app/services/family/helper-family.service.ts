import { Injectable } from '@angular/core';
import {FamilyPerson} from "../../models/family/family-person.model";
import {Family} from "../../models/family/family.model";
import {isEmpty} from 'lodash';

@Injectable()
export class HelperFamilyService {

  constructor() { }

  getFullName(familyPerson: FamilyPerson) {
    let fullName = '';
    if(!familyPerson|| isEmpty(familyPerson)) return;
    fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
    fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
    return fullName;
  }

  getFullWithMiddleName(familyPerson: FamilyPerson) {
    let fullName = '';
    if(!familyPerson || isEmpty(familyPerson)) return;
    fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
    fullName += familyPerson.person.middle_name ? ' ' + familyPerson.person.middle_name : '';
    fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
    return fullName;
  }

  getFullFamilyAddress(family: Family) {
    let fullAddress = '';
    if(!family || isEmpty(family)) return;
      fullAddress += family.family_info.address ? family.family_info.address : '';
      fullAddress += family.family_info.state ? ', ' + family.family_info.state : '';
      fullAddress += family.family_info.city ? ', ' + family.family_info.city : '';
      fullAddress += family.family_info.zip ? ', ' + family.family_info.zip : '';
    return fullAddress;
  }
}
