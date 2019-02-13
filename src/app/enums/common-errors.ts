export enum COMMON_ERRORS {
    pattern = 'Field is invalid',
    required = 'Field is required',
}

export function checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: any) => {
        const passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
            passwordInput.setErrors({
                notEquivalent: 'Passwords don’t match'
            });
        } else {
            passwordInput.setErrors(null);
        }
    };
}