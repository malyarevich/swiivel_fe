import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface UserLoggedResponseInterface {
    data: Object,
    status: number
}

@Injectable()
export class UserLoggedService {
    constructor(
        private readonly http: HttpClient,
    ) {
    }

    getUserLogged(): Observable<any> {
        return this.http.get('/me').pipe(
            map((response: UserLoggedResponseInterface) => {
                if (response.status) return response.data;
            })
        )
    }
}
