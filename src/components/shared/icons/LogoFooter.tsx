import React from 'react';

interface LogoProps {
  className?: string;
}

const LogoFooter: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="559" 
      height="136" 
      viewBox="0 0 559 136"
    >
    <path d="M30.3924 66.7118C34.7236 68.9492 37.2797 73.0172 37.2797 78.1023C37.2797 85.696 30.2504 91.798 21.588 91.798H0.5V44.3376H21.02C29.6114 44.3376 36.0017 49.5582 36.0017 56.5417C36.0017 60.6097 33.8716 64.4066 30.3924 66.7118ZM25.5642 58.1011C25.5642 55.1179 23.3631 53.0839 20.0259 53.0839H11.0085V63.1862H20.0259C23.3631 63.1862 25.5642 61.0843 25.5642 58.1011ZM20.5939 82.3737C24.1441 82.3737 26.4872 80.1363 26.4872 77.0175C26.4872 73.9664 24.1441 71.729 20.5939 71.729H11.0085V82.3737H20.5939Z" fill="url(#paint0_linear_8903_283)" />
  <path d="M77.892 91.7302L74.4128 82.7805H54.6739L51.2657 91.7302H39.8342L59.3601 44.2698H69.5136L89.6075 91.7302H77.892ZM64.5433 56.8129L58.011 73.8308H71.0756L64.5433 56.8129Z" fill="url(#paint1_linear_8903_283)" />
  <path d="M108.265 82.2381H129.637V91.7302H92.0765V90.2386L112.81 53.8297H93.2126V44.2698H128.785V46.1682L108.265 82.2381Z" fill="url(#paint2_linear_8903_283)" />
  <path d="M170.252 91.7302L166.773 82.7805H147.034L143.626 91.7302H132.194L151.72 44.2698H161.873L181.967 91.7302H170.252ZM156.903 56.8129L150.371 73.8308H163.435L156.903 56.8129Z" fill="url(#paint3_linear_8903_283)" />
  <path d="M281.171 0.234741C271.247 1.13677 262.074 4.13467 253.929 9.1754C251.344 10.7672 247.119 13.8182 246.786 14.3488C246.674 14.5345 245.618 15.41 244.478 16.312C241.309 18.7528 241.254 19.0446 244.339 17.0814C249.76 13.6325 255.959 11.1652 262.519 9.83866C265.715 9.17541 266.577 9.12234 272.414 9.09581C278.085 9.09581 279.169 9.17541 282.004 9.73254C302.185 13.6855 318.03 27.8792 323.811 47.1931C325.173 51.7828 325.035 51.8624 322.588 47.6972C318.474 40.7994 317.335 39.0484 315.667 36.8729C302.602 20.0528 280.531 11.2978 258.961 14.4018C238.613 17.3202 221.184 29.922 212.929 47.7237C209.788 54.5154 208.147 61.3072 207.87 68.9213C207.119 88.9781 217.015 107.31 234.694 118.612C239.336 121.61 247.369 124.926 254.763 126.943C254.986 126.996 253.679 126.306 251.845 125.377C247.953 123.414 246.758 122.698 243.922 120.655C236.028 114.898 229.885 106.7 226.716 97.6535C220.684 80.3558 224.826 61.4133 237.779 47.087C239.197 45.5217 240.476 44.1687 240.642 44.0891C241.032 43.8503 241.004 43.8769 238.558 47.4319C234.332 53.5338 231.025 61.3337 229.579 68.6295C228.578 73.6172 228.356 80.8334 229.051 85.9006C231.803 106.621 246.202 124.475 266.16 131.904C273.165 134.504 279.197 135.724 286.313 135.963C307.244 136.679 327.036 126.943 338.461 110.308C343.297 103.278 346.522 95.027 347.745 86.5639C348.467 81.5762 348.245 73.8029 347.189 67.9928L346.355 63.4826L346.188 68.656C346.021 73.4049 345.66 76.2702 344.826 79.3212C339.628 98.582 323.367 112.59 302.157 116.039C298.071 116.702 290.844 116.835 286.535 116.304C282.922 115.853 277.668 114.792 276.751 114.314C276.473 114.155 279.308 114.076 284.228 114.102C292.79 114.155 294.458 114.023 300.212 112.696C311.692 110.07 321.032 104.976 329.26 96.8841C334.096 92.1352 337.154 87.9434 340.267 81.7884C342.463 77.464 344.103 72.7947 344.993 68.1519C345.382 66.1622 345.799 64.1724 345.938 63.7479C346.355 62.4745 346.077 51.889 345.549 48.891C342.991 33.6893 335.18 20.9813 322.811 11.8815C311.136 3.25918 295.625 -1.09177 281.171 0.234741ZM302.741 6.60198C317.418 11.3774 329.565 21.5119 336.237 34.5648C343.937 49.6339 343.881 67.0111 336.07 82.0537C331.372 91.1271 324.562 98.529 315.639 104.18C313.249 105.719 309.746 107.655 309.385 107.655C309.274 107.655 310.663 106.7 312.47 105.559C328.926 95.1331 338.544 76.8008 337.793 57.3807C337.432 48.5727 335.625 41.6483 331.622 33.7689C328.537 27.6935 325.59 23.7139 320.698 18.9385C315.111 13.4998 308.829 9.41417 301.879 6.7081C299.517 5.77954 298.961 5.51425 299.294 5.51425C299.378 5.51425 300.934 5.99178 302.741 6.60198ZM286.647 6.73463C286.563 6.81422 286.313 6.84074 286.118 6.76115C285.896 6.68156 285.98 6.60198 286.285 6.60198C286.591 6.57545 286.758 6.65504 286.647 6.73463ZM290.344 7.37136C310.691 11.9876 326.786 26.9506 332.039 46.1319C333.54 51.6502 333.818 53.9318 333.818 60.299C333.818 66.4805 333.568 68.3642 332.151 73.8294C328.203 88.7659 316.89 102.004 302.435 108.557C298.989 110.123 298.071 110.335 300.768 108.902C311.164 103.49 318.752 95.876 323.867 85.768C327.814 77.915 329.593 70.3805 329.565 61.3602C329.565 48.0421 325.451 36.3953 317.057 25.8098C314.972 23.1833 309.551 18.063 306.688 15.9671C300.99 11.8815 293.679 8.48562 287.425 7.02646L286.869 6.89381L287.425 6.86727C287.731 6.86727 289.037 7.07952 290.344 7.37136ZM274.805 17.4528C278.975 17.8773 284.145 18.912 287.981 20.1324C291.261 21.167 299.545 24.9078 300.907 25.9425C301.296 26.2343 300.045 25.7568 298.127 24.9078C289.287 20.9017 281.504 19.363 271.469 19.6548C264.409 19.8671 258.599 20.9813 252.067 23.4221C239.781 28.0118 229.051 36.6076 222.213 47.3523C217.765 54.3563 214.763 62.8724 213.902 71.0172C213.429 75.5008 213.54 78.7905 214.318 84.9721C214.43 85.9537 214.43 85.9802 214.179 85.2374C212.706 80.966 212.067 70.9641 212.901 64.7561C215.681 43.8769 230.079 26.871 250.622 20.1324C258.321 17.6385 266.772 16.6834 274.805 17.4528ZM282.199 23.1568C290.733 24.218 298.794 27.1098 305.66 31.5138C309.607 34.0342 311.191 35.4137 307.661 33.2383C302.324 29.9485 296.376 27.6669 289.788 26.3404C285.535 25.4915 277.39 25.1466 272.943 25.6506C256.125 27.5343 240.976 36.0505 230.802 49.289C220.767 62.3684 217.293 79.2681 221.546 94.3903C222.241 96.9372 221.74 96.1147 220.74 93.1168C210.705 62.8459 230.107 30.9301 262.824 23.9527C268.495 22.7323 276.278 22.4405 282.199 23.1568ZM285.563 28.5955C301.212 30.1873 314.611 37.6953 323.172 49.6074C325.368 52.6849 325.618 53.6399 325.841 60.299C325.952 64.199 325.896 66.1357 325.535 68.8417C323.7 82.5313 316.584 94.7882 305.604 103.251C298.683 108.557 289.649 112.219 280.726 113.359C275.194 114.076 274.388 113.943 268.634 111.317C253.624 104.498 242.477 91.7107 238.53 76.7477C237.251 71.9192 236.89 68.4968 237.057 63.2173C237.279 56.0011 238.558 50.5625 241.421 44.6462C242.56 42.2585 243.644 41.1973 247.897 38.332C258.877 30.9036 272.776 27.2955 285.563 28.5955ZM235.222 59.6888C235.139 59.9011 235.055 59.8215 235.055 59.5296C235.027 59.2378 235.111 59.0786 235.194 59.1848C235.277 59.2643 235.305 59.5031 235.222 59.6888ZM234.805 65.6846C234.666 71.7601 235.055 74.9437 236.528 80.1171C242.366 100.439 260.99 115.986 284.173 119.912C288.843 120.682 298.627 120.761 302.991 120.045C314.138 118.188 324.117 113.678 331.15 107.284C332.095 106.435 332.873 105.825 332.873 105.984C332.873 106.355 327.23 111.555 325.229 112.988C317.168 118.851 307.467 122.618 297.293 123.839C293.902 124.237 286.98 124.157 283.339 123.706C270.747 122.114 259.183 116.649 250.26 108C245.451 103.384 242.56 99.4841 239.586 93.727C235.5 85.7945 233.693 77.7293 233.999 68.7887C234.11 65.4193 234.61 60.4317 234.861 60.4317C234.888 60.4317 234.861 62.7929 234.805 65.6846ZM231.608 69.6376C231.525 69.9029 231.469 69.7438 231.469 69.3193C231.469 68.8683 231.525 68.6826 231.608 68.8417C231.664 69.0274 231.664 69.3989 231.608 69.6376ZM231.692 76.9334C233.054 93.3556 242.227 108.345 256.848 118.055C263.214 122.273 271.581 125.669 279.28 127.128C284.506 128.137 288.231 128.428 293.401 128.269C304.882 127.871 314.833 124.794 324.395 118.639C327.369 116.702 327.425 116.702 325.924 118.002C323.923 119.753 320.17 122.3 316.973 124.051C310.246 127.792 302.324 130.339 294.513 131.241C291.122 131.665 284.201 131.586 280.531 131.135C259.016 128.455 241.059 114.102 234.193 94.178C231.886 87.4659 231.108 82.6109 231.191 75.4212C231.219 72.9274 231.275 71.4417 231.33 72.1049C231.358 72.7682 231.525 74.9437 231.692 76.9334Z" fill="url(#paint4_linear_8903_283)" />
  <path d="M395.379 92.6794C383.947 92.6794 376.066 86.5774 376.066 76.4073H386.929C386.929 80.9499 390.906 83.1873 395.308 83.1873C399.355 83.1873 403.331 81.1533 403.331 77.6277C403.331 73.8986 398.787 72.8816 393.391 71.729C385.864 69.9662 376.776 67.8644 376.776 57.6265C376.776 48.5412 383.805 43.3884 394.811 43.3884C406.242 43.3884 412.704 49.2192 412.704 58.7113H402.124C402.124 54.5755 398.574 52.6771 394.527 52.6771C391.048 52.6771 387.568 54.1009 387.568 57.2197C387.568 60.5419 391.829 61.5589 397.154 62.7794C404.68 64.61 414.195 66.8474 414.195 77.4921C414.195 87.73 405.674 92.6794 395.379 92.6794Z" fill="url(#paint5_linear_8903_283)" />
  <path d="M464.262 91.7302H451.126L433.589 68.6102V91.7302H422.867V44.2698H433.589V66.2372L449.919 44.2698H462.416L445.517 67.0508L464.262 91.7302Z" fill="url(#paint6_linear_8903_283)" />
  <path d="M469.463 91.7302V44.2698H480.184V91.7302H469.463Z" fill="url(#paint7_linear_8903_283)" />
  <path d="M502.304 82.2381H521.404V91.7302H491.582V44.2698H502.304V82.2381Z" fill="url(#paint8_linear_8903_283)" />
  <path d="M539.4 82.2381H558.5V91.7302H528.679V44.2698H539.4V82.2381Z" fill="url(#paint9_linear_8903_283)" />
  <defs>
    <linearGradient id="paint0_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint1_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint2_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint3_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint4_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint5_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint6_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint7_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint8_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
    <linearGradient id="paint9_linear_8903_283" x1="253.5" y1="67.9999" x2="355.167" y2="67.9999" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4DC760" />
      <stop offset="1" stopColor="#FFF854" />
    </linearGradient>
  </defs>
    </svg>
  );
};

export default LogoFooter;
