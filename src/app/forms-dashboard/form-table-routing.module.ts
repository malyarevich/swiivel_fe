import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { MainComponent } from '@shared/main.component';
import { FormTableComponent } from './form-table.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '',  component: FormTableComponent},
      // { path: 'form-constructor', component: FormConstructorComponent, pathMatch: 'full'},
      // { path: 'form-constructor/:mongo_id', component: FormConstructorComponent, pathMatch: 'full'},
      { path: 'online-form/:mongo_id', loadChildren: () => import('@app/online-form/online-form.module').then(m => m.OnlineFormModule), pathMatch: 'full'},
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTableRoutingModule {}
