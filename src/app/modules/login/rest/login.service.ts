import { Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth';
import { LoginData, User } from './auth.types';

@Injectable()
export class LoginService {
    constructor(
        private readonly authService: AuthService,
    ) {}

    login(data: LoginData): Promise<User> {
        const {username, password} = data;
        const obj: LoginData = {
            username,
            password
        };

        return this.authService.login(obj);
    }

    logout(): void {
        this.authService.logout();
    }
}
