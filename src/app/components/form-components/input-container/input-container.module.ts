import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './input-container.component';
import {
    InputErrorDisplayStrategy,
    INPUT_ERROR_DISPLAY_STRATEGY,
    defaultInputErrorDisplayStrategy
} from './input-error-display-strategy';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [InputContainerComponent],
    exports: [InputContainerComponent]
})
export class InputContainerModule {
    static forRoot(strategy?: InputErrorDisplayStrategy): ModuleWithProviders {
        return {
            ngModule: InputContainerModule,
            providers: [
                {
                    provide: INPUT_ERROR_DISPLAY_STRATEGY,
                    useValue: strategy || defaultInputErrorDisplayStrategy
                }
            ]
        };
    }
}
