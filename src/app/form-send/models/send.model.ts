export const formType =  {
  generic: 'generic',
  account: 'account'
};

export interface IButtonOption {
  label: string;
  value: string;
}

export const defaultButtonOptions: IButtonOption[] = [
  {
    label: 'Generic Form',
    value: formType.generic
  },
  {
    label: 'Account Form',
    value: formType.account
  }
];

export const hasNoFamily = 'hasNoFamily';
export interface IPersonFamily {
  adopted?: number;
  family_id?: string;
  family_name?: string;
  id?: number;
  id_person?: number;
  person_role?: string;
  role_state?: number;
}

export interface IMailingHouse {
  id: number;
  name: string;
  title?: string;
}

export interface IPerson {
  first_name: string;
  last_name: string;
  names?: string[];
  id: number;
  person_family?: IPersonFamily;
}

export interface IGroupAccount {
  name: string;
  key: string;
  data?: IPerson[];
}

export interface IEmailType {
  id?: number;
  release_round_id?: number;
  subject?: string;
  body?: string;
  text_link?: null;
  created_at?: string;
  updated_at?: string;
}

export interface ITypes {
  email?: IEmailType;
  mailing?: IEmailType;
}

export interface IRound {
  accounts?: IPerson[];
  end_date?: string;
  form_id?: number;
  id?: number;
  key?: string;
  name?: string;
  start_date?: string;
  types?: ITypes;
}

export const defaultAccountsList: IGroupAccount[] = [
  {
    name: 'New Students',
    key: 'newStudents',
    data: []
  },
  {
    name: 'Specific Grades',
    key: 'specificGrades',
    data: []
  },
  {
    name: 'New Families',
    key: 'newFamilies',
    data: []
  },
  {
    name: 'Current Families',
    key: 'currentFamilies',
    data: []
  },
  {
    name: 'All Parents',
    key: 'allParents',
    data: []
  }
];
