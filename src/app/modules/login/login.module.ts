import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';
import {InputContainerModule} from '../../components/form-components/input-container';
import {LoginComponent, LoginFormComponent, RestoreFormComponent} from './components';
import {SharedStoreModule} from '../../store';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        InputContainerModule.forRoot(),
        SharedStoreModule
    ],
    declarations: [LoginComponent, LoginFormComponent, RestoreFormComponent],
    providers: []
})

export class LoginModule {}
