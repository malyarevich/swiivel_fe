export interface Field {
  _id: string;
  type: number;
  options?: FieldOption| SectionOption | any;
  constraints?: any;
  validators?: any;
  name:string;
  width?: string;
  mapped?: string;
  title?:string;
  value?: string;
  isValid?: boolean;
  isValidName?: boolean;
  exist?:boolean;
  fields?: Field[],
  isActive?: boolean,
  prefix?: string
}


export interface FieldOption {
  placeholder? : string,
  language? : string,
  text? : string,
  textPopUp? : false,
  required? : false,
  readonly? : false,
  hideLabel? : false,
  unique? : false,
  value? : string,
  autoComplete? : false,
  size? : number,
  default? : string,
  space?: number,
  shapeStrokeValue: number,
  shapeStrokeColor: string,
  dividerStyle?: string

}

export interface SectionOption {
  size? : number,
  settings: SectionOptionSettings,
  conditionLogic: any
}

export interface SectionOptionSettings {
  groupPresent?: string,
  isSupportText?: boolean,
  isSupportTextData?: string,
  isDirectlyDisplayed?: boolean,
  isMakeExpandButtonVisible?: boolean,
  isHidden: boolean
}
