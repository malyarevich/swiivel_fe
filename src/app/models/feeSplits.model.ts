export interface FeeSplits {
  amount: number;
  due_on: string;
  date_to: string;
  date_from: string;
  id: number;
  name: string;
  isSelected?: boolean;
  splitPay?: { input: number, param: string };
}
