import {Field} from './field.model';
import {Permissions} from "../../../services/permission/permissions.model";

export interface Form {
    _id: string;
    name: string;
    fields: Field[];
    updated_at?: string,
    created_at?: string,
    api_token?: string,
    link?: string,
    personId?: number,
    template_sql_link?: object,
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
