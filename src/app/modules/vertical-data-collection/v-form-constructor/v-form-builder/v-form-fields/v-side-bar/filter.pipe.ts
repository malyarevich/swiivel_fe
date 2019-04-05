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
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
