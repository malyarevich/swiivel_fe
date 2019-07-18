import { Field } from "./field.model";
import { Permissions } from "../../services/permission/permissions.model";
import { TuitionContract } from "./v-form-constructor/v-form-builder/tuition-contract.model";
import { ConsentInfo } from "./v-form-constructor/v-form-builder/consent.model";
import { DocumentsModel } from "./v-form-constructor/v-form-builder/documents.model";
import { FormsPDFModel } from "./v-form-constructor/v-form-builder/formsPDF.model";
import { TermsConditions } from "./v-form-constructor/v-form-builder/terms-conditions.model";
import { ISubMenus } from "./v-form-constructor/v-form-publish-settings/publish-settings.model";

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
  language?: string, //Need FIXME: (type for languages)
  periodCheckboxGroup?: object,
  tuitionContract?: TuitionContract;
  consentInfo?: ConsentInfo;
  termsConditions?: TermsConditions;
  paymentSettings?: any; //Need FIXME: (create PaymentSettings)
  chosen_way_to_create_new_form?: number;
  eligible: string;
  example_form_id?: string;
  documents?: DocumentsModel[];
  forms?: FormsPDFModel[];
  attachments?: object;
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
  permissions?: FormSqlPermissions[];
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

interface FormSqlPermissions {
  id: number;
  user: { id: number; full_name: number };
}
