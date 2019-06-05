import {Field} from './field.model';
import {Permissions} from "../../../services/permission/permissions.model";
import {TuitionContract} from "../v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
import {ConsentInfo} from "../v-form-constructor/v-form-builder/v-consent/model/consent.model";
import {DocumentsModel} from "../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";
import {FormsPDFModel} from "../v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";
import {TermsConditions} from "../v-form-constructor/v-form-builder/v-terms-conditions/model/terms-conditions.model";
import { ISubMenus } from '../v-form-constructor/v-form-publish-settings/models/publish-settings';

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
  publish_settings?: {
    state: ISubMenus,
    online_config: object,
    pdf_config: object,
  };
  tuitionContract?: TuitionContract;
  consentInfo?: ConsentInfo;
  termsConditions?: TermsConditions;
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
  publish_settings?: {
    state: ISubMenus,
    online_config: object,
    pdf_config: object,
  };
  type: string
  created_at: string,
  updated_at: string,
}

interface FormSqlPermissions {
  id: number,
  user: { id: number, full_name: number }
}
