import {NgModule} from '@angular/core';
import {ClickStopPropagationDirective} from './click-stop-propagation.directive';
import {CustomMaxDirective} from './custom-max-validator.directive';
import {CustomMinDirective} from './custom-min-validator.directive';
import {NumbersValidatorDirective} from './numbers-validator.directive';
import {DragDropDirective} from './drag-drop.directive';

@NgModule({
    declarations: [
      ClickStopPropagationDirective,
      CustomMaxDirective,
      CustomMinDirective,
      NumbersValidatorDirective,
      DragDropDirective
    ],
    exports: [
      ClickStopPropagationDirective,
      CustomMaxDirective,
      CustomMinDirective,
      NumbersValidatorDirective,
      DragDropDirective
    ],
})
export class GeneralDirectivesModule {
}
