import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickStopPropagationDirective} from "./click-stop-propagation.directive";

@NgModule({
    declarations: [ClickStopPropagationDirective],
    exports: [ClickStopPropagationDirective],
    // imports: [
    //     CommonModule
    // ]
})
export class GeneralDirectivesModule {
}
