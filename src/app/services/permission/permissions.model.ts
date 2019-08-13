export interface Permissions {
    id?: number;
    user_id: number;
    entity: string;
    entity_id: number;
    view?: number;
    edit?: number;
    delete?: number;
    access?: number;
    full?: number;
    created_at?: string;
    updated_at?: string;
}

export interface UserLoggedPermissions {
    view?: number;
    edit?: number;
    delete?: number;
    access?: number;
    full?: number;
}
