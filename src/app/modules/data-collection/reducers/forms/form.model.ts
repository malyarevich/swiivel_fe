import {Field} from '../field/field.model';

export interface Form {
    _id: string;
    name: string;
    fields: Field[];
    updated_at?: string,
    created_at?: string,
    api_token?: string,
    link?: string,
    personId?: number,
    acl?
}
