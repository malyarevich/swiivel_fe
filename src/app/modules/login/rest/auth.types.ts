export interface LoginData {
    username: string;
    password: string;
}

export interface User {
    id?: number;
    username?: string;
    password?: string;
    role?: string;
    token?: string;
}
