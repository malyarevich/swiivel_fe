import { FormRoundModel } from '@models/data-collection/form.model';

export interface FormManagementDocumentModel {
  _id?: string;
  analytics?: FormManagementDocumentAnalyticsModel;
  dashboard_block?: {
    access?: FormManagementDocumentUserModel[]
    created?: FormManagementDocumentUserModel,
    last_updated?: FormManagementDocumentUserModel;
    round?: FormRoundModel;
  };
  id?: number;
  name: string;
  payments?: FormManagementDocumentPaymentsModel[];
  status: string;
  type?: string;
}

export interface FormManagementDocumentUserModel {
  avatar?: string;
  date: string;
  full_name?: string;
  role_name?: string;
}

export interface FormManagementDocumentAnalyticsModel {
  circle_graph: {
    total: string;
    review_completed: string
  };
  status_numbers: {
   not_started: string;
   send_out: string;
   in_progress: string;
   incomplete: string;
   submitted: string;
   reviewed_completed: string
  };
}

export interface FormManagementDocumentPaymentsModel {
  name: string;
  sum: string;
  percent: string;
  pay_cnt: string;
  all_cnt: string;
}
