export interface UserLogged {
    id: number,
    full_name: string,
    username: string,
    admin?: number,
    role: Object,
    state?: string,
    city?: string,
    address?: string,
    zip?: string,
    phone?: string,
    status?: string,
    remember_token?: string,
    permissions: {},
    created_at?: string,
    updated_at?: string
}
