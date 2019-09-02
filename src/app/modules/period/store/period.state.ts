import { Period } from 'src/app/models/period/period.model';

export interface PeriodState {
  periods: Period[];
  period: Period;
  savePeriodError: { text: string, isOpen: boolean };
  editPeriodId: number;
  isPeriodsLoading: boolean;
}
