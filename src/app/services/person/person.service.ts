import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class PersonService {
    constructor(
        private readonly http: HttpClient,
    ) {
    }

    getPersons() : Observable<any>{
        return this.http.get('/persons').pipe(
            map((response) => response)
        )
    }
}
