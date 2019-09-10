import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { MainComponent } from '@app/core/components/main.component';
import { FormCreatorComponent } from './form-creator.component';


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
