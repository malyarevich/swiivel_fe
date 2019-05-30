import { Pipe, PipeTransform } from '@angular/core';
import {Field} from "../../../../model/field.model";
import {FormSql} from "../../../../model/form.model";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText= searchText.toLowerCase();
    return items.filter( it => {
      // if(it.type==113) {
      //   return it.fields.filter(f=>f.name.toLowerCase().includes(searchText))
      // }
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
