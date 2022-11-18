import React, { ReactNode, useEffect, useState } from 'react';

import { doNothing } from '../../../../utils/functions';
import CheckIcon from '../../../../assets/icon/Check';
import { When } from '../../When';

type Props = {
  colorScheme?: 'blue' | 'red';
  defaultCheck?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  id?: string;
};

export function InputCheckbox({
  defaultCheck = false,
  colorScheme = 'blue',
  children,
  onClick,
  id,
}: Props) {
  const [checked, setChecked] = useState(defaultCheck);

  useEffect(() => {
    setChecked(defaultCheck);
  }, [defaultCheck]);
  const colorSelected = {
    blue: 'bg-buttonColor border-buttonColor',
    red: 'bg-red-500 border-red-500',
  };

  function handleClick() {
    if (onClick) onClick();
    setChecked((prev) => !prev);
  }
  return (
    <div onClick={handleClick} className="flex gap-2 w-fit cursor-pointer  ">
      <input id={id} type={'checkbox'} className="hidden" checked={checked} onChange={doNothing} />
      <span
        className={`flex justify-center items-center w-9 h-9  rounded-lg border transform delay-200 transition-all min-w-9 
       ${checked ? colorSelected[colorScheme] : 'border-borderColor'}
      `}
      >
        <div
          className={`transform transition-all delay-200 w-9 h-9 grid place-items-center
        ${checked ? 'scale-100' : 'scale-0'}
        `}
        >
          <CheckIcon />
        </div>
      </span>
      <When value={children}>{children}</When>
    </div>
  );
}
