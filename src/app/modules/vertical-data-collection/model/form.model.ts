import { Field } from "./field.model";
import { Permissions } from "../../../services/permission/permissions.model";
import { ConsentInfo } from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/consent.model";
import { DocumentsModel } from "../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";
import { FormsPDFModel } from "../v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";
import { ISubMenus } from "../model/publish-settings.model";
import { PaymentSettings } from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/payment-settings.model";
import {IActiveSections} from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";
import {TuitionContract} from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/tuition-contract.model";
import {TermsConditions} from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/terms-conditions.model";
import {DocumentsFormsModel} from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model";

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
  language?: string; //Need FIXME: (type for languages)
  periodCheckboxGroup?: {
    primary1: boolean;
    primary2: boolean;
    middle: boolean;
    height: boolean;
  };
  formPeriods?: object;
  sidebar?: Field[];
  step?: number;
  publish_settings?: {
    state: ISubMenus;
    online_config: object;
    pdf_config: object;
  };
  tuitionContract?: TuitionContract;
  consentInfo?: ConsentInfo;
  termsConditions?: TermsConditions;
  paymentSettings?: PaymentSettings;
  chosen_way_to_create_new_form?: number;
  eligible: string;
  example_form_id?: string;
  documentsForms?: DocumentsFormsModel;
  documents?: DocumentsModel[];
  forms?: FormsPDFModel[];
  attachments?: object;
  activeSections?: IActiveSections;
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
