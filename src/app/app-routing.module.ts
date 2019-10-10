import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routes as loginRoutes} from './modules/login';
import {AuthGuard} from '@services/auth';
import { environment } from 'src/environments/environment.prod';
import { MainComponent } from './shared/main.component';

const routes: Routes = [
  ...loginRoutes,
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/organization/organization.module').then(m => m.OrganizationModule)
  },

  {
    path: 'online-form',
    loadChildren: () => import('./modules/online-form/online-form.module').then(m => m.OnlineFormModule)
  },

  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
