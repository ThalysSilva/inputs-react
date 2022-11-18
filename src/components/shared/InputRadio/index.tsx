import React from 'react';

import { doNothing } from '../../../utils/functions';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  checked: boolean;
  sizePx?: number;
  gapPx?: number;
  name: string;
  value?: any;
};

export function InputRadio({
  sizePx = 24,
  gapPx = 16,
  children,
  checked,
  onClick,
  value,
  name,
}: Props) {
  const gapNormalized = gapPx.toString() + 'px';
  const sizeNormalized = sizePx.toString() + 'px';
  const SIZE_OF_SELECTED = (sizePx - sizePx / 2).toString() + 'px';
  return (
    <div
      className={`flex items-center relative  cursor-pointer select-none`}
      style={{ gap: gapNormalized }}
      onClick={onClick}
    >
      <span
        className={`flex justify-center items-center relative transition-all ease-in-out duration-200 rounded-full border-2 border-solid 
        ${checked ? 'border-red-500' : 'border-customGray'} 
        `}
        style={{ width: sizeNormalized, height: sizeNormalized }}
      >
        <span
          style={{ width: SIZE_OF_SELECTED, height: SIZE_OF_SELECTED }}
          className={`relative transform transition-transform ease-in-out duration-200 rounded-full 
          ${checked ? 'bg-red-500' : 'bg-customGray'}
          ${checked ? 'scale-100' : 'scale-0'} `}
        />
      </span>
      {children}
      <input
        className="hidden opacity-0 cursor-pointer"
        onChange={doNothing}
        checked={checked}
        type={'radio'}
        value={value}
        name={name}
      />
    </div>
  );
}
