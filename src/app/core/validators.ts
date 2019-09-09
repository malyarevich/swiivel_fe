import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { isEmail, isURL, isDecimal } from 'validator';
import * as glibphone from 'google-libphonenumber';

function checkValue(value) {
    return (value && typeof value === 'string') ? value.trim() : value;
}

export function emailValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        return isEmail(value) ? null : { emailValidator: true };
    }
}

export function alphabeticValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[a-zA-Z ]*$/, 'gm');
        return regexp.test(value) ? null : { alphabeticValidator: true };
    }
}

export function alphanumericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[a-zA-Z0-9 ]*$/, 'gm');
        return regexp.test(value) ? null : { alphanumericValidator: true };
    };
}

export function numericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[0-9]*$/, 'gm');
        return regexp.test(value) ? null : { numericValidator: true };
    }
}

export function urlValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        return isURL(value) ? null : { urlValidator: true };
    }
}

export function minValueValidator(min: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
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
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const err = {
            maxValueValidator: {
                current: value,
                max
            }

        }
        if (isNaN(value)) return { maxValueValidator: 'Invalid number' };
        return parseFloat(value) > max ? err : null;
    }
}

export function rangeValueValidator(params: { min?: number, max?: number }): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
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

export function multipleMinLengthValidator(minLength: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = c.value;
        return (Array.isArray(value) && value.length < minLength) ? {
            dropdownMinLengthValidator: {
                currentLength: value.length,
                minLength
            }
        } : null;
    }
}

export function multipleMaxLengthValidator(maxLength: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = c.value;
        return (Array.isArray(value) && value.length > maxLength) ? {
            dropdownMaxLengthValidator: {
                currentLength: value.length,
                maxLength
            }
        } : null;
    }
}

export function multipleLengthValidator(length: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = c.value;
        return (Array.isArray(value) && value.length !== length) ? {
            dropdownLengthValidator: {
                currentLength: value.length,
                givenLength: length
            }
        } : null;
    }
}

export function phoneNumberValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const err = { phoneNumberValidator: true };
        const phoneUtil = glibphone.PhoneNumberUtil.getInstance();

        try {
            const phoneNumber = phoneUtil.parse(value, 'US');
            const isValidNumber = phoneUtil.isValidNumber(phoneNumber)
            return isValidNumber ? null : err;
        } catch (error) {
            // console.log('phoneNumberValidator error', error)
            return err;
        }
    }
}
