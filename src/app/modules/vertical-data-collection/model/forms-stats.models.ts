interface FormsRate {
  total: number;
  month: number;
  today: number
}

export interface FormsViewsRate extends FormsRate {
}

export interface FormsInvitesRate {
  invites: FormsRate;
  submissions: FormsRate;
}