import {Field} from './field';


export class Form {
  constructor(
    public name: string = '',
    public fields: Field[]=[{
      'type': 101,
      'name': 'Short Text Field',

      'options': {
        'required': 'boolean',
        'readonly': 'boolean',
        'hideLabel': 'boolean',
        'value': 'string',
        'autoComplete': 'boolean',
        'size': 'integer',
        'default': 'string',
        'placeholder': 'string'
      },
      'constraints': [
      ],
      'validators': [
      ],
      'mapped': 'string'
    }],
    public api_token: string = '123',
    public _id?: string,
    public created_at?: string,
    public updated_at?: string,
    public value?: string) {
  }
}
