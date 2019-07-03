export interface Period {
  name: string;
  date_from: Date;
  date_to: Date;
  split_set?: Array<{ name: string, splits: Array<{ name: string, date_from: Date; date_to: Date, days: number }> }>;
}
