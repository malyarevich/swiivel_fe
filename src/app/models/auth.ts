export interface User {
  username?: string;
  email?: string;
  full_name?: string;
  role?: string;
  access_token?: string;
  expires_at?: number;
  permissions?: {
    form?: {[key: number]: {
      view: number,
      edit: number,
      delete: number,
      access: number,
      full: number
    }}
    system?: [
      {[key: number]: {
        view: number,
        edit: number,
        delete: number,
        access: number,
        full: number
      }}
    ]
  }
}

export interface Email {
  email: string;
}
