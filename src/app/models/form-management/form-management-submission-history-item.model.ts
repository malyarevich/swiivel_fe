import { UserItem } from '@models/user-item';

export interface FormManagementSubmissionHistoryItemModel  {
  created_at: string;
  action: string;
  description: string;
  person: UserItem;
}

