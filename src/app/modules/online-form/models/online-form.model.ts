export interface ICurrentPosition {
  page: string;
  tab: number;
}

export interface IFormNavigationState {
  page: string;
  //TODO: fix type
  tabs?: any;
}

export const defaultCurrentPosition: ICurrentPosition = {
  page: '',
  tab: 0
}
