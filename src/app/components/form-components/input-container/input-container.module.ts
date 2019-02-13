import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './input-container.component';
import {
    InputErrorDisplayStartegy,
    INPUT_ERROR_DISPLAY_STRATEGY,
    defaulInputErrorDisplayStartegy
} from './input-error-display-strategy';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [InputContainerComponent],
    exports: [InputContainerComponent]
})
export class InputContainerModule {
    static forRoot(strategy?: InputErrorDisplayStartegy): ModuleWithProviders {
        return {
            ngModule: InputContainerModule,
            providers: [
                {
                    provide: INPUT_ERROR_DISPLAY_STRATEGY,
                    useValue: strategy || defaulInputErrorDisplayStartegy
                }
            ]
        };
    }
}
