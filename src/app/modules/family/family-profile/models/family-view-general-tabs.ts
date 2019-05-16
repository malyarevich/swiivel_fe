export interface FamilyViewGeneralTab {
  name: string;
}
export enum FAMILY_VIEW_GENERAL_TABS {
  ALL = 'all',
  PARENTS = 'parents',
  STUDENTS = 'students',
  CHILDREN = 'children',
  GRANDPARENTS = 'grandparents',
  EXTENDED = 'extended',
}
export const familyViewGeneralTabs: FamilyViewGeneralTab[] = [
  {name: FAMILY_VIEW_GENERAL_TABS.ALL},
  {name: FAMILY_VIEW_GENERAL_TABS.PARENTS},
  {name: FAMILY_VIEW_GENERAL_TABS.STUDENTS},
  {name: FAMILY_VIEW_GENERAL_TABS.CHILDREN},
  {name: FAMILY_VIEW_GENERAL_TABS.GRANDPARENTS},
  {name: FAMILY_VIEW_GENERAL_TABS.EXTENDED},
];

