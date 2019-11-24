import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { FormComponent } from '@app/shared/form.component';
import { MainComponent } from '@shared/main.component';
import { FormCreatorComponent } from './form-creator.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':mongo_id',  component: FormCreatorComponent },
      { path: '',  component: FormCreatorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorRoutingModule { }
