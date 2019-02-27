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
}
