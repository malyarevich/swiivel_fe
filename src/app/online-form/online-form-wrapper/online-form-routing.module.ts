import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineFormWrapperComponent } from './online-form-wrapper.component';
// import { AuthGuard } from '@app/core/auth.guard';

const routes: Routes = [
  {
    path: '',
/*    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],*/
    children: [
      { path: ':mongo_id',  component: OnlineFormWrapperComponent },
      { path: '',  component: OnlineFormWrapperComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFormRoutingModule { }
