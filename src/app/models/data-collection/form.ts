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
  documentsForms?: any;
  forms?: any;
  packetIntroduction?: IPacketIntroduction;
  payment?: any;
  paymentSettings?: any;
  termsConditions?: any;
  tuitionContract?: any;
  pagesPercents?: any;
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

export interface IPacketIntroduction {
  // packets: [
  //   {
  //     id: string;
  //     text: {
  //       value: string;
  //     },
  //     title: string;
  //   }
  // ],
  content?: string;
  sectionName?: string;
  sectionWidth?: string;
};

export interface ISectionTab {
  _id?: string;
  id?: string;
  name?: string;
  text?: {
    value: string;
  };
  title?: string;
  checkbox?: {
    checked?: boolean;
    isActive?: boolean;
    text?: string;
  }
  signature?: ISignature;
}

export interface ISignature {
  eType?: string;
  isBothParents?: boolean;
  isRequire?: boolean;
  signed?: {
    fathers?: boolean;
    mothers?: boolean;
    parents?: boolean;
  }
  type?: string;
}