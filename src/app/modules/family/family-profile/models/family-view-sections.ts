interface FamilyViewSection {
  name: string;
}
export enum FAMILY_VIEW_SECTIONS {
  GENERAL = 'general',
  FINANCIAL = 'financial',
  ACADEMIC = 'academic',
  BUSINESS = 'business',
  DOCUMENTS = 'documents',
}
export const familyViewSections: FamilyViewSection[] = [
  {name: FAMILY_VIEW_SECTIONS.GENERAL},
  {name: FAMILY_VIEW_SECTIONS.FINANCIAL},
  {name: FAMILY_VIEW_SECTIONS.ACADEMIC},
  {name: FAMILY_VIEW_SECTIONS.BUSINESS},
  {name: FAMILY_VIEW_SECTIONS.DOCUMENTS},
];

