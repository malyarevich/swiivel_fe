import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { routes as loginRoutes } from './modules/login';
import { AuthModule, ROUTE_NOT_AUTHENTICATED, AuthGuard } from './services/auth';
import {LayoutComponent} from "./modules/layout/main-layout.component";


const routes: Routes = [
  ...loginRoutes,
  {
    path: 'dashboard',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    // children: dashboardRoutes
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
