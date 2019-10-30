import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadReviewFormComponent } from '@app/upload-review-form/upload-review-form.component';
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
    loadChildren: () => import('./online-form/online-form-wrapper/online-form-wrapper.module').then(m => m.OnlineFormWrapperModule)
  },
  {
    path: 'form-creator',
    loadChildren: () => import('./form-creator/form-creator.module').then(m => m.FormCreatorModule)
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
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
