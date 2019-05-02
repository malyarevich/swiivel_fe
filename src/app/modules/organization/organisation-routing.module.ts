import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout';
import {routes as personRoutes} from './modules/person';
import {routes as dashboardRoutes} from './modules/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: dashboardRoutes,
  },
  {
    path: 'persons',
    component: LayoutComponent,
    children: personRoutes,
  },

  // Depreciated
  // {
  //     path: 'data-collection',
  //     component: LayoutComponent,
  //     children: [
  //         {
  //             path: '',
  //             loadChildren: '../data-collection/data-collection.module#DataCollectionModule',
  //
  //         }
  //     ],
  // },
  {
    path: 'vertical-data-collection',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../vertical-data-collection/vertical-data-collection.module#VerticalDataCollectionModule',

      }
    ],
  },
  {
    path: 'payer-accounts',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../payer-accounts/payer-accounts.module#PayerAccountsModule',
      }
    ],
  },
  {
    path: 'online-form/:id',
    children: [
      {
        path: '',
        loadChildren: '../online-form/online-form.module#OnlineFormModule',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule {
}
