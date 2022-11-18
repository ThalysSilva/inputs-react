import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export function CloseDrawerIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '50'}
      width={width ? width : '43'}
      viewBox={'0 0 43 50'}
      fill={'none'}
    >
      <line x1="1.29289" y1="45.2929" x2="40.1838" y2="6.40202" stroke="black" strokeWidth="2" />
      <line x1="2.70711" y1="6.29289" x2="41.598" y2="45.1838" stroke="black" strokeWidth="2" />
    </svg>
  );
}
