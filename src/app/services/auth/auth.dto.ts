export interface LoginDTO {
    id: number;
    token: string;
    name: string;
    status: string;
    message?: any;
    data?: any;
}