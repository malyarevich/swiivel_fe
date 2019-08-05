import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout';
import {routes as personRoutes} from './modules/person';
import {routes as dashboardRoutes} from './modules/dashboard';
import {routes as familyRoutes} from '../family';

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
        loadChildren: () => import('../vertical-data-collection/vertical-data-collection.module').then(m => m.VerticalDataCollectionModule),

      }
    ],
  },
  {
    path: 'payer-accounts',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../payer-accounts/payer-accounts.module').then(m => m.PayerAccountsModule),
      }
    ],
  },
  {
    path: 'online-form/:id',
    children: [
      {
        path: '',
        loadChildren: () => import('../online-form/online-form.module').then(m => m.OnlineFormModule),
      }
    ],
  },
  {
    path: 'family',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../family/family.module').then(m => m.FamilyModule),
      }
    ],
  },
  {
    path: 'period',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../period/period.module').then(m => m.PeriodModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule {
}
