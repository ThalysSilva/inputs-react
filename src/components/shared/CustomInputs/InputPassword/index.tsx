import React, { ChangeEvent, ReactElement } from 'react';

import { ValidatorFunction } from '../../../../validators/types';
import EyeCloseIcon from '../../../../assets/icon/EyeClose';
import { useInputPassword } from './hook/useInputPassword';
import EyeOpenIcon from '../../../../assets/icon/EyeOpen';
import { Input } from '../../Input';

interface InputPasswordProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFunctions?: ValidatorFunction[];
  highlightBorderError?: boolean;
  autoComplete?: 'on' | 'off' | 'new-password';
  showValidationBar?: boolean;
  onLeftIcon?: ReactElement;
  passwordName?: string;
  isRequired?: boolean;
  showButton?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
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
      className={className}
      highlightBorderError={highlightBorderError}
      handleRightIconClick={handleShowPassword}
      type={showPassword ? `text` : `password`}
      showValidationBar={showValidationBar}
      validateFunctions={validateFunctions}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onLeftIcon={onLeftIcon}
      dataTestId={dataTestId}
      required={isRequired}
      name={passwordName}
      onChange={onChange}
      maxLength={100}
      value={value}
      id={id}
    />
  );
}
