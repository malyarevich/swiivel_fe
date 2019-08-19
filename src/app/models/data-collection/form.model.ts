import { Field } from './field.model';
import { Permissions } from '@services/permission/permissions.model';
import { TuitionContract } from './form-constructor/form-builder/tuition-contract.model';
import { ConsentInfo } from './form-constructor/form-builder/consent.model';
import { DocumentsModel } from './form-constructor/form-builder/documents.model';
import { FormsPDFModel } from './form-constructor/form-builder/formsPDF.model';
import { TermsConditions } from './form-constructor/form-builder/terms-conditions.model';
import { ISubMenus } from './form-constructor/form-publish-settings/publish-settings.model';
import { IActiveSections } from './form-constructor/form-builder/active-section.model';
import { DocumentsFormsModel } from './form-constructor/form-builder/documents-forms.model';

export interface Form {
  _id: string;
  name: string;
  fields?: Field[];
  updated_at?: string;
  created_at?: string;
  api_token?: string;
  link?: string;
  personId?: number;
  template_sql_link?: object;
  formDates?: object;
  sidebar?: Field[];
  step?: number;
  publish_settings?: {
    state: ISubMenus;
    online_config: object;
    pdf_config: object;
  };
  language?: string; // Need FIXME: (type for languages)
  periodCheckboxGroup?: object;
  tuitionContract?: TuitionContract;
  consentInfo?: ConsentInfo;
  termsConditions?: TermsConditions;
  paymentSettings?: any; // Need FIXME: (create PaymentSettings)
  chosen_way_to_create_new_form?: number;
  eligible: string;
  example_form_id?: string;
  documentsForms?: DocumentsFormsModel;
  documents?: DocumentsModel[];
  forms?: FormsPDFModel[];
  attachments?: object;
  activeSections?: IActiveSections;
  fieldsData?: Map<string, any>;
  formPeriods?: object;
  // FIXME: when back-end will complete
  isOpened?: boolean;
}

export interface FormSql {
  id: number;
  mongo_id: string;
  name: string;
  link: string;
  owner_id: number;
  owner?: {
    id: number;
    full_name: string;
    role: { id: number; role_name: string };
  };
  // permissions?: FormSqlPermissions[];
  permissions?: Permissions[];
  status: string;
  publish_settings?: {
    state: ISubMenus;
    online_config: object;
    pdf_config: object;
  };
  type: string;
  created_at: string;
  updated_at: string;
}

// TODO: remove it unused interface after refactoring
interface FormSqlPermissions {
  id: number;
  user: { id: number; full_name: number };
}
