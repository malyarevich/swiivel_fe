import {NgModule} from '@angular/core';
import {ClickStopPropagationDirective} from "./click-stop-propagation.directive";
import {CustomMaxDirective} from "./custom-max-validator.directive";
import {CustomMinDirective} from "./custom-min-validator.directive";

@NgModule({
    declarations: [ClickStopPropagationDirective, CustomMaxDirective, CustomMinDirective],
    exports: [ClickStopPropagationDirective, CustomMaxDirective, CustomMinDirective],
})
export class GeneralDirectivesModule {
}
