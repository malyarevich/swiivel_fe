import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '@app/store';
import {environment} from '../../../environments/environment';

@Injectable()

export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post('/login', {username, password});
  }

  public logout(): void {
    localStorage.removeItem('user');
  }
}
