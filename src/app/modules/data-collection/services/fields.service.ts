import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {Field} from '../../../models/data-collection/field.model';


@Injectable()
export class FieldsService {
  constructor(private http: HttpClient) {
  }

  getCustomList() {
    return this.http.get('/proxy/schema')
      .pipe(
        map(response => response)
      );
  }

  getExistingList() {
    return this.http.get('/proxy/mapped')
      .pipe(
        map(response => response)
      );
  }

  getExistingSideBarList() {
    // TODO: temporarily
    return this.http.get(`${environment.apiFB}/sidebar?api_token=${environment.api_token}`)
      .pipe(
        map(response => response)
      );
  }

  getExistingSideBarList2() {
    // TODO: temporarily
    return this.http.get(`${environment.apiFB}/sidebar_red_267?api_token=${environment.api_token}`)
      .pipe(
        map(response => response)
      );
  }


  // getExistingSideBarList2() {
  //   //TODO: temporarily
  //   return this.http.get(`${environment.apiFB}/sidebar2?api_token=${environment.api_token}`)
  //     .pipe(
  //       map(response => response)
  //     )
  // }  }

  getRoleList() {
    return this.http.get(`/family/roles`)
      .pipe(
        map(response => response)
      );
  }

  // Get forms fields and return array of objects with fields name and fields mapped
  // [{name: string, value: string}]
  getFieldsRecursive(fields: Field[]) {

    const options: { name: string, value: string }[] = [];

    function getOptions(fields: Field[], fieldName?, fieldMapped?) {
      fields.map((field) => {
        if (field.type === 114) {
          getOptions(field.fields, field.name, field.mapped);
        }
        if (field.type == 113) {
          getOptions(
            field.fields,
            fieldName ? fieldName + ' - ' + field.name : field.name,
            fieldMapped ? fieldMapped + '|' + field.mapped : field.mapped
          );
        }
        if (field.type && field.type !== 113 && field.type !== 114) {
          options.push({
            name: fieldName ? fieldName + ' - ' + field.name : field.name,
            value: fieldMapped ? fieldMapped + '|' + field.mapped : field.mapped
          });
        }
      });
    }

    getOptions(fields);
    return options;
  }
}
