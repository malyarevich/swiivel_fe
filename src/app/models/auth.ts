export interface User {
  username?: string;
  email?: string;
  full_name?: string;
  role?: string;
  access_token?: string;
  expires_at?: number;
}

export interface Email {
  email: string;
}
