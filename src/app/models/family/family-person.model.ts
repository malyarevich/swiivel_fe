import {Person} from "../person.model";
import {StudentInfo} from "./student-info.model";
import {FileAttachment} from "./file-attachment.model";

export interface FamilyPerson {
  id: number;
  family_id: string;
  family_name: string;
  id_person: number;
  person_role: string;
  role_state: number;
  adopted: number;
  person: Person;
  student_info?: StudentInfo;
  children?: [FamilyPerson];
  parents?: [FamilyPerson];
  file_attachments?: [FileAttachment]
}