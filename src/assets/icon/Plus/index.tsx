import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function PlusIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '13'}
        data-testid={'lockIconTestId'}
        width={width ? width : '12'}
        viewBox={'0 0 12 13'}
        fill={'none'}
      >
        <path d="M0 6.71436H12" stroke="#BD4560" strokeWidth="2" />
        <path d="M6 12.7144L6 0.714355" stroke="#BD4560" strokeWidth="2" />
      </svg>
    </>
  );
}
