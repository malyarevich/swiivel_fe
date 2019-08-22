import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { environment } from '@env/environment';
import { MainComponent } from '@core/components/main.component';
import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { AuthGuard } from '@core/auth.guard';
import { DashboardComponent } from '@core/components/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '',  component: DashboardComponent, pathMatch: 'full' },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
