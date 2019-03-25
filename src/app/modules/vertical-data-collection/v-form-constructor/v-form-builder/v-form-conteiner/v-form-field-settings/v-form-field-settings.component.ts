import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Field} from "../../../../model/field.model";

@Component({
    selector: 'app-v-form-field-settings',
    templateUrl: './v-form-field-settings.component.html',
    styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit, OnChanges {
    @Input() inputField;
    @Output() changeFieldEmitter = new EventEmitter<any>();
    tab: string = 'settings';

    validationRules = [
        {name: 'Alphabetic', rule: 'alpha', min: true, max: true, param: false},
        {name: 'Alpha Numeric', rule: 'alpha_num', min: true, max: true, param: false},
        {name: 'Alpha Numeric Dash', rule: 'alpha_dash', min: true, max: true, param: false},
        {name: 'Data', rule: 'data', min: false, max: false, param: false},
        {name: 'Email', rule: 'email', min: false, max: false, param: false},
        {name: 'Numeric', rule: 'numeric', min: true, max: true, param: false},
        {name: 'String', rule: 'string', min: true, max: true, param: false},
        {name: 'URL', rule: 'url', min: false, max: false, param: false},
        {name: 'IN', rule: 'in',  min: false, max: false, param: ''}
    ];

    rule: {name: string, rule: string, min: number | boolean, max: number | boolean, param: string | boolean};
    ruleDefault = {name: '', rule: '', min: false, max: false, param: false};
    field: Field;

    constructor() {
    }

    ngOnInit() {
        this.field = this.inputField;
        this.rule = this.field.validators[0] ? this.field.validators[0] : this.ruleDefault;
    }

    ngOnChanges() {
        this.field = this.inputField;
        this.rule = this.field.validators[0] ? this.field.validators[0] : this.ruleDefault;
    }

    isValidatorChanged(event) {
        this.field.options.isValidator = event;
        this.changeFieldEmitter.emit(this.field);
    }

    changeValidatorRule(rule) {
        this.rule = this.validationRules.find(elem => elem.rule == rule);
        this.addValidatorRule();
    }

    addValidatorRule() {
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

    addTextError(event) {
        this.field.options.textError = event;
        this.changeFieldEmitter.emit(this.field);
    }

    changeMinFieldSize(event) {
        this.field.options.minFieldSize = event;
        this.changeFieldEmitter.emit(this.field);
    }

    changeMaxFieldSize(event) {
        this.field.options.maxFieldSize = event;
        this.changeFieldEmitter.emit(this.field);
    }

    changeInputMask(event) {
        this.field.options.inputMask = event;
        this.changeFieldEmitter.emit(this.field);
    }
}
