import config from '../config';
import { ValidationResponse } from './types';
import { validEmailRegex } from './utils/regex';

const { string: stringMessageValidation, isRequired } = config.messages.validations;

export function validateStringNonEmpty(str: string): ValidationResponse {
  if (typeof str === 'string' && str.length > 0) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isEmpty };
}

export function validateRegex(
  data: string,
  regex: RegExp,
  failMessage: string,
): ValidationResponse {
  if (regex.test(data)) return { isValid: true };
  return { isValid: false, reason: failMessage };
}

export function validateNotContainRegex(
  data: string,
  regex: RegExp,
  failMessage: string,
): ValidationResponse {
  if (!regex.test(data)) return { isValid: true };
  return { isValid: false, reason: failMessage };
}

export function validateEmail(data: string) {
  if (data.length == 0) return { isValid: true };
  return validateRegex(data, validEmailRegex, stringMessageValidation.isNotValidEmail);
}

export function validateStringIsEqual(dataForValidation: string, dataToCompare: string) {
  if (dataForValidation.length == 0 || dataForValidation === dataToCompare)
    return { isValid: true };
  return { isValid: false, reason: stringMessageValidation.isNotEqual };
}

export function validateIsRequired(value: string | boolean): ValidationResponse {
  if (typeof value === 'string' && value.trim().length > 0) {
    return { isValid: true };
  }

  if (typeof value === 'boolean' && value) {
    return { isValid: true };
  }

  return { isValid: false, reason: isRequired };
}

export function validateStringLength(expectedLength: number, string: string): ValidationResponse {
  if (!!string && string.length && string.trim().length === expectedLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isNotEqualLength };
}

export function validateStringMaxLength(
  expectedMaxLength: number,
  string: string,
): ValidationResponse {
  if (!!string && string.length && string.trim().length <= expectedMaxLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isMoreThanExpectedLength };
}

export function validateStringMinLength(
  expectedMinLength: number,
  string: string,
): ValidationResponse {
  if (!!string && string.length && string.trim().length >= expectedMinLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isMinThanExpectedLength };
}

export function validateStringMaxOrEqualLength(
  expectedMaxOrEqualLength: number,
  string: string,
): ValidationResponse {
  if (!!string && string.length && string.trim().length < expectedMaxOrEqualLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isNotMoreThanExpectedLength };
}

export function validateStringMinOrEqualLength(
  expectedMinOrEqualLength: number,
  string: string,
): ValidationResponse {
  if (!!string && string.length && string.trim().length > expectedMinOrEqualLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: stringMessageValidation.isMinThanExpectedLength };
}
