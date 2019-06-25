import { FeeGroups } from './feeGroups.model';
import { FeeSplits } from './feeSplits.model';

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
