import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function ShortArrowTopIcon({ hoverAnimate, height, width, fill }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '8'}
        data-testid={'lockIconTestId'}
        width={width ? width : '14'}
        viewBox={'0 0 14 8'}
        fill={'none'}
      >
        <path
          d="M13 7L7 0.999999L1 7"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
