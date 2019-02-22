export interface UserLogged {
    id: number,
    full_name: string,
    username: string,
    admin?: number,
    role: number | string,
    state?: string,
    city?: string,
    address?: string,
    zip?: string,
    phone?: string,
    status?: string,
    remember_token?: string,
    created_at?: string,
    updated_at?: string
}
