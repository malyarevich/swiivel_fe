import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DataCollectionComponent } from '@app/modules/data-collection/data-collection.component';
import { AuthGuard } from '@core/auth.guard';
import { DashboardComponent } from '@core/components/dashboard.component';
import { LoginComponent } from '@core/components/login.component';
import { MainComponent } from '@core/components/main.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { environment } from '@env/environment';
import { routes as dataCollectionRoutes } from './modules/data-collection/data-collection-routing.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent
  },
  // todo: delete after work routing
  {
    path: 'data-collection',
    component: DataCollectionComponent,
    children: dataCollectionRoutes
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'dashboard',  component: DashboardComponent, pathMatch: 'prefix'
      },
      {
        path: 'form-creator',
        loadChildren: () => {
          return import('./form-creator/form-creator.module').then(mod => {
            return mod.FormCreatorModule;
          });
        }
      }
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
