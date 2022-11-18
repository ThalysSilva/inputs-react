import { useValidator } from '../../../../../validators/hooks/useValidator';
import { ValidatorFunction } from '../../../../../validators/types';

export function useInputEmail(validatorFunctions?: ValidatorFunction[]) {
  const { validateEmail } = useValidator();

  const ValidatorFunctionArray: ValidatorFunction[] = [validateEmail];

  if (validatorFunctions) ValidatorFunctionArray.push(...validatorFunctions);

  return { ValidatorFunctionArray };
}
