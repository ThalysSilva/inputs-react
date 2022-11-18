import { CustomIconProps } from '../../../utils/types';
import React from 'react';

export default function MiniArrowRight({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '7'}
        data-testid={'lockIconTestId'}
        width={width ? width : '6'}
        viewBox={'0 0 6 7'}
        fill={'none'}
      >
        <path
          d="M4.75192 4.33205L1.5547 6.46353C0.890145 6.90657 -4.67634e-08 6.43018 -8.16755e-08 5.63148L-2.68016e-07 1.36852C-3.02928e-07 0.569822 0.890145 0.09343 1.5547 0.536467L4.75192 2.66795C5.34566 3.06377 5.34566 3.93623 4.75192 4.33205Z"
          fill="#EAECEF"
        />
      </svg>
    </>
  );
}
