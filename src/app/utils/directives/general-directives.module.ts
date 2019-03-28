import {NgModule} from '@angular/core';
import {ClickStopPropagationDirective} from "./click-stop-propagation.directive";

@NgModule({
    declarations: [ClickStopPropagationDirective],
    exports: [ClickStopPropagationDirective],
})
export class GeneralDirectivesModule {
}
