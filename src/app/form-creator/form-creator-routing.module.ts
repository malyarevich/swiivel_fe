import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCreatorComponent } from './form-creator.component';
import { AuthGuard } from '@app/core/auth.guard';
import { MainComponent } from '@app/core/components/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'form-creator',  component: FormCreatorComponent, pathMatch: 'full' },
    ]
  },
  // {
  //   path: 'form-creator',
  //   component: FormCreatorComponent,
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorRoutingModule { }
