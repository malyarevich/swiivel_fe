export interface menuItemModel {
  title: string;
  target: number;
  isActive: boolean;
  scrollTarget: string
}

export const menu = {
  basic:<menuItemModel>{
    title: 'Basic Form Information',
    target: 1,
    isActive: true,
    scrollTarget: 'basicInfo'
  },
  period:<menuItemModel>{
    title: 'Period',
    target: 2,
    isActive: true,
    scrollTarget: 'period'
  },
  dates:<menuItemModel>{
    title: 'Form Dates',
    target: 3,
    isActive: true,
    scrollTarget: 'formDates'
  },
  eligible:<menuItemModel>{
    title: 'Eligible Accounts',
    target: 4,
    isActive: true,
    scrollTarget: 'eligibleAccounts'
  },

};
export const menuStarted = {
  basic:<menuItemModel>{
    title: 'Basic Form Information',
    target: 1,
    isActive: true,
    scrollTarget: 'basicInfo'
  },
  period:<menuItemModel>{
    title: 'Period',
    target: 2,
    isActive: false,
    scrollTarget: 'period'
  },
  dates:<menuItemModel>{
    title: 'Form Dates',
    target: 3,
    isActive: false,
    scrollTarget: 'formDates'
  },
  eligible:<menuItemModel>{
    title: 'Eligible Accounts',
    target: 4,
    isActive: false,
    scrollTarget: 'eligibleAccounts'
  },

};


