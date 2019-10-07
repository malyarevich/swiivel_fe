export interface LoginData {
  username: string;
  password: string;
}

export interface ApiResponse {
  status: number;
  data?: any;
  errors?: any;
}
