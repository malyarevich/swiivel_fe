import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router, NavigationCancel} from '@angular/router';
import {routes as loginRoutes} from './modules/login';
import {ROUTE_NOT_AUTHENTICATED, AuthGuard} from './services/auth';
import {filter} from "rxjs/operators";


const routes: Routes = [
  ...loginRoutes,
  {
    path: 'organization',
    canActivate: [AuthGuard],
    loadChildren: './modules/organization/organization.module#OrganizationModule'
  },
  {
    path: 'data-collection',
    loadChildren: './modules/data-collection/data-collection.module#DataCollectionModule',
    data: { preload: true}
  },
  {
    path: '**',
    redirectTo: '/organization',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
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
