import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { GeneralComponent } from './general/general.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'builder', component: BuilderComponent },
      { path: 'review', component: ReviewComponent },
      { path: '', redirectTo: 'general' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
