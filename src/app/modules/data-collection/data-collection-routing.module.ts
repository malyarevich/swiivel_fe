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
