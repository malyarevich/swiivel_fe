import {publish} from "rxjs/operators";

export interface GeneralSectionsNames {
  familyInfo: string,
  parentsInfo: string,
  paternalGrandparents: string,
  maternalGrandparents: string,
  studentsInfo: string,
  lunch: string,
  transportation: string,
}


export const generalSectionsNames: GeneralSectionsNames = {
  familyInfo: 'familyInfo',
  parentsInfo: 'parentsInfo',
  paternalGrandparents: 'paternalGrandparents',
  maternalGrandparents: 'maternalGrandparents',
  studentsInfo: 'studentsInfo',
  lunch: 'lunch',
  transportation: 'transportation',
};