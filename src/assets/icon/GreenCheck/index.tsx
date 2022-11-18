import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function GreenCheckIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '16'}
      width={width ? width : '11'}
      viewBox={'0 0 16 11'}
      fill={'none'}
    >
      <path d="M1 4.16667L6.6 9.5L15 1.5" stroke="#61D4A2" strokeWidth="2" />
    </svg>
  );
}
