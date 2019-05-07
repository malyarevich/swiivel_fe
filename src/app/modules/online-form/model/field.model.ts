export interface Field {
  _id: string;
  type: number;
  options: Options;
  constraints: any;
  validators: any[];
  name:string;
  mapped: string;
  title?:string;
  value: string;
  isValid?: boolean;
  isValidName?: boolean;
  exist?:boolean;
  fields?: Field[]
}

interface Options {
  autoComplete: boolean
  default: string
  hideLabel: boolean
  isValidator: boolean
  language: string
  placeholder: string
  readonly: boolean
  required: boolean
  size: number
  text: string
  textPopUp: boolean
  unique: boolean
  value: string
}
