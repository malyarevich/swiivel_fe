import { NgModule } from '@angular/core';
import { FormComponent } from '@app/shared/form.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { SendComponent } from './send.component';

const routes: Routes = [
  {
    path: '',
    // component: FormComponent,
    component: SendComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    // children: [
    //   { path: ':id',  component: SendComponent },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendRoutingModule { }
