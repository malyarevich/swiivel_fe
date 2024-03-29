import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth.guard';
import { DashboardComponent } from '@core/components/dashboard.component';
import { LoginComponent } from '@core/components/login.component';
import { RestorePasswordComponent } from '@core/components/restore-password.component';
import { environment } from '@env/environment';
import { MainComponent } from './shared/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'prefix'},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  {
    path: 'online-form',
    loadChildren: () => import('./online-form/online-form-wrapper/online-form-wrapper.module').then(m => m.OnlineFormWrapperModule)
  },
  {
    path: 'view-form',
    component: MainComponent,
    loadChildren: () => import('./online-form/online-form-wrapper/online-form-wrapper.module').then(m => m.OnlineFormWrapperModule)
  },
  {
    path: 'form-management',
    loadChildren: () => import('./form-management/form-management.module').then(m => m.FormManagementModule)
  },
  {
    path: 'form-send',
    loadChildren: () => import('./form-send/form-send.module').then(m => m.FormSendModule)
  },
  {
    path: 'forms-dashboard',
    loadChildren: () => import('./forms-dashboard/form-table.module').then(m => m.FormTableModule)
  },
  {
    path: 'upload-review-form',
    loadChildren: () => import('./upload-review-form/upload-review-form.module').then(m => m.UploadReviewFormModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
