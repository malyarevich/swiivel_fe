export interface Form {
  id: number;
  _id: any;
  mongo_id: string;
  name: string;
  link: string;
  owner_id: number;
  owner?: {
    id: number;
    full_name: string;
    role: { id: number; role_name: string };
  };
  permissions?: FormPermissions[];
  status: string;
  publish_settings?: {
    state: ISubMenus;
    online_config: object;
    pdf_config: object;
  };
  type: string;
  created_at: string;
  updated_at: string;
  isSelected?: boolean;
  sharedUrl?: string;
  fields?: any;
  fieldsData: object;
  attachments?: any;
  consentInfo?: any;
  documents?: any;
  forms?: any;
  paymentSettings?: any;
  termsConditions?: any;
  tuitionContract?: any;
}

interface FormPermissions {
  id: number;
  user: { id: number; full_name: number };
}

export interface ISubMenus {
  settings?: {
    online: boolean;
    pdf: boolean;
  };
}
