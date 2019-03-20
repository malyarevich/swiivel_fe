import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-v-form-field-settings',
    templateUrl: './v-form-field-settings.component.html',
    styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit {
    @Input() inputField;
    @Output() changeIsValidatorEmitter = new EventEmitter<boolean>();
    @Output() changeValidatorRulesEmitter = new EventEmitter<any>();
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

    rule: string;
    min: number;
    max: number;

    validators: [string];

    constructor() {
    }

    ngOnInit() {
        this.validators = this.inputField.validators;
        this.rule = this.validators[0];
        this.min = this.validators[1] ? +(this.validators[1].split(':'))[1] : null;
        this.max = this.validators[2] ? +(this.validators[2].split(':'))[1] : null;
    }

    isValidatorChanged(value) {
        this.changeIsValidatorEmitter.emit(value)
    }

    addValidatorRule(value, index) {
        let val = value;
        if(!val) {
            this.validators[index] = null;
            return;
        }
        if(index === 1) val = `min:${value}`;
        if(index === 2) val = `max:${value}`;
        this.validators[index] = val;
        this.changeValidatorRulesEmitter.emit(this.validators);
    }
}
