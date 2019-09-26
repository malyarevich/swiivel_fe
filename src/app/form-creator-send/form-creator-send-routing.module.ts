import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { MainComponent } from '@shared/main.component';

import { FormCreatorSendComponent } from './form-creator-send.component';

const routes: Routes = [
  { path: '', 
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '',  component: FormCreatorSendComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorSendRoutingModule { }
