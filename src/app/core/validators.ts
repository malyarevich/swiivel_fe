import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as glibphone from 'google-libphonenumber';
import { isDecimal, isEmail, isURL, isEmpty, contains, equals } from 'validator';

function checkValue(value) {
    return (value && typeof value === 'string') ? value.trim() : value;
}

export function emailValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        return isEmail(value) ? null : { emailValidator: `is not valid email field` };
    };
}

export function alphabeticValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[a-zA-Z ]*$/, 'gm');
        return regexp.test(value) ? null : { alphabeticValidator: `is not valid alphabetic field` };
    };
}

export function alphanumericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[a-zA-Z0-9 ]*$/, 'gm');
        return regexp.test(value) ? null : { alphanumericValidator: `is not valid alphanumeric field` };
    };
}

export function numericValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const regexp = new RegExp(/^[0-9]*$/, 'gm');
        return regexp.test(value) ? null : { numericValidator: `is not valid numeric field` };
    };
}

export function urlValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        return isURL(value) ? null : { urlValidator: `is not valid URL field` };
    };
}

export function minValueValidator(min: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const err = {
            minValueValidator: {
                current: value,
                min
            }
        };
        if (isNaN(value)) { return { minValueValidator: 'has invalid number' }; }
        // return parseFloat(value) < min ? err : null;
        return parseFloat(value) < min
            ? { minValueValidator: `has current value is ${err.minValueValidator.current}, then min allowed ${err.minValueValidator.min}` }
            : null;
    };
}

export function maxValueValidator(max: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const err = {
            maxValueValidator: {
                current: value,
                max
            }

        };
        if (isNaN(value)) { return { maxValueValidator: 'Invalid number' }; }
        return parseFloat(value) > max
            ? { minValueValidator: `has current value is ${err.maxValueValidator.current}, then min allowed ${err.maxValueValidator.max}` }
            : null;
    };
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
        };
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
    };
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
    };
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
    };
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
    };
}

export function phoneNumberValidator(): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const value = checkValue(c.value);
        const err = { phoneNumberValidator: `is not valid phone number for US` };
        const phoneUtil = glibphone.PhoneNumberUtil.getInstance();

        try {
            const phoneNumber = phoneUtil.parse(value, 'US');
            const isValidNumber = phoneUtil.isValidNumber(phoneNumber);
            return isValidNumber ? null : err;
        } catch (error) {
            // console.log('phoneNumberValidator error', error)
            return err;
        }
    };
}

export function isEmptyValidator(): ValidatorFn {
  return (c: FormControl): ValidationErrors => {
    return isEmpty(c.value) ? null : { empty: true }
  }
}

export function isNotEmptyValidator(): ValidatorFn {
  return (c: FormControl): ValidationErrors => {
    return isEmpty(c.value) ? { notEmpty: true } : null;
  }
}

export function containValidator(seed: string): ValidatorFn {
  return (c: FormControl): ValidationErrors => {
    return contains(c.value, seed) ? null : { contain: seed }
  }
}

export function notContainValidator(seed: string): ValidatorFn {
  return (c: FormControl): ValidationErrors => {
    return contains(c.value, seed) ? { notContain: seed } : null
  }
}

export function stringEqualValidator(seed: string): ValidatorFn {
  return (c: FormControl): ValidationErrors => {
    return equals(c.value, seed) ? null : { strEqual: seed }
  }
}
