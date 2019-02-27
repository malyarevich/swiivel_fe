import {FieldClass} from './field';


export class Form {
  constructor(
    public name: string = '',
    public fields: FieldClass[]=[],
    public api_token: string = '123',
    public _id?: string,
    public created_at?: string,
    public updated_at?: string,
    public value?: string) {
  }
}
