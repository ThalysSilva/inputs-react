import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function TikTokIcon({ hoverAnimate, height, width }: CustomIconProps) {
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
        <path
          d="M28.8354 13.3467L28.8368 13.347C29.1196 13.4066 29.4059 13.4474 29.6938 13.4692V16.7547C27.835 16.6626 26.0377 16.0387 24.5181 14.9523L23.7273 14.387V15.3591V24.0919C23.7273 24.0919 23.7273 24.0919 23.7273 24.0919C23.7272 25.5652 23.2881 27.0051 22.466 28.2277C21.6439 29.4503 20.4761 30.4003 19.1117 30.9562C17.7473 31.5122 16.2482 31.649 14.8058 31.3491C13.3633 31.0492 12.0429 30.3264 11.0132 29.2727C9.93335 28.1674 9.22604 26.7521 8.99017 25.2249C8.75431 23.6977 9.00169 22.135 9.69771 20.7554C10.3937 19.3757 11.5036 18.2481 12.872 17.5303C14.1121 16.8798 15.5082 16.5953 16.8983 16.7051V20.005C16.2605 19.9115 15.6064 19.9686 14.9894 20.1758C14.1598 20.4545 13.4405 20.9902 12.9358 21.7053C12.4312 22.4203 12.1674 23.2775 12.1827 24.1526C12.1981 25.0277 12.4918 25.8751 13.0212 26.572L13.4143 26.2733L13.0214 26.5722C13.5427 27.2576 14.2657 27.7624 15.0887 28.0158C15.9118 28.2691 16.7935 28.2582 17.61 27.9845C18.4265 27.7109 19.1367 27.1883 19.6409 26.4902C20.1451 25.7921 20.4178 24.9536 20.4209 24.0924V24.0907V7.5H23.7273V7.55127V7.57437L23.7294 7.59738C23.857 8.97465 24.4211 10.2752 25.3396 11.3094C26.258 12.3436 27.4828 13.0573 28.8354 13.3467Z"
          stroke="#344054"
        />
      </svg>
    </>
  );
}
