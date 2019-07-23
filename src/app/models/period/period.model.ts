export interface Period {
  name: string;
  date_from: Date;
  date_to: Date;
  duration?: number;
}

export interface PeriodSplitSet {
  name: string;
  splits?: PeriodSplit[];
  split_set_id: number;
}

export interface PeriodSplit {
  name: string;
  date_from: Date;
  date_to: Date;
  split_id: number;
  duration?: number;
}
