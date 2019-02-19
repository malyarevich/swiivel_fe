export interface Field {
  _id: string;
  type: number;
  option: any;
  constraints: any;
  validators: any;
  name:string;
  mapped: string;
  title?:string;
  value: string;
}
