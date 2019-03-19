import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-v-form-field-settings',
    templateUrl: './v-form-field-settings.component.html',
    styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit {
    @Input() inputField;
    @Output() changeIsValidatorEmitter = new EventEmitter<boolean>();
    tab: string = 'settings';

    validationRule = {
        'Alphabetic': 'alpha',
        'Alpha Numeric': 'alpha_num',
        'Alpha Numeric Dash': 'alpha_dash',
        'Data': 'data',
        'Email': 'email',
        'Numeric': 'numeric',
        'String': 'string',
        'URL': 'url',
    };

    selectedRule: string;

    constructor() {
    }

    ngOnInit() {
    }

    isValidatorChanged(value) {
        this.changeIsValidatorEmitter.emit(value)
    }
}
