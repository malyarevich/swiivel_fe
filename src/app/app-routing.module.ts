import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router, NavigationCancel} from '@angular/router';
import { routes as loginRoutes } from './modules/login';
import { AuthModule, ROUTE_NOT_AUTHENTICATED, AuthGuard } from './services/auth';
import {LayoutComponent} from "./modules/layout/main-layout.component";
import {filter} from "rxjs/operators";


const routes: Routes = [
  ...loginRoutes,
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
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
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationCancel)).subscribe((event: NavigationCancel) => {
      if (event.reason === ROUTE_NOT_AUTHENTICATED) {
        router.navigate(['/login']);
      }
    });
  }
}
