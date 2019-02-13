import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrButtonModule, ClrFormsModule, ClrIconModule, ClrLoadingModule} from '@clr/angular';
import { AuthModule } from '../../services/auth';
import { LoginRoutingModule } from './login-routing.module';
import { InputContainerModule } from '../../components/form-components/input-container';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer, Effects } from './store';
import { LoginService } from './rest';

import { LoginComponent, LoginFormComponent, RestoreFormComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        ClrFormsModule,
        // ClrFormsNextModule,
        ClrIconModule,
        ClrButtonModule,
        ClrLoadingModule,
        AuthModule,
        InputContainerModule,
        StoreModule.forFeature('user', reducer),
        EffectsModule.forFeature([Effects])
    ],
    declarations: [LoginComponent, LoginFormComponent, RestoreFormComponent],
    providers: [LoginService]
})
export class LoginModule {}
