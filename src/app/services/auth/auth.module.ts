import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthServiceConfig, AUTH_SERVICE_CONFIG, AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [AuthService, AuthGuard]
})
export class AuthModule {
    static forRoot(config: AuthServiceConfig): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                {
                    provide: AUTH_SERVICE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
