import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function PlayStoreDownloadIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '53'}
      width={width ? width : '181'}
      viewBox={'0 0 181 53'}
      fill={'none'}
    >
      <path
        d="M173.719 52.1423H7.28104C3.62108 52.1423 0.623535 49.2157 0.623535 45.6423V6.64234C0.623535 3.06896 3.62108 0.142337 7.28104 0.142337H173.719C177.379 0.142337 180.376 3.06896 180.376 6.64234V45.6423C180.376 49.2157 177.379 52.1423 173.719 52.1423Z"
        fill="black"
      />
      <path
        d="M173.719 1.18396C176.801 1.18396 179.309 3.63284 179.309 6.64234V45.6423C179.309 48.6518 176.801 51.1007 173.719 51.1007H7.28104C4.19861 51.1007 1.6904 48.6518 1.6904 45.6423V6.64234C1.6904 3.63284 4.19861 1.18396 7.28104 1.18396H173.719ZM173.719 0.142337H7.28104C3.62108 0.142337 0.623535 3.06896 0.623535 6.64234V45.6423C0.623535 49.2157 3.62108 52.1423 7.28104 52.1423H173.719C177.379 52.1423 180.376 49.2157 180.376 45.6423V6.64234C180.376 3.06896 177.379 0.142337 173.719 0.142337Z"
        fill="#A6A6A6"
      />
      <path
        d="M63.7601 13.4593C63.7601 14.5448 63.4272 15.4141 62.7715 16.0625C62.0175 16.8311 61.0355 17.2179 59.8322 17.2179C58.6821 17.2179 57.7001 16.8246 56.8946 16.0495C56.0873 15.263 55.6846 14.2978 55.6846 13.1424C55.6846 11.987 56.0873 11.0218 56.8946 10.2418C57.7001 9.46015 58.6821 9.06689 59.8322 9.06689C60.4047 9.06689 60.9507 9.18227 61.4716 9.39677C61.9909 9.61289 62.4136 9.90539 62.7199 10.2661L62.0242 10.9519C61.4899 10.336 60.7626 10.0321 59.8322 10.0321C58.9934 10.0321 58.266 10.3181 57.6485 10.895C57.0377 11.4735 56.7315 12.2226 56.7315 13.1424C56.7315 14.0621 57.0377 14.8178 57.6485 15.3963C58.266 15.9666 58.9934 16.2591 59.8322 16.2591C60.7226 16.2591 61.4716 15.9666 62.0625 15.3898C62.4519 15.0079 62.6733 14.4814 62.7315 13.8086H59.8322V12.8694H63.7002C63.7468 13.0725 63.7601 13.2691 63.7601 13.4593Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M69.8963 10.2027H66.263V12.6727H69.5385V13.612H66.263V16.082H69.8963V17.0391H65.2344V9.24561H69.8963V10.2027Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M74.2274 17.0391H73.1988V10.2027H70.9702V9.24561H76.4577V10.2027H74.2274V17.0391Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M80.4287 17.0391V9.24561H81.4556V17.0391H80.4287Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M86.0077 17.0391H84.9874V10.2027H82.7505V9.24561H88.2446V10.2027H86.0077V17.0391Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M98.6335 16.0365C97.8462 16.8246 96.8709 17.2179 95.7075 17.2179C94.5374 17.2179 93.5621 16.8246 92.7749 16.0365C91.9893 15.25 91.5981 14.2848 91.5981 13.1424C91.5981 12 91.9893 11.0348 92.7749 10.2483C93.5621 9.46014 94.5374 9.06689 95.7075 9.06689C96.8642 9.06689 97.8396 9.46014 98.6268 10.2548C99.4191 11.0478 99.8102 12.0065 99.8102 13.1424C99.8102 14.2848 99.4191 15.25 98.6335 16.0365ZM93.5355 15.3833C94.128 15.9666 94.8487 16.2591 95.7075 16.2591C96.5596 16.2591 97.287 15.9666 97.8728 15.3833C98.4637 14.7999 98.7633 14.0508 98.7633 13.1424C98.7633 12.234 98.4637 11.4849 97.8728 10.9015C97.287 10.3181 96.5596 10.0256 95.7075 10.0256C94.8487 10.0256 94.128 10.3181 93.5355 10.9015C92.9446 11.4849 92.645 12.234 92.645 13.1424C92.645 14.0508 92.9446 14.7999 93.5355 15.3833Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M101.253 17.0391V9.24561H102.502L106.383 15.3069H106.428L106.383 13.8086V9.24561H107.41V17.0391H106.338L102.274 10.6789H102.229L102.274 12.1836V17.0391H101.253Z"
        fill="white"
        stroke="white"
        strokeWidth="0.16"
        strokeMiterlimit="10"
      />
      <path
        d="M91.3451 28.4206C88.2177 28.4206 85.6629 30.7444 85.6629 33.9505C85.6629 37.1306 88.2177 39.4787 91.3451 39.4787C94.4791 39.4787 97.0339 37.1306 97.0339 33.9505C97.0339 30.7444 94.4791 28.4206 91.3451 28.4206ZM91.3451 37.3012C89.6291 37.3012 88.1528 35.9184 88.1528 33.9505C88.1528 31.9566 89.6291 30.5981 91.3451 30.5981C93.061 30.5981 94.544 31.9566 94.544 33.9505C94.544 35.9184 93.061 37.3012 91.3451 37.3012ZM78.9471 28.4206C75.8131 28.4206 73.265 30.7444 73.265 33.9505C73.265 37.1306 75.8131 39.4787 78.9471 39.4787C82.0795 39.4787 84.6293 37.1306 84.6293 33.9505C84.6293 30.7444 82.0795 28.4206 78.9471 28.4206ZM78.9471 37.3012C77.2295 37.3012 75.7482 35.9184 75.7482 33.9505C75.7482 31.9566 77.2295 30.5981 78.9471 30.5981C80.6631 30.5981 82.1394 31.9566 82.1394 33.9505C82.1394 35.9184 80.6631 37.3012 78.9471 37.3012ZM64.1941 30.1155V32.4652H69.9412C69.7731 33.7782 69.3237 34.7435 68.6347 35.4162C67.7958 36.2287 66.4893 37.1306 64.1941 37.1306C60.6573 37.1306 57.8878 34.3437 57.8878 30.8906C57.8878 27.4375 60.6573 24.6506 64.1941 24.6506C66.1065 24.6506 67.4979 25.3802 68.5248 26.326L70.2208 24.6701C68.7845 23.3311 66.8738 22.3025 64.1941 22.3025C59.3441 22.3025 55.2681 26.1554 55.2681 30.8906C55.2681 35.6259 59.3441 39.4787 64.1941 39.4787C66.8155 39.4787 68.7845 38.6402 70.3323 37.0672C71.9185 35.5186 72.4128 33.3411 72.4128 31.5829C72.4128 31.0369 72.3662 30.5347 72.283 30.1155H64.1941ZM124.521 31.9371C124.053 30.7005 122.61 28.4206 119.671 28.4206C116.758 28.4206 114.333 30.6615 114.333 33.9505C114.333 37.0477 116.733 39.4787 119.951 39.4787C122.552 39.4787 124.053 37.9301 124.671 37.0282L122.74 35.7721C122.096 36.6919 121.219 37.3012 119.951 37.3012C118.691 37.3012 117.787 36.7374 117.208 35.6259L124.782 32.566L124.521 31.9371ZM116.798 33.7782C116.733 31.6462 118.494 30.5542 119.756 30.5542C120.745 30.5542 121.583 31.0369 121.863 31.7275L116.798 33.7782ZM110.642 39.1424H113.132V22.8924H110.642V39.1424ZM106.564 29.6524H106.481C105.922 29.0056 104.855 28.4206 103.503 28.4206C100.667 28.4206 98.0741 30.8516 98.0741 33.9684C98.0741 37.0672 100.667 39.4787 103.503 39.4787C104.855 39.4787 105.922 38.8889 106.481 38.2226H106.564V39.0156C106.564 41.1297 105.407 42.2656 103.542 42.2656C102.02 42.2656 101.077 41.1931 100.687 40.2912L98.5218 41.1736C99.146 42.6394 100.799 44.4431 103.542 44.4431C106.461 44.4431 108.924 42.7661 108.924 38.6857V28.757H106.564V29.6524ZM103.716 37.3012C102 37.3012 100.564 35.8989 100.564 33.9684C100.564 32.02 102 30.5981 103.716 30.5981C105.407 30.5981 106.741 32.02 106.741 33.9684C106.741 35.8989 105.407 37.3012 103.716 37.3012ZM136.178 22.8924H130.223V39.1424H132.706V32.9852H136.178C138.936 32.9852 141.641 31.0369 141.641 27.938C141.641 24.8407 138.93 22.8924 136.178 22.8924ZM136.243 30.7249H132.706V25.1527H136.243C138.097 25.1527 139.156 26.6559 139.156 27.938C139.156 29.1957 138.097 30.7249 136.243 30.7249ZM151.594 28.3897C149.8 28.3897 147.934 29.1632 147.167 30.8776L149.37 31.7795C149.845 30.8776 150.717 30.5851 151.639 30.5851C152.927 30.5851 154.233 31.3407 154.253 32.6749V32.8455C153.804 32.592 152.842 32.2166 151.659 32.2166C149.285 32.2166 146.867 33.4922 146.867 35.8729C146.867 38.0504 148.811 39.4527 150.996 39.4527C152.667 39.4527 153.589 38.7166 154.169 37.8602H154.253V39.1164H156.652V32.8829C156.652 30.0017 154.448 28.3897 151.594 28.3897ZM151.294 37.2947C150.482 37.2947 149.35 36.9015 149.35 35.9184C149.35 34.6606 150.762 34.178 151.983 34.178C153.077 34.178 153.589 34.4136 154.253 34.724C154.059 36.2287 152.732 37.2947 151.294 37.2947ZM165.39 28.7456L162.535 35.79H162.451L159.5 28.7456H156.822L161.255 38.5899L158.726 44.0677H161.32L168.153 28.7456H165.39ZM143.006 39.1424H145.496V22.8924H143.006V39.1424Z"
        fill="white"
      />
      <path
        d="M14.5179 9.94278C14.1267 10.3425 13.9004 10.9649 13.9004 11.7709V40.5204C13.9004 41.3264 14.1267 41.9488 14.5179 42.3485L14.6144 42.4363L31.115 26.3325V25.9523L14.6144 9.84853L14.5179 9.94278Z"
        fill="url(#paint0_linear_792_21816)"
      />
      <path
        d="M36.6089 31.7031L31.1147 26.3325V25.9522L36.6155 20.5816L36.7387 20.6515L43.253 24.2704C45.1121 25.2974 45.1121 26.9874 43.253 28.0209L36.7387 31.6332L36.6089 31.7031Z"
        fill="url(#paint1_linear_792_21816)"
      />
      <path
        d="M36.7387 31.6333L31.1147 26.1424L14.5176 42.3485C15.1351 42.9823 16.142 43.0587 17.2871 42.4249L36.7387 31.6333Z"
        fill="url(#paint2_linear_792_21816)"
      />
      <path
        d="M36.7387 20.6515L17.2871 9.85984C16.142 9.23259 15.1351 9.30896 14.5176 9.94271L31.1147 26.1423L36.7387 20.6515Z"
        fill="url(#paint3_linear_792_21816)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_21816"
          x1="29.65"
          y1="40.8198"
          x2="7.8391"
          y2="18.4804"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset="0.0066" stopColor="#00A1FF" />
          <stop offset="0.2601" stopColor="#00BEFF" />
          <stop offset="0.5122" stopColor="#00D2FF" />
          <stop offset="0.7604" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_792_21816"
          x1="45.6739"
          y1="26.1406"
          x2="13.4557"
          y2="26.1406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset="0.4087" stopColor="#FFBD00" />
          <stop offset="0.7754" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_792_21816"
          x1="33.6805"
          y1="23.1575"
          x2="4.10322"
          y2="-7.13651"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_792_21816"
          x1="10.3397"
          y1="51.9133"
          x2="23.5473"
          y2="38.3858"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset="0.0685" stopColor="#2DA771" />
          <stop offset="0.4762" stopColor="#15CF74" />
          <stop offset="0.8009" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
}
