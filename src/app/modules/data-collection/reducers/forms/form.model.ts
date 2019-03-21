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
    owner: object,
    permissions: Permissions[],
    status: number,
    type: number,
    status_name: string,
    type_name: string,
    created_at: string,
    updated_at: string,
}
