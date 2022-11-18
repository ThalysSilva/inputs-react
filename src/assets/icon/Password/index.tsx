import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function PasswordIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '8'}
        data-testid={'lockIconTestId'}
        width={width ? width : '16'}
        viewBox={'0 0 16 8'}
        fill={'none'}
      >
        <path
          d="M6.00063 6.66681H10.0006V8.00014H6.00063V6.66681ZM9.19596 0.528809L8.00063 1.72414L6.8053 0.528809L5.86263 1.47148L7.05796 2.66681L5.86263 3.86214L6.8053 4.80481L8.00063 3.60948L9.19596 4.80481L10.1386 3.86214L8.9433 2.66681L10.1386 1.47148L9.19596 0.528809ZM11.334 8.00014H15.334V6.66681H11.334V8.00014ZM15.472 1.47148L14.5293 0.528809L13.334 1.72414L12.1386 0.528809L11.196 1.47148L12.3913 2.66681L11.196 3.86214L12.1386 4.80481L13.334 3.60948L14.5293 4.80481L15.472 3.86214L14.2766 2.66681L15.472 1.47148ZM0.667297 8.00014H4.6673V6.66681H0.667297V8.00014ZM3.86263 0.528809L2.6673 1.72414L1.47196 0.528809L0.529297 1.47148L1.72463 2.66681L0.529297 3.86214L1.47196 4.80481L2.6673 3.60948L3.86263 4.80481L4.8053 3.86214L3.60996 2.66681L4.8053 1.47148L3.86263 0.528809Z"
          fill="#CFD6DC"
        />
      </svg>
    </>
  );
}
