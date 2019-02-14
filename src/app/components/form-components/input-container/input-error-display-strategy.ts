import { FormControl } from '@angular/forms';
import { InjectionToken } from '@angular/core';

/**
 * Strategy to display control error, for example display errors only when control is dirty or form is submitted
 */
export interface InputErrorDisplayStrategy {
    shouldDisplayError(control: FormControl): boolean;
}

/**
 * Default strategy display errors only for dirty controls
 */
export const defaultInputErrorDisplayStrategy: InputErrorDisplayStrategy = {
    shouldDisplayError(control: FormControl): boolean {
        return control.dirty;
    }
};

export const INPUT_ERROR_DISPLAY_STRATEGY = new InjectionToken<InputErrorDisplayStrategy>(
    'INPUT_ERROR_DISPLAY_STRATEGY'
);
