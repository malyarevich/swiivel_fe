import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { isEmail, isURL, isDecimal } from 'validator';

export function emailValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        return isEmail(value) ? null : { emailValidator: true };
    }
}

export function alphabeticValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const regexp = new RegExp(/^[a-zA-Z ]*$/, 'gm');
        return regexp.test(value) ? null : { alphabeticValidator: true };
    }
}

export function alphanumericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const regexp = new RegExp(/^[a-zA-Z0-9 ]*$/, 'gm');
        return regexp.test(value) ? null : { alphanumericValidator: true };
    };
}

export function numericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const regexp = new RegExp(/^[0-9]*$/, 'gm');
        return regexp.test(value) ? null : { numericValidator: true };
    }
}

export function urlValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        return isURL(value) ? null : { urlValidator: true };
    }
}

export function minValueValidator(min: number): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const err = {
            minValueValidator: {
                current: value,
                min
            }
        }
        if (isNaN(value)) return { minValueValidator: 'Invalid number' };
        return parseFloat(value) < min ? err : null;
    }
}

export function maxValueValidator(max: number): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const err = {
            maxValueValidator: {
                current: value,
                max
            }

        }
        console.log(isNaN(value), isDecimal(value))
        if (isNaN(value)) return { maxValueValidator: 'Invalid number' };
        return parseFloat(value) > max ? err : null;
    }
}

export function rangeValueValidator(params: { min?: number, max?: number }): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
        const value = c.value && typeof c.value === 'string' ? c.value.trim() : c.value;
        const err = {
            numberValidator: {
                min: params.min || null,
                max: params.max || null,
                current: value
            }
        }
        if (isNaN(value)) {
            return { rangeValueValidator: 'Invalid number' };
        } else if (!isNaN(params.min) && !isNaN(params.max)) {
            return (parseFloat(value) < params.min || parseFloat(value) > params.max) ? err : null;
        } else if (!isNaN(params.min)) {
            return (params.min > parseFloat(value)) ? err : null;
        } else if (!isNaN(params.max)) {
            return (parseFloat(value) > params.max) ? err : null;
        } else {
            return null;
        }
    }
}