import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MainComponent } from '@shared/main.component';
import { FormTableComponent } from './form-table.component';

export const routes: Routes = [
  {
    path: "",
    component: FormTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTableRoutingModule {}