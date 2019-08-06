import { Component, Input, Optional, Inject, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { COMMON_ERRORS } from '../../../enums';
import { INPUT_ERROR_DISPLAY_STRATEGY, InputErrorDisplayStrategy } from './input-error-display-strategy';

@Component({
    selector: 'app-input-container',
    templateUrl: './input-container.component.html',
    styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() showErrors = true;
    @ContentChild(FormControlName, {static: false}) private formControlName: FormControlName;

    constructor(
        @Optional()
        @Inject(INPUT_ERROR_DISPLAY_STRATEGY)
        private readonly strategy: InputErrorDisplayStrategy
    ) {}

    get control() {
        return this.formControlName && this.formControlName.control;
    }

    get isActivelyInvalid() {
        return this.control.errors && (!this.strategy || this.strategy.shouldDisplayError(this.control));
    }

    get errorKeys() {
        if (this.control.errors) {
            const keys = Object.keys(this.control.errors);
            return keys.map((key) => {
                return COMMON_ERRORS[key] ? COMMON_ERRORS[key] : this.control.errors[key];
            });
        } else {
            return [];
        }
    }
}
