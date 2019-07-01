import {Fee} from "./fee.model";

export interface ApiResponse {
    status: number,
    data?: any[],
    errors?
}

export interface MasterFeesResponse {
  status: number,
  data?: {
    total: number;
    fees: Fee[];
  },
  errors?
}