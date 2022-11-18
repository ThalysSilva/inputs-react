import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function FacebookIcon({ hoverAnimate, height, width }: CustomIconProps) {
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
          d="M21.0299 30H17.362C16.7493 30 16.251 29.5431 16.251 28.9813V21.396H14.111C13.4984 21.396 13 20.9389 13 20.3773V17.127C13 16.5653 13.4984 16.1084 14.111 16.1084H16.251V14.4807C16.251 12.8668 16.8037 11.4938 17.8492 10.5102C18.8994 9.52215 20.3671 9 22.0936 9L24.8909 9.00417C25.5025 9.00513 26 9.46207 26 10.0228V13.0407C26 13.6024 25.5018 14.0593 24.8893 14.0593L23.0059 14.06C22.4315 14.06 22.2853 14.1656 22.254 14.1979C22.2024 14.2516 22.1411 14.4033 22.1411 14.8223V16.1082H24.7478C24.944 16.1082 25.1341 16.1526 25.2975 16.2362C25.65 16.4168 25.8691 16.7582 25.8691 17.1272L25.8677 20.3775C25.8677 20.9389 25.3693 21.3959 24.7567 21.3959H22.1411V28.9813C22.1411 29.5431 21.6426 30 21.0299 30ZM17.5937 28.7689H20.7982V20.8449C20.7982 20.4698 21.1311 20.1647 21.54 20.1647H24.525L24.5262 17.3395H21.5398C21.1309 17.3395 20.7982 17.0344 20.7982 16.6593V14.8223C20.7982 14.3413 20.8515 13.7943 21.2475 13.3832C21.7259 12.8862 22.4799 12.8289 23.0056 12.8289L24.6573 12.8282V10.235L22.0925 10.2311C19.3179 10.2311 17.5937 11.8596 17.5937 14.4807V16.6593C17.5937 17.0343 17.261 17.3395 16.8521 17.3395H14.3427V20.1647H16.8521C17.261 20.1647 17.5937 20.4698 17.5937 20.8449V28.7689Z"
          fill="#344054"
        />
      </svg>
    </>
  );
}
