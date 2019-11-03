import { NgModule } from '@angular/core';
import { FormComponent } from '@app/shared/form.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { FormSendComponent } from './form-send.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id',  component: FormSendComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSendRoutingModule { }