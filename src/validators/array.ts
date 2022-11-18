import { ValidationResponse } from './types';

export function validateArrayLength(
  expectedLength: number,
  array: any[],
  message?: string,
): ValidationResponse {
  if (!!array && array.length && array.length === expectedLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: message ?? 'O tamanho do array é diferente do esperado.' };
}

export function validateArrayMaxLength(
  expectedMaxLength: number,
  array: any[],
  message?: string,
): ValidationResponse {
  if (!!array && array.length && array.length <= expectedMaxLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: message ?? 'O tamanho do array é maior que o esperado.' };
}

export function validateArrayMinLength(
  expectedMinLength: number,
  array: any[],
  message?: string,
): ValidationResponse {
  if (!!array && array.length && array.length >= expectedMinLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: message ?? 'O tamanho do array é menor que o esperado.' };
}

export function validateArrayMaxOrEqualLength(
  expectedMaxOrEqualLength: number,
  array: any[],
  message?: string,
): ValidationResponse {
  if (!!array && array.length && array.length < expectedMaxOrEqualLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: message ?? 'O tamanho do array não é maior que o esperado.' };
}

export function validateArrayMinOrEqualLength(
  expectedMinOrEqualLength: number,
  array: any[],
  message?: string,
): ValidationResponse {
  if (!!array && array.length && array.length > expectedMinOrEqualLength) {
    return { isValid: true };
  }

  return { isValid: false, reason: message ?? 'O tamanho do array é menor que o esperado.' };
}
