import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function PaperIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '22'}
        data-testid={'lockIconTestId'}
        width={width ? width : '23'}
        viewBox={'0 0 22 23'}
        fill={'none'}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.9549 0.319881C1.91747 0.545537 1.00762 1.44952 0.760778 2.4999C0.697825 2.76783 0.689106 3.94599 0.688497 12.2631C0.687935 20.0936 0.698669 21.7476 0.750982 21.8725C0.960419 22.3723 1.51392 22.6493 2.00536 22.5004C2.12418 22.4644 2.87634 22.0418 3.67683 21.5612C4.47731 21.0806 5.15723 20.6874 5.18775 20.6874C5.21831 20.6874 5.94272 21.1066 6.79757 21.619C7.65243 22.1314 8.42568 22.5883 8.51592 22.6344C8.74373 22.7507 9.14433 22.7444 9.38311 22.6208C9.48623 22.5674 10.2666 22.1094 11.1172 21.6031C12.015 21.0685 12.6969 20.6911 12.7428 20.7031C12.7863 20.7145 13.4599 21.1099 14.2396 21.5818C15.0727 22.086 15.7471 22.463 15.8752 22.4963C16.1163 22.5588 16.3786 22.5276 16.6054 22.4093C16.8154 22.2997 17.0803 21.9868 17.1375 21.7806C17.1715 21.6584 17.1874 19.5734 17.1875 15.2173L17.1878 8.83318L18.5823 8.81888L19.9769 8.80458L20.2449 8.67896C20.6191 8.50355 20.9544 8.17435 21.1374 7.80277L21.2894 7.49424L21.3028 5.15457C21.3155 2.93757 21.3112 2.79526 21.2215 2.44065C20.9602 1.4071 20.0635 0.538037 19.0333 0.31974C18.5739 0.222428 3.40247 0.222568 2.9549 0.319881ZM3.14025 1.8369C2.79609 1.95582 2.50097 2.21452 2.34333 2.53557L2.21123 2.80458L2.19904 11.7501L2.18686 20.6956L2.33967 20.6023C4.47182 19.3005 4.69626 19.1874 5.14711 19.1874C5.64689 19.1874 5.79267 19.2545 7.39865 20.224L8.94459 21.1573L10.3946 20.2868C11.1921 19.808 11.9374 19.3752 12.0509 19.325C12.3593 19.1886 12.7506 19.1622 13.1104 19.2535C13.3402 19.3119 13.6889 19.4951 14.5394 20.0044L15.6644 20.6781L15.6878 11.5539C15.7112 2.43057 15.7112 2.42954 15.8095 2.17177C15.8636 2.02997 15.9238 1.87702 15.9434 1.83193C15.9773 1.75402 15.6618 1.74999 9.68109 1.75144C3.753 1.75285 3.36886 1.75787 3.14025 1.8369ZM17.9932 1.83905C17.7118 1.93627 17.4622 2.15274 17.3126 2.42958C17.2131 2.61366 17.211 2.65997 17.1979 4.97255L17.1845 7.32802H18.4049C19.5703 7.32802 19.6296 7.32371 19.7208 7.23249C19.8146 7.13874 19.8161 7.09702 19.8029 4.97077L19.7894 2.80458L19.6557 2.53238C19.4944 2.20397 19.1647 1.92441 18.8168 1.8211C18.5056 1.72866 18.2998 1.73316 17.9932 1.83905ZM4.99551 6.02762C4.78003 6.17082 4.61287 6.50171 4.64118 6.72905C4.67325 6.98682 4.83487 7.21393 5.06573 7.32568C5.26593 7.42257 5.30447 7.42355 8.45897 7.41104C11.6131 7.39848 11.6512 7.39721 11.782 7.30027C12.1376 7.03674 12.2373 6.57708 12.011 6.24404C11.7825 5.9079 11.9396 5.92177 8.36343 5.92177H5.15479L4.99551 6.02762ZM5.16876 9.95494C4.98506 10.0099 4.7325 10.2624 4.66907 10.4545C4.56079 10.7827 4.73034 11.1663 5.06447 11.3492C5.199 11.4229 5.47678 11.4296 8.39873 11.4296C11.5297 11.4296 11.5891 11.4279 11.7502 11.3333C12.0001 11.1864 12.1253 10.9684 12.1253 10.6796C12.1253 10.37 11.9905 10.1559 11.7048 10.0116L11.496 9.90615L8.40051 9.91018C6.69797 9.91238 5.24367 9.93254 5.16876 9.95494ZM5.06662 14.0978C4.89276 14.1735 4.74375 14.3533 4.6702 14.5762C4.56422 14.8973 4.72893 15.275 5.04534 15.4365C5.23181 15.5316 5.28295 15.5328 8.44218 15.5204C11.6134 15.5078 11.6512 15.5066 11.782 15.4096C12.0371 15.2206 12.1356 15.0205 12.1154 14.7322C12.0945 14.4325 11.9951 14.2709 11.7439 14.1281C11.5762 14.0326 11.5237 14.0312 8.39236 14.033C5.83598 14.0345 5.18282 14.0472 5.06662 14.0978Z"
          fill="white"
        />
      </svg>
    </>
  );
}