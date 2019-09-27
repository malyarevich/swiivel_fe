import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth.guard';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { UploadReviewFormComponent } from './upload-review-form.component';

export const routes: Routes = [
  {
    path: '',
    component: UploadReviewFormComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UploadReviewFormService]
})
export class UploadReviewFormRoutingModule {}
