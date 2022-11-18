import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function YoutubeIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '39'}
        data-testid={'lockIconTestId'}
        width={width ? width : '39'}
        viewBox={'0 0 39 39'}
        fill={'none'}
      >
        <g clipPath="url(#clip0_1880_22368)">
          <path
            d="M17.6964 15.874C17.2615 15.6141 16.7041 15.9282 16.7041 16.4375V22.5625C16.7041 23.0744 17.2624 23.3841 17.6964 23.1269L22.8317 20.0687C23.2587 19.8141 23.2579 19.1964 22.8326 18.9409L17.6964 15.874ZM18.0166 21.4084V17.5934L21.2147 19.5035L18.0166 21.4084Z"
            fill="#344054"
          />
          <path
            d="M26.416 11.8622C22.3446 11.2575 16.6571 11.2575 12.584 11.8622C10.9548 12.1037 9.67112 13.3829 9.39113 15.0437C8.86963 18.1263 8.86963 20.8747 9.39113 23.9564C9.67112 25.618 10.9548 26.8964 12.584 27.1379C14.6245 27.4407 17.0675 27.592 19.5096 27.592C21.9474 27.592 24.3843 27.4415 26.4169 27.1388C28.0444 26.8973 29.3271 25.6189 29.6089 23.9573C30.1304 20.8747 30.1304 18.1254 29.6089 15.0428C29.3289 13.3829 28.0452 12.1037 26.416 11.8622ZM28.3147 23.7385C28.1284 24.8375 27.2884 25.6828 26.2235 25.8403C22.2703 26.4274 16.7403 26.4274 12.7765 25.8394C11.7107 25.681 10.8699 24.8367 10.6844 23.7377C10.1821 20.7679 10.1821 18.233 10.6844 15.2615C10.8707 14.1625 11.7107 13.319 12.7774 13.1598C14.7566 12.8667 17.1287 12.7197 19.4991 12.7197C21.8712 12.7197 24.2434 12.8667 26.2226 13.1598C27.2884 13.3182 28.1292 14.1625 28.3147 15.2615C28.817 18.233 28.817 20.7679 28.3147 23.7385Z"
            fill="#344054"
          />
        </g>
        <defs>
          <clipPath id="clip0_1880_22368">
            <rect width="21" height="21" fill="white" transform="translate(9 9)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
