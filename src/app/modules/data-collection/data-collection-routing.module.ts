import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DataCollectionComponent} from './data-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: DataCollectionComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./forms-dashboard/form-table.module')
              .then(m => m.FormTableModule)
          }
        ]
      },
      // {
      //   path: 'form-constructor',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./form-constructor/form-constructor.module')
      //         .then(m => m.FormConstructorModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'form-constructor/:id',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./form-constructor/form-constructor.module')
      //         .then(m => m.FormConstructorModule)
      //     }
      //   ]
      // },
      // {
      //  path: 'online-form/:id',
      //  children: [
      //    {
      //      path: '',
      //      loadChildren: () => import('./online-form/online-form.module')
      //        .then(m => m.OnlineFormModule)
      //    }
      //  ]
      //},
      {
        path: 'form-info/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./form-info/form-info.module')
              .then(m => m.FormInfoModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectionRoutingModule {
}
