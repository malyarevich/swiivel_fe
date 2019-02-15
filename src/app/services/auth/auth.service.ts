import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {LoginData} from '../../modules/login/rest';
import {LoginDTO} from './auth.dto';
import {User} from '../../modules/login/rest';
import {LocalStorageService} from '../local-storage';

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
    ) {
    }

    get token(): string | undefined {
        return this.localStoreService.getItem(this.config.storageTokenKey);
    }

    get user(): string | undefined {
        return this.localStoreService.getItem(this.config.user);
    }

    login(log: LoginData): Promise<User> {
        if (this.token) this.logout();

        return this.http.post('/login', log).toPromise().then((res: LoginDTO | any) => {
            if (!res.status) {
                throw res.error;
            } else {
                const {username, email, full_name, role, access_token} = res.data;
                this.localStoreService.setItem(this.config.storageTokenKey, access_token);
                this.localStoreService.setItem(this.config.user, {username, email, full_name, role});
                return {
                    username: username,
                    email: email,
                    full_name: full_name,
                    role: role,
                };
            }
        });
    }

    logout() {
        this.http.get('/logout').toPromise().then((res) => {
        });
        this.localStoreService.removeItem(this.config.storageTokenKey);
        this.localStoreService.removeItem(this.config.user);
    }
}
