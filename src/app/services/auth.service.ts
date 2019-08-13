import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {LoginData} from '@modules/login/rest';
import {User} from '@modules/login/rest';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AuthServiceConfig {
    storageTokenKey: string;
    user: string;
}

export interface LoginDTO {
    status?: number;
    error?: any;
    data?: any;
}

export const AUTH_SERVICE_CONFIG = new InjectionToken<AuthServiceConfig>('AUTH_SERVICE_CONFIG');

@Injectable()
export class AuthService {
    constructor(
        @Inject(AUTH_SERVICE_CONFIG) private readonly config: AuthServiceConfig,
        private api: ApiService
    ) {
    }

    get token(): string | undefined {
        return window.localStorage.getItem(this.config.storageTokenKey);
    }

    get user(): string | undefined {
        return window.localStorage.getItem(this.config.user);
    }

    login(log: LoginData): Observable<User> {
      if (this.token) this.logout();
      return this.api.login(log).pipe(
        map((res: LoginDTO | any) => {
          if (!res.status) {
              throw res.error;
          } else {
              const {username, email, full_name, role, access_token} = res.data;
              window.localStorage.setItem(this.config.storageTokenKey, access_token);
              window.localStorage.setItem(this.config.user, JSON.stringify({username, email, full_name, role}));
              return <User>{
                  username: username,
                  email: email,
                  full_name: full_name,
                  role: role,
              };
          }
        })
      )
    }

    logout() {
      this.api.logout().subscribe(() => {
        window.localStorage.removeItem(this.config.storageTokenKey);
        window.localStorage.removeItem(this.config.user);
      })
    }
}
