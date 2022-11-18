import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function MoonIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '22'}
      width={width ? width : '22'}
      viewBox={'0 0 22 22'}
      fill={'none'}
    >
      <path
        d="M20.26 12.9499C19.7954 15.0632 18.6233 16.9545 16.9376 18.311C15.252 19.6675 13.1537 20.408 10.99 20.4099C8.4731 20.4099 6.05928 19.4101 4.27956 17.6303C2.49984 15.8506 1.5 13.4368 1.5 10.9199C1.49819 8.75786 2.23625 6.66026 3.59153 4.97571C4.94681 3.29116 6.8377 2.12109 8.95 1.65991C8.80929 2.31725 8.7389 2.98769 8.74001 3.65991C8.74001 4.90616 8.98547 6.14019 9.46239 7.29156C9.93931 8.44294 10.6383 9.48913 11.5196 10.3704C12.4008 11.2516 13.447 11.9506 14.5983 12.4275C15.7497 12.9044 16.9838 13.1499 18.23 13.1499C18.9118 13.1542 19.5922 13.0872 20.26 12.9499V12.9499Z"
        stroke="#1D1D1B"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
