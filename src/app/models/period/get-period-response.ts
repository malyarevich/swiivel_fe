import { Period } from './period.model';

export interface GetPeriodResponse {
  data: { periods: Period[], total: number };
  status: number;
}
