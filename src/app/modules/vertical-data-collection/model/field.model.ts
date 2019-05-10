export interface Field {
  _id: string;
  type: number;
  options: any;
  constraints: any;
  validators: any;
  name:string;
  mapped: string;
  title?:string;
  value: string;
  isValid?: boolean;
  isValidName?: boolean;
  exist?:boolean;
  fields?: Field[],
  isActive?: boolean,
  prefix?: string
}
