import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-v-form-field-settings',
    templateUrl: './v-form-field-settings.component.html',
    styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit {
    @Input() inputField;
    @Output() changeFieldEmitter = new EventEmitter<any>();
    tab: string = 'settings';

    validationRules = [
        {name: 'Alphabetic', rule: 'alpha', min: true, max: true},
        {name: 'Alpha Numeric', rule: 'alpha_num', min: true, max: true},
        {name: 'Alpha Numeric Dash', rule: 'alpha_dash', min: true, max: true},
        {name: 'Data', rule: 'data'},
        {name: 'Email', rule: 'email'},
        {name: 'Numeric', rule: 'numeric', min: true, max: true},
        {name: 'String', rule: 'string', min: true, max: true},
        {name: 'URL', rule: 'url'},
    ];

    rule: object;
    field;

    constructor() {
    }

    ngOnInit() {
        this.field = this.inputField;
        this.rule = this.field.validators[0];
    }

    isValidatorChanged(event) {
        this.field.options.isValidator = event;
        this.changeFieldEmitter.emit(this.field);
    }

    addValidatorRule(rule) {
        this.rule = this.validationRules.find(elem => elem.rule == rule);
        this.field.validators = [this.rule];
        this.changeFieldEmitter.emit(this.field);
    }

    addMinMaxRule() {
        this.field.validators = [this.rule];
        this.changeFieldEmitter.emit(this.field);
    }

    changeIsErrorMessage(event) {
        this.field.options.isErrorMessage = event;
        this.changeFieldEmitter.emit(this.field);
    }

    changeIsProhibitDataEntry(event) {
        this.field.options.isProhibitDataEntry = event;
        this.changeFieldEmitter.emit(this.field);
    }
}
