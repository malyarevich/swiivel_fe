export interface Period {
  name: string;
  date_from: Date;
  date_to: Date;
  split_sets: PeriodSplitSet[];
  duration?: number;
  type?: string[];
  error?: string[];
}

export interface PeriodSplitSet {
  name: string;
  splits?: PeriodSplit[];
  split_set_id: number;
  error?: { text: string[], isBarErrorOpen: boolean, isTableErrorOpen: boolean };
}

export interface PeriodSplit {
  name: string;
  date_from: Date;
  date_to: Date;
  split_id: number;
  duration?: number;
}

