import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { MainComponent } from '@app/core/components/main.component';
import { FormCreatorComponent } from '@app/form-creator/form-creator.component';
import { FormConstructorComponent } from '@app/forms-dashboard/form-constructor/form-constructor.component';
import { FormTableComponent } from '@app/forms-dashboard/form-table.component';
import { OnlineFormComponent } from '@app/forms-dashboard/online-form/online-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'forms-dashboard',  component: FormTableComponent, pathMatch: 'full' },
      { path: 'forms-dashboard/form-constructor',  component: FormCreatorComponent, pathMatch: 'full' },
      { path: 'forms-dashboard/form-constructor/:mongo_id', component: FormConstructorComponent, pathMatch: 'full'},
      { path: 'forms-dashboard/online-form/:mongo_id', component: OnlineFormComponent, pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTableRoutingModule { }
