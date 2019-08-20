export interface Period {
  name: string;
  date_from: Date;
  date_to: Date;
  split_sets: PeriodSplitSet[];
  duration?: number;
  type?: string[];
  error?: string[];
  id?: number;
}

export interface PeriodSplitSet {
  name: string;
  splits?: PeriodSplit[];
  split_set_id: number;
  error?: { text: string[], isBarErrorOpen: boolean, isTableErrorOpen: boolean };
  id?: number;
}

export interface PeriodSplit {
  name: string;
  date_from: Date;
  date_to: Date;
  split_id: number;
  duration?: number;
  type?: { name: string, color: string };
}

export interface PeriodTable {
  name: string;
  date_from: Date;
  date_to: Date;
  dataTableType: string;
  period_id: number;
  open: boolean;
  duration?: number;
  type?: { name: string, color: string };
  bkgColor?: string;
}

export interface SplitSetTable {
  dataTableType: string;
  splitSets: {
    name: string,
    splits?: PeriodSplit[],
    split_set_id: number,
  };
  open: boolean;
  period_id: number;
  isAllSelected: boolean;
  selectedSplitSetId: boolean;
  type?: { name: string, color: string };
}


