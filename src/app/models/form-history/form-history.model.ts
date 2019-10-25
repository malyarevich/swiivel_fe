export interface Log {
    created_at: string;
    user: User;
    action: string;
}
export interface User {
    id: number;
    full_name: string;
    role: Role;
    avatar?: null;
}
export interface Role {
    id: number;
    role_name: string;
}  