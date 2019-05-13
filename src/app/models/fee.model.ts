import { FeeGroups } from './feeGroups.model';
import { FeeSplits } from './feeSplits.model';

export interface Fee {
  amount: string;
  id: number;
  description: string;
  name: string;
  is_percentage: number;
  groups: FeeGroups[];
  period_id: number;
  period_name: string;
  recipient_id: number;
  recipient_name: string;
  splits: FeeSplits[];
  template_name: string;
  template_id: number;
}
