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
  {
    path: 'data-collection',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../data-collection/data-collection.module').then(m => m.DataCollectionModule),

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
  {
    path: 'upload-review-form',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../upload-review-form/upload-review-form.module').then(m => m.UploadReviewFormModule)
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
