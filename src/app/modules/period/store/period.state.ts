import { Period, PeriodTable, SplitSetTable } from 'src/app/models/period/period.model';

export interface PeriodState {
  periods: Period[];
  period: Period;
  savePeriodError: { text: string, isOpen: boolean };
}
