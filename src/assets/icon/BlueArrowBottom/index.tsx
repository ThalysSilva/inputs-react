import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function BlueArrowBottomIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '11'}
        data-testid={'lockIconTestId'}
        width={width ? width : '18'}
        viewBox={'0 0 18 11'}
        fill={'none'}
      >
        <path d="M1 1L9 9L17 1" stroke="#52B4E6" strokeWidth="2" />
      </svg>
    </>
  );
}
