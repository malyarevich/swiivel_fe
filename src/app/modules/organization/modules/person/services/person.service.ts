import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from '../../../../../../environments/environment';

@Injectable()
export class PersonService {

  params = new HttpParams().set('api_token', environment.api_token);
  SERVER_URL = environment.api;
    constructor(
        private readonly http: HttpClient,
    ) {
    }

    getPersons() : Observable<any>{
        return this.http.get('/persons').pipe(
            map((response) => response)
        )
    }

  getFormsList(personId:number): Observable<any> {
    return this.http.get(this.SERVER_URL+'/form/person/'+personId ,{params: this.params})
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }



}
