import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import { ValidationResponse, ValidatorFunction } from '../../../../validators/types';
import { useValidator } from '../../../../validators/hooks/useValidator';
import uuid from 'react-uuid';

type Props = {
  inputOnFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  inputOnBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  inputOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFunctions?: ValidatorFunction[];
  showValidationBar?: boolean;
  inputRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  inputId?: string;
};

export function useInput({
  showValidationBar,
  validateFunctions,
  inputOnChange,
  inputRequired,
  inputOnFocus,
  inputOnBlur,
  minLength,
  maxLength,
  inputId,
}: Props) {
  const fillColor = {
    white: 'bg-white',
    green: 'bg-alerts-green',
    red: 'bg-alerts-red',
  };

  const { multipleValidate, validateIsRequired, validateStringMinLength, validateStringMaxLength } =
    useValidator();
  const [validatorColor, setValidatorColor] = useState(fillColor['white']);
  const [id, setId] = useState<string>();
  const [validateResponse, setValidateResponse] = useState({
    isValid: true,
  } as ValidationResponse);
  const inputRef = useRef<HTMLInputElement>(null);
  const settedValidateFunctions = [] as ValidatorFunction[];

  useEffect(() => {
    if (inputId) {
      setId(inputId);
    } else {
      const randomId = uuid();
      setId(randomId);
    }
  }, [inputId]);

  if (inputRequired) settedValidateFunctions.push(validateIsRequired);
  if (minLength) settedValidateFunctions.push((arr) => validateStringMinLength(minLength, arr));
  if (maxLength) settedValidateFunctions.push((arr) => validateStringMaxLength(maxLength, arr));

  if (validateFunctions) settedValidateFunctions.push(...validateFunctions);

  const withValidationBar = showValidationBar && settedValidateFunctions.length >= 1;

  function validate() {
    if (!inputRef.current) return;
    const response = multipleValidate(inputRef.current.value, settedValidateFunctions);

    setValidateResponse(response);
    if (response.reason) {
      inputRef.current.setCustomValidity(response.reason);
      setValidatorColor(fillColor['red']);
    } else {
      inputRef.current.setCustomValidity('');
      setValidatorColor(fillColor['green']);
    }
  }

  const onFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (inputOnFocus) inputOnFocus(event);

    setValidateResponse({ isValid: true });
    inputRef.current?.setCustomValidity('');
    setValidatorColor(fillColor['white']);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (inputOnBlur) inputOnBlur(event);

    validate();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (inputOnChange) inputOnChange(event);

    validate();
  };

  useEffect(() => {
    inputRef.current?.addEventListener('invalid', function (event) {
      event.preventDefault();

      validate();
    });
  });

  return {
    withValidationBar,
    validateResponse,
    validatorColor,
    inputRef,
    onChange,
    onFocus,
    onBlur,
    id,
  };
}
