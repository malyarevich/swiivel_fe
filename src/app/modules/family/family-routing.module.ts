import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FamiliesListComponent} from "./families-list/families-list.component";
import {FamilyProfileComponent} from "./family-profile/family-profile.component";

export const routes: Routes = [
  {
    path: '',
    component: FamiliesListComponent
  },
  {
    path: 'profile',
    component: FamilyProfileComponent
  },
  {
    path: 'profile/:id',
    component: FamilyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule {
}
