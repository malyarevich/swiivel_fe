export interface FormStatisticModel {
  account_invites: FormStatisticInvitesModel;
  submissions_rate: FormStatisticRateModel;
  views: FormStatisticViewModel;
}

export interface FormStatisticViewModel {
  list?: FormStatisticUserModel[];
  cnt: number;
}

export interface FormStatisticRateModel {
  list?: FormStatisticUserModel[];
  percent: number;
  count_submitted: number;
  count_all: number;
}

export interface FormStatisticInvitesModel {
  accounts: {
    percent: number;
    cnt: number;
  };
  invites: {
    percent: number;
    cnt: number;
  };
}

export interface FormStatisticUserModel {
  name: string;
  date: string;
}
