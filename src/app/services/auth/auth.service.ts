import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '@app/store';

@Injectable()

export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public login(username: string, password: string): Observable<User> {
    console.log('login');
    return this.http.post('/login', {username, password});
  }

  public logout(): void {
    localStorage.removeItem('user');
  }
}
