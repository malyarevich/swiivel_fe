export interface LoginData {
  username: string;
  password: string;
}

export interface Error {
  error: string | null;
}

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

export interface State {
  user: User | null;
  passwordRestored: boolean;
  isLoading: boolean;
  error: Error;
}
