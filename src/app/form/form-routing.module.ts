import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { FormComponent } from './form.component';


const routes: Routes = [
  {
    path: ':formId',
    component: FormComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
      }, {
        path: 'send',
        loadChildren: () => import('@form-send/form-send.module').then(m => m.FormSendModule)
      }, {
        path: 'receive',
        loadChildren: () => import('./receive/receive.module').then(m => m.ReceiveModule)
      }, {
        path: '',
        redirectTo: 'create'
      }
    ],
  }, {
    path: '**',
    redirectTo: 'new'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
