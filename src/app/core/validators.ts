import { ValidatorFn, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { isEmail, isURL } from 'validator';

export function emailValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value;
        return isEmail(value) ? null : { emailValidator: { valid: false } };
    }
}

export function alphabeticValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value;
        const regexp = new RegExp(/^[a-zA-Z ]*$/, 'gm');
        return regexp.test(value) ? null : { alphabeticValidator: { valid: false } };
    }
}

export function alphanumericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value;
        const regexp = new RegExp(/^[a-zA-Z0-9 ]*$/, 'gm');
        return regexp.test(value) ? null : { alphanumericValidator: { valid: false } };
    };
}

export function numericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value;
        const regexp = new RegExp(/^[0-9]*$/, 'gm');
        return regexp.test(value) ? null : { numericValidator: { valid: false } };
    }
}

export function urlValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value;
        return isURL(value) ? null : { urlValidator: { valid: false } };
    }
}

export function minValueValidator(min: number): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        if (Validators.required(c)) return null;
        const value = c.value;
        const err = {
            current: value,
            valid: false,
            min
        }
        if (isNaN(value)) return err;
        return value < min ? err : null;
    }
}

export function maxValueValidator(max: number): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        if (Validators.required(c)) return null;
        const value = c.value;
        const err = {
            current: value,
            valid: false,
            max
        }
        if (isNaN(value)) return err;
        return value > max ? err : null;
    }
}

export function rangeValueValidator(params: { min?: number, max?: number }): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        if (Validators.required(c)) return null;
        const value = c.value;
        const err = {
            numberValidator: {
                valid: false,
                min: params.min || null,
                max: params.max || null,
                current: value
            }
        }
        if (isNaN(value)) {
            return err;
        } else if (!isNaN(params.min) && !isNaN(params.max)) {
            return params.min > value || value > params.max ? err : null;
        } else if (!isNaN(params.min)) {
            return params.min > value ? err : null;
        } else if (!isNaN(params.max)) {
            return value > params.max ? err : null;
        } else {
            return null;
        }
    }
}