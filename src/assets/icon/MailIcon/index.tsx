import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function MailIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '17'}
        data-testid={'lockIconTestId'}
        width={width ? width : '16'}
        viewBox={'0 0 16 17'}
        fill={'none'}
      >
        <rect x="3.5" y="5" width="9" height="7" rx="1.5" stroke="#344054" />
        <path
          d="M4 5.5L7.29289 8.79289C7.68342 9.18342 8.31658 9.18342 8.70711 8.79289L12 5.5"
          stroke="#344054"
        />
      </svg>
    </>
  );
}
