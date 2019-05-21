export interface Field {
  _id: string;
  type: number;
  options?: FieldOption | any;
  constraints?: any;
  validators?: any;
  name:string;
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
  default? : string
}
