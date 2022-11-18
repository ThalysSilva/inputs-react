import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function LongArrowRightIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '16'}
        data-testid={'lockIconTestId'}
        width={width ? width : '72'}
        viewBox={'0 0 72 16'}
        fill={'none'}
      >
        <path
          d="M71.7071 8.70711C72.0976 8.31658 72.0976 7.68342 71.7071 7.29289L65.3431 0.928932C64.9526 0.538408 64.3195 0.538408 63.9289 0.928932C63.5384 1.31946 63.5384 1.95262 63.9289 2.34315L69.5858 8L63.9289 13.6569C63.5384 14.0474 63.5384 14.6805 63.9289 15.0711C64.3195 15.4616 64.9526 15.4616 65.3431 15.0711L71.7071 8.70711ZM0 9H71V7H0V9Z"
          fill="white"
        />
      </svg>
    </>
  );
}
