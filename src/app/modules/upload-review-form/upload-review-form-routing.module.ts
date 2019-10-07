import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadReviewFormComponent } from './upload-review-form.component';

export const routes: Routes = [
  {
    path: ':id',
    component: UploadReviewFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadReviewFormRoutingModule {}
