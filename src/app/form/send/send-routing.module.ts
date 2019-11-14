import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { SendComponent } from './send.component';

const routes: Routes = [
  {
    path: '',
    component: SendComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendRoutingModule { }
