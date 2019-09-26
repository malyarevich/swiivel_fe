import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineFormComponent } from './online-form.component';
import { MainComponent } from '@app/shared/main.component';
import { AuthGuard } from '@app/core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':mongo_id',  component: OnlineFormComponent },
      { path: '',  component: OnlineFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFormRoutingModule { }
