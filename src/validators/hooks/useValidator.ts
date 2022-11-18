import * as validateFunctionsArray from '../array';
import * as validateFunctionsString from '../string';
import * as regexValidations from '../utils/regex';
import { Primitive, ValidationResponse, ValidatorFunction } from '../types';

export function useValidator() {
  function multipleValidate(data: Primitive, validators: ValidatorFunction[]): ValidationResponse {
    for (const validation of validators) {
      const responseObj = validation(data);
      if (!responseObj.isValid) return responseObj;
    }

    return { isValid: true };
  }

  return {
    ...validateFunctionsArray,
    ...validateFunctionsString,
    ...regexValidations,
    multipleValidate,
  };
}
