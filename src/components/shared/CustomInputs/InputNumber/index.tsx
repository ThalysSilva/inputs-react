import React, { KeyboardEvent } from "react";

import { useInputNumber } from "./hook/useInputNumber";
import { Input } from "../../Input";

interface InputNumberProps {
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  hideMessageValidation?: boolean;
  highlightBorderError?: boolean;
  defaultValue?: number | string;
  showValidationBar?: boolean;
  isRequired?: boolean;
  dataTestId?: string;
  className?: string;
  maxLength?: number;
  value?: number;
  label?: string;
  name?: string;
  min?: number;
  max?: number;
  id?: string;
}

export function InputNumber({
  hideMessageValidation,
  highlightBorderError,
  name = "inputNumber",
  showValidationBar,
  defaultValue,
  isRequired,
  dataTestId,
  className,
  maxLength,
  onKeyUp,
  label,
  value,
  min,
  max,
  id,
}: InputNumberProps) {
  const { handleChange } = useInputNumber(maxLength, min, max);
  return (
    <Input
      hideMessageValidation={hideMessageValidation}
      highlightBorderError={highlightBorderError}
      showValidationBar={showValidationBar}
      defaultValue={defaultValue}
      dataTestId={dataTestId}
      onChange={handleChange}
      className={className}
      maxLength={maxLength}
      required={isRequired}
      labelString={label}
      onKeyUp={onKeyUp}
      type={"number"}
      value={value}
      name={name}
      min={min}
      max={max}
      id={id}
    />
  );
}
