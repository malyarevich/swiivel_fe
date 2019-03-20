import {Field} from '../field/field.model';
import {Permissions} from "../../../../services/permission/permissions.model";

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
    formDates?:object
}

export interface FormSql {
    id: number,
    mongo_id: string,
    name: string,
    link: string,
    full_name: string,
    role_name: string,
    permissions: Permissions[],
    status: number,
    type: number,
    created_at: string,
    updated_at: string,
}
