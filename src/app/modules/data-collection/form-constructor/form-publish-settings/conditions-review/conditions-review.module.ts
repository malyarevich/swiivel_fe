import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConditionsReviewComponent} from '@modules/data-collection/form-constructor/form-publish-settings/conditions-review/conditions-review.component';


@NgModule({
  declarations: [
    ConditionsReviewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [ConditionsReviewComponent],
  providers: [
  ]
})
export class ConditionsReviewModule {
}
