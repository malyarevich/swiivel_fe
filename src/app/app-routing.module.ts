import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routes as loginRoutes} from './modules/login';
import {AuthGuard} from './services/auth';


const routes: Routes = [
  ...loginRoutes,
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/organization/organization.module').then(m => m.OrganizationModule)
  },

  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
