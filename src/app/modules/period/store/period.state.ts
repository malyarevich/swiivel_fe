import { Period, PeriodSplitSet } from '../../../models/period/period.model';

export interface PeriodState {
  period: Period;
  splitSet: PeriodSplitSet[];
}

