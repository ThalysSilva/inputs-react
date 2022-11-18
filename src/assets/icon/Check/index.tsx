import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function CheckIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '25'}
      width={width ? width : '15'}
      viewBox={'0 0 17 11'}
      fill={'none'}
    >
      <path d="M1.5 4L7 9.5L15.5 1" stroke="white" strokeWidth="2" />
    </svg>
  );
}
