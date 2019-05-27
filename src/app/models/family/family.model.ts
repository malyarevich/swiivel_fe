export interface Family {
  id: number;
  name: string;
  family_id: string;
  students_count: number;
  children_count: number;
  family_info: {
    id_group: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    preferred_contact: string;
    preferred_contact_method: string;
    home_phone_number: string;
    language_spoken_at_home: string;
    family_rabbi: string;
    rabbi_phone_number: string;
    family_shul: string;
  }
}