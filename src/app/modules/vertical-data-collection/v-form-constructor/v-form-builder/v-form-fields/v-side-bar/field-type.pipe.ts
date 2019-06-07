import { Pipe, PipeTransform } from '@angular/core';
import {Field} from '../../../../model/field.model';

@Pipe({
  name: 'fieldType'
})
export class FieldTypePipe implements PipeTransform {

  transform(value: Field[], args?: number): Field[] {
    if(!value||!args) return value;

    return value.filter(f=>f.type==args);
  }

}
