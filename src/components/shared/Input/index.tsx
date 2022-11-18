import React, { InputHTMLAttributes, ReactElement } from 'react';

import WarningIcon from '../../../assets/icon/Warning';
import { doNothing } from '../../../utils/functions';

import { ValidatorFunction } from '../../../validators/types';
import { useInput } from './hooks/useInput';
import { When } from '../When';
import { Text5 } from '../Texts';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  validateFunctions?: ValidatorFunction[];
  handleRightIconClick?: () => void;
  handleLeftIconClick?: () => void;
  hideMessageValidation?: boolean;
  highlightBorderError?: boolean;
  showValidationBar?: boolean;
  onRightIcon?: ReactElement;
  onLeftIcon?: ReactElement;
  width?: number | 'full' | 'fit-content';
  labelString?: string;
  isRequired?: boolean;
  dataTestId?: string;
  className?: string;
};

export function Input({
  hideMessageValidation,
  handleRightIconClick,
  highlightBorderError,
  handleLeftIconClick,
  showValidationBar,
  validateFunctions,
  onRightIcon,
  labelString,
  dataTestId,
  onLeftIcon,
  className,
  width,
  ...rest
}: InputProps) {
  const {
    withValidationBar,
    validateResponse,
    validatorColor,
    onChange,
    inputRef,
    onFocus,
    onBlur,
    id,
  } = useInput({
    validateFunctions: validateFunctions,
    showValidationBar: showValidationBar,
    inputOnChange: rest.onChange,
    inputRequired: rest.required,
    inputOnFocus: rest.onFocus,
    minLength: rest.minLength,
    inputOnBlur: rest.onBlur,
    inputId: rest.id,
  });

  const testId = dataTestId ? dataTestId : `inputTestId-${rest.id ?? id}`;

  function getWidth() {
    if (!width) return '';
    const widthString =
      width === 'full' ? 'w-full' : width === 'fit-content' ? 'w-fit' : `w-${width}`;
    return widthString;
  }

  return (
    <div className={'flex flex-col h-full justify-start ' + getWidth()}>
      <When value={labelString}>
        <Text5 className={'mb-2 font-semibold'}>{labelString}</Text5>
      </When>
      <div
        className={` 
          flex flex-row py-4 px-7 gap-4 bg-transparent w-full rounded-xl border
          ${
            highlightBorderError && !validateResponse.isValid
              ? 'border-alerts-red'
              : 'border-borderColor'
          }  
          items-center ${className ? className : ''}
        `}
        data-testid={'inputContainer'}
      >
        <When value={onLeftIcon}>
          <span
            className={`
              flex w-4 h-4 justify-center items-center 
              ${handleLeftIconClick ? 'cursor-pointer' : ''}
            `}
            onClick={handleLeftIconClick ? handleLeftIconClick : doNothing}
            data-testid={'leftIcon'}
          >
            {onLeftIcon}
          </span>
        </When>

        <input
          {...rest}
          className={` 
            flex flex-1 w-full bg-transparent text-inherit items-center 
            border-none focus:outline-none autofill:bg-transparent text-sm xl:text-base 
            ${rest.disabled ? 'cursor-not-allowed' : ''}
          `}
          defaultChecked={rest.onChange ? undefined : rest.checked}
          style={{ textAlign: 'inherit' }}
          data-testid={testId}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          id={rest.id ?? id}
        />

        <When value={onRightIcon}>
          <span
            data-testid={'rightIcon'}
            onClick={handleRightIconClick ? handleRightIconClick : doNothing}
            className={`
              flex w-4 h-4 justify-center items-center
              ${handleRightIconClick ? 'cursor-pointer' : ''}
            `}
          >
            {onRightIcon}
          </span>
        </When>

        <When value={withValidationBar}>
          <div data-testid={'validationBar'} className={'flex h-full '}>
            <span
              className={`
                h-full w-1 rounded-full ${validatorColor}
              `}
            />
          </div>
        </When>
      </div>

      <When value={!hideMessageValidation && validateResponse.reason}>
        <div
          data-testid={'messageValidation'}
          className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}
        >
          <WarningIcon />
          <label className={'text-alerts-red font-light text-xs leading-4'}>
            {validateResponse.reason}
          </label>
        </div>
      </When>
    </div>
  );
}
