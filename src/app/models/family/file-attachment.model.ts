import {FamilyPerson} from "./family-person.model";

export interface FileAttachment {
  id: number;
  fileable_id: number;
  fileable_type: string;
  title: string;
  type: string;
  format: string;
  link: string;
  updated_at: string;
  created_at: string;
  fileable?: FamilyPerson
}