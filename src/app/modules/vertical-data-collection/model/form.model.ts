import {Field} from './field.model';
import {Permissions} from "../../../services/permission/permissions.model";
import {TuitionContract} from "../v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
import {DocumentsModel} from "../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";

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
    formDates?:object,
    sidebar?: Field[],
    step?: number;
    tuitionContract?: TuitionContract;
    chosen_way_to_create_new_form?: number;
    eligible: string;
    example_form_id?: string;
    documents?: DocumentsModel[];
    attachments?: object;
}

export interface FormSql {
    id: number,
    mongo_id: string
    name: string
    link: string
    owner_id: number,
    permissions: Permissions[],
    status: string
    type: string
    created_at: string,
    updated_at: string,
}
