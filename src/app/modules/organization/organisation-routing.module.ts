import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout';
import {routes as personRoutes} from './modules/person';
import {routes as dashboardRoutes} from './modules/dashboard';
import { CreatorHeaderComponent } from './components/creator-header/creator-header.component';

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
    path: 'form-constructor',
    component: CreatorHeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../data-collection/form-constructor/form-constructor.module')
          .then(m => m.FormConstructorModule)
      },
    ]
  },
  {
    path: 'form-constructor/:id',
    component: CreatorHeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../data-collection/form-constructor/form-constructor.module')
          .then(m => m.FormConstructorModule)
      },
    ]
  },
  {
    path: 'form-management/:id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../data-collection/form-management/form-management.module')
          .then(m => m.FormManagementModule)
      },
    ]
  },
  {
    path: 'form-info/:id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../data-collection/form-info/form-info.module')
          .then(m => m.FormInfoModule)
      },
    ]
  },
  {
    path: 'form-send/:id',
    component: CreatorHeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../form-send/form-send.module').then(m => m.FormSendModule)
      }
    ]
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
        loadChildren: () => import('../upload-review-form/upload-review-form.module').then(m => m.UploadReviewFormModule),
      }
    ],
  },
  {
    path: 'view-form',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../online-form-wrapper/online-form-wrapper.module').then(m => m.OnlineFormWrapperModule),
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
