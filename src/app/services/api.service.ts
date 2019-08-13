import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';

export interface LoginData {
    username: string;
    password: string;
}

export interface User {
    username?: string;
    email?: string,
    full_name?: string,
    role?: any,
}



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) { }

  login(credentials: LoginData) {
    return this.http.post('/login', credentials)
  }

  logout() {
    return this.http.get('/logout')
  }
}
