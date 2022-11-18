import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function LongArrowBottomIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '36'}
        data-testid={'lockIconTestId'}
        width={width ? width : '16'}
        viewBox={'0 0 16 36'}
        fill={'none'}
      >
        <path
          d="M7.29289 35.7071C7.68342 36.0976 8.31658 36.0976 8.70711 35.7071L15.0711 29.3431C15.4616 28.9526 15.4616 28.3195 15.0711 27.9289C14.6805 27.5384 14.0474 27.5384 13.6569 27.9289L8 33.5858L2.34314 27.9289C1.95262 27.5384 1.31946 27.5384 0.928931 27.9289C0.538407 28.3195 0.538407 28.9526 0.928931 29.3431L7.29289 35.7071ZM7 -4.37114e-08L7 0.972222L9 0.972222L9 4.37114e-08L7 -4.37114e-08ZM7 2.91667L7 4.86111L9 4.86111L9 2.91667L7 2.91667ZM7 6.80555L7 8.75L9 8.75L9 6.80555L7 6.80555ZM7 10.6944L7 12.6389L9 12.6389L9 10.6944L7 10.6944ZM7 14.5833L7 16.5278L9 16.5278L9 14.5833L7 14.5833ZM7 18.4722L7 20.4167L9 20.4167L9 18.4722L7 18.4722ZM7 22.3611L7 24.3056L9 24.3056L9 22.3611L7 22.3611ZM7 26.25L7 28.1944L9 28.1944L9 26.25L7 26.25ZM7 30.1389L7 32.0833L9 32.0833L9 30.1389L7 30.1389ZM7 34.0278L7 35L9 35L9 34.0278L7 34.0278Z"
          fill="#46C4FA"
        />
      </svg>
    </>
  );
}
