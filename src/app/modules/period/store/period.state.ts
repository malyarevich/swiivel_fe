import { Period } from '../../../models/period/period.model';

export interface PeriodState {
  periods: Period[];
  period: Period;
  savePeriodError: { text: string, isOpen: boolean };
}
