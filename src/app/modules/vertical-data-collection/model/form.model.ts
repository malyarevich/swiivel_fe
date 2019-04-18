import {Field} from './field.model';
import {Permissions} from "../../../services/permission/permissions.model";
import {TuitionContract} from "../v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
import {ConsentInfo} from "../v-form-constructor/v-form-builder/v-consent/model/consent.model";
import {DocumentsModel} from "../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";
import {FormsPDFModel} from "../v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";

export interface Form {
  _id: string;
  name: string;
  fields?: Field[];
  updated_at?: string,
  created_at?: string,
  api_token?: string,
  link?: string,
  personId?: number,
  template_sql_link?: object,
  formDates?: object,
  sidebar?: Field[],
  step?: number;
  tuitionContract?: TuitionContract;
  consentInfo?: ConsentInfo[];
  chosen_way_to_create_new_form?: number;
  eligible: string;
  example_form_id?: string;
  documents?: DocumentsModel[];
  forms?: FormsPDFModel[];
  attachments?: object;
}

export interface FormSql {
  id: number,
  mongo_id: string
  name: string
  link: string
  owner_id: number,
  owner?: {
    id: number,
    full_name: string,
    role: { id: number, role_name: string }
  },
  permissions?: FormSqlPermissions[],
  status: string
  type: string
  created_at: string,
  updated_at: string,
}

interface FormSqlPermissions {
  id: number,
  user: { id: number, full_name: number }
}
