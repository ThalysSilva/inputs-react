import React, { ChangeEvent, ReactElement } from 'react';

import { ValidatorFunction } from '../../../../validators/types';
import EyeCloseIcon from '../../../../assets/icon/EyeClose';
import { useInputPassword } from './hook/useInputPassword';
import EyeOpenIcon from '../../../../assets/icon/EyeOpen';
import { Input } from '../../Input';

interface InputPasswordProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: 'on' | 'off' | 'new-password';
  validateFunctions?: ValidatorFunction[];
  highlightBorderError?: boolean;
  showValidationBar?: boolean;
  onLeftIcon?: ReactElement;
  passwordName?: string;
  isRequired?: boolean;
  showButton?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  label?: string;
  value?: string;
  id?: string;
}
export function InputPassword({
  placeholder = 'Password',
  passwordName = 'password',
  highlightBorderError,
  showButton = false,
  showValidationBar,
  validateFunctions,
  autoComplete,
  dataTestId,
  isRequired,
  onLeftIcon,
  className,
  onChange,
  label,
  value,
  id,
}: InputPasswordProps) {
  const { handleShowPassword, showPassword } = useInputPassword();

  return (
    <Input
      onRightIcon={
        showButton ? (
          showPassword ? (
            <EyeOpenIcon hoverAnimate />
          ) : (
            <EyeCloseIcon hoverAnimate />
          )
        ) : undefined
      }
      highlightBorderError={highlightBorderError}
      handleRightIconClick={handleShowPassword}
      type={showPassword ? `text` : `password`}
      showValidationBar={showValidationBar}
      validateFunctions={validateFunctions}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onLeftIcon={onLeftIcon}
      dataTestId={dataTestId}
      className={className}
      required={isRequired}
      labelString={label}
      onChange={onChange}
      name={passwordName}
      maxLength={100}
      value={value}
      id={id}
    />
  );
}
