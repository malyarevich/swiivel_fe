export interface Period {
  name: string;
  date_from: Date;
  date_to: Date;
  duration?: number;
  split_set?: PeriodSplitSet[];
}

export interface PeriodSplitSet {
  name: string;
  splits?: PeriodSplit[];
}

export interface PeriodSplit {
  name: string;
  date_from: Date;
  date_to: Date;
}
