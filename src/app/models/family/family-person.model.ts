import {Person} from "../person.model";

export interface FamilyPerson {
  id: number;
  family_id: string;
  family_name: string;
  id_person: number;
  person_role: string;
  role_state: number;
  adopted: number;
  person: Person;
}