import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginData } from '../../modules/login/rest';
import { LoginDTO } from './auth.dto';
import { COMMON_STATUS } from '../../enums';
import { User } from '../../modules/login/rest';
import { LocalStorageService } from '../local-storage';
import {environment} from "../../../environments/environment";

export interface AuthServiceConfig {
    storageTokenKey: string;
    user: string;
}

export const AUTH_SERVICE_CONFIG = new InjectionToken<AuthServiceConfig>('AUTH_SERVICE_CONFIG');

@Injectable()
export class AuthService {
    constructor(
        @Inject(AUTH_SERVICE_CONFIG) private readonly config: AuthServiceConfig,
        private readonly http: HttpClient,
        private readonly localStoreService: LocalStorageService
    ) {}

    get token(): string | undefined {
        return this.localStoreService.getItem(this.config.storageTokenKey);
    }

    get user(): string | undefined {
        return this.localStoreService.getItem(this.config.user);
    }

    // login(log: LoginData): Promise<User> {
    //     this.logout();
    //     return this.http.post<LoginDTO>('auth/login', log).toPromise().then((res: LoginDTO) => {
    //         const {message, data} = res;
    //         if (res.status === COMMON_STATUS.ERROR) {
    //             throw message;
    //         } else {
    //             const {token, user} = data;
    //             const {id, username, role} = user;
    //             this.localStoreService.setItem(this.config.storageTokenKey, token);
    //             this.localStoreService.setItem(this.config.user, id);
    //
    //             return {
    //                 id,
    //                 username,
    //                 role,
    //             };
    //         }
    //     });
    // }

// test
  login(log: LoginData): Promise<User> {
    this.logout();

    let host = (environment.production) ? 'http://red.dev.codeblue.ventures' : 'http://localhost:4200';

    return this.http.get(`${host}/assets/user.json`).toPromise().then((res: LoginDTO) => {
      const {message, data} = res;
      if (res.status === COMMON_STATUS.ERROR) {
        throw message;
      } else {
        const {id, username, role, token} = data;
        this.localStoreService.setItem(this.config.storageTokenKey, token);
        this.localStoreService.setItem(this.config.user, id);
        return {
          id: id,
          username: username,
          role: role
        };
      }
    });
  }

    logout() {
        this.localStoreService.removeItem(this.config.storageTokenKey);
        this.localStoreService.removeItem(this.config.user);
    }

    checkToken (param: any): Promise<any> {
        return this.http.post<any>('auth/token/check', param).toPromise().then((res: any) => {
            const {message} = res;
            if (res.status === COMMON_STATUS.ERROR) {
                throw message;
            } else {
                return true;
            }
        });
    }

    restorePassword(email: string): Observable<any> {
        return of({});
    }
}
