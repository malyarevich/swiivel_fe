export interface FeeGroups {
  id: number;
  name: string;
}

export interface FeeSplits {
  amount: number;
  due_on: string;
  date_to: string;
  date_from: string;
  id: number;
  name: string;
  isSelected?: boolean;
  splitPay?: { input: number, param: string };
  payment?: number;
}

export interface Fee {
  amount: string;
  backgroundWhite?: boolean;
  id: number;
  description: string;
  name: string;
  is_percentage: number;
  groups: FeeGroups[];
  open: boolean;
  period_id: number;
  period_name: string;
  recipient_id: number;
  recipient_name: string;
  splits: FeeSplits[];
  type?: string;
  template_name: string;
  template_id: number;
  isSelected?: boolean;
  isActive?: boolean;
  splitFields?: { input: number, param: string};
  totalForPay: number;
}
