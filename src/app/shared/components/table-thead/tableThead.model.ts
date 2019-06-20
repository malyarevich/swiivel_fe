import { SORT_ORDER } from '../../../enums/sort-order';

export interface TableThead {
  id?: string;
  position?: string;
  search?: boolean;
  sort?: boolean;
  sortOrder?: SORT_ORDER.ASC | SORT_ORDER.DESC;
  title?: string;
  width?: string;
  longLeftPadding?: boolean;
  longRightPadding?: boolean;
}
