import React, { ReactNode } from "react";

import useInputNumberWithSpinner from "./hooks/useInputNumberWithSpinner";
import { ArrowsSpinner } from "../../ArrowsSpinner";
import { When } from "../../When";
import { Text5 } from "../../Texts";

export type InputNumberWithSpinnerProps = {
  onRight?: ReactNode;
  maxLength?: number;
  label?: string;
  max?: number;
  min?: number;
  id?: string;
};

export function InputNumberWithSpinner({
  id = "numberWithSpinner",
  maxLength,
  onRight,
  label,
  max,
  min,
}: InputNumberWithSpinnerProps) {
  const { incrementTotal, decrementTotal, handleChange, handleBlur, total } =
    useInputNumberWithSpinner({
      maxLength,
      max,
      min,
    });

  return (
    <div className={'flex flex-col h-full justify-start '}>
      <When value={label}>
        <Text5 className={"mb-2 font-semibold"}>{label}</Text5>
      </When>
      <div className="flex flex-row justify-center  h-10 border border-1 border-borderColor items-center gap-2 w-fit px-5 py-3 rounded-xl bg-grayscale-800">
        <When value={onRight}>{onRight}</When>
        <input
          type={"number"}
          className={`border-none text-center flex bg-transparent text-inherit items-center focus:outline-none autofill:bg-transparent sm:text-xs  md:text-xs lg:text-xs xl:text-sm 2xl:text-base`}
          style={{ width: maxLength ? `${maxLength + 1}ch` : "36px" }}
          data-testid={id + "TestId"}
          onChange={handleChange}
          maxLength={maxLength}
          onBlur={handleBlur}
          placeholder={"0"}
          value={total}
          max={max}
          min={min}
          id={id}
        />
        <ArrowsSpinner
          onArrowDownClick={decrementTotal}
          onArrowUpClick={incrementTotal}
        />
      </div>
    </div>
  );
}
