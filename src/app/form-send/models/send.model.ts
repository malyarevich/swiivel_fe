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

export interface IPersonFamily {
  adopted?: number;
  family_id?: string;
  family_name?: string;
  id?: number;
  id_person?: number;
  person_role?: string;
  role_state?: number;
}

export interface IPerson {
  first_name: string;
  last_name: string;
  id: number;
  person_family?: IPersonFamily;
}

export interface IGroupAccount {
  name: string;
  key: string;
  data?: IPerson[];
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
