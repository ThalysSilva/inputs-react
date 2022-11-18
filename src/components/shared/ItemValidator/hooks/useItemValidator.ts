import { useEffect, useRef, useState } from 'react';
import { useValidator } from '../../../../validators/hooks/useValidator';
import { ValidatorFunction } from '../../../../validators/types';

type Props = {
  value: string;
  validateFunctions: ValidatorFunction[];
};

export function useItemValidator({ value, validateFunctions }: Props) {
  const fillColor = {
    white: 'bg-white',
    green: 'bg-alerts-green',
    red: 'bg-alerts-red',
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const { multipleValidate } = useValidator();
  const [validatorColor, setValidatorColor] = useState(fillColor['white']);

  const settedValidateFunctions = [] as ValidatorFunction[];
  if (validateFunctions) settedValidateFunctions.push(...validateFunctions);

  useEffect(() => {
    function validate() {
      if (!inputRef.current) return;
      if (!value) {
        inputRef.current?.setCustomValidity('');
        setValidatorColor(fillColor['white']);
        return;
      }
      const response = multipleValidate(value, settedValidateFunctions);

      if (response.reason) {
        inputRef.current.setCustomValidity(response.reason);
        setValidatorColor(fillColor['red']);
      } else {
        inputRef.current.setCustomValidity('');
        setValidatorColor(fillColor['green']);
      }
    }

    validate();
  }, [value]);

  return { inputRef, validatorColor };
}
