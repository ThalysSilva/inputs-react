import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function CheckboxIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '48'}
      width={width ? width : '48'}
      viewBox={'0 0 48 48'}
      fill={'none'}
    >
      <rect width="48" height="48" rx="8" fill="#F9FAFB" />
      <path
        d="M16 21.5L23 28.5L32.5 19"
        stroke="#BD4560"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
