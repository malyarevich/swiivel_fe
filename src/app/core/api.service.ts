import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { ApiResponse, LoginData } from '@models/api';
import { FormSearchParams } from '@models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(protected http: HttpService) {}

  public login(data: LoginData): any {
    return this.http.post('/login', {...data});
  }
  forgotPassword(email: string) {
    return this.http.post('/forgot-password', { email });
  }

  resetPassword(token: string, new_password: object) {
    return this.http.post('/reset-password', { token, new_password });
  }

  signin(email: string, password: string, uuid: string) {
    return this.http.post('/sign-in', { email, password, uuid });
  }

  getSidebarFields() {
    return this.http.get('/proxy/sidebar-fields');
  }
}
