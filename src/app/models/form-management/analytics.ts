export interface Log {
    created_at: string;
    user:       User;
    action:     string;
}

export interface User {
    id:        number;
    full_name: string;
    role:      Role;
    avatar:    null;
}

export interface Role {
    id:        number;
    role_name: string;
}

export interface Round {
    form_id: string;
    name: string;
    start_date: string;
    end_date: string;
}