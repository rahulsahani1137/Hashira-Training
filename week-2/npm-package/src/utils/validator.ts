import type { ValidationResult } from "../types/types";

function validator(type: string, value: string): ValidationResult {
    switch (type) {
        case 'email':
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(value)
                ? { isValid: true }
                : { isValid: false, error: 'Invalid email format' };

        case 'phone':
            const phoneRegex = /^\+?[\d\s-()]+$/;
            const isValidPhone = phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
            return isValidPhone
                ? { isValid: true }
                : { isValid: false, error: 'Phone number must contain atleast 10 digits' };

        case 'url':
            try {
                new URL(value);
                return { isValid: true };
            } catch {
                return { isValid: false, error: 'Invalid URL format' };
            }

        case 'number':
            return !isNaN(Number(value))
                ? { isValid: true }
                : { isValid: false, error: 'Value must be a valid number' };

        case 'integer':
            return Number.isInteger(Number(value))
                ? { isValid: true }
                : { isValid: false, error: 'Value must be an integer' };

        case 'string':
            return typeof value === 'string' && value.trim().length > 0
                ? { isValid: true }
                : { isValid: false, error: 'Value must be a non-empty string' };

        case 'alphanumeric':
            const alphanumericRegex = /^[a-zA-Z0-9]+$/;
            return alphanumericRegex.test(value)
                ? { isValid: true }
                : { isValid: false, error: 'Value must contain only letters and numbers' };

        case 'date':
            return !isNaN(Date.parse(value))
                ? { isValid: true }
                : { isValid: false, error: 'Invalid date format' };

        default:
            return { isValid: false, error: `Unknown validation type: ${type}` };
    }
}

export {
    validator
}