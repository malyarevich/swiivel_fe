import {Fee} from './fee';

export interface LoginData {
  username: string;
  password: string;
}

export interface ApiResponse {
  status: number;
  data?: any;
  errors?: any;
}

export interface MasterFeesResponse {
  status: number;
  data?: {
    total: number;
    fees: Fee[];
  };
  errors?;
}
