import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DataCollectionComponent} from './data-collection.component';
import {FormNavigationBarComponent} from './form-constructor/form-navigation-bar/form-navigation-bar.component';
import {routes as constructorRoutes} from './form-constructor/constructor-routing.module';

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
            loadChildren: () => import('./form-table/form-table.module').then(m => m.FormTableModule)
          }
        ]
      },
      {
        path: 'v-form-constructor',
        component: FormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'v-form-constructor/:id',
        component: FormNavigationBarComponent,
        children: constructorRoutes
      },
      {
        path: 'online-form/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./online-form/online-form.module').then(m => m.OnlineFormModule)
          }
        ]
      },
      {
        path: 'form-info/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./form-info/form-info.module').then(m => m.FormInfoModule)
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
