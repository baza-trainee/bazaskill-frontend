import type { HTMLProps } from 'react';

import React from 'react';

interface SettingsIconProps
  extends HTMLProps<HTMLDivElement> {}
const SettingsIcon: React.FC<SettingsIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.13127 11.6308C-0.0507998 10.5349 -0.0447897 9.434 0.13216 8.3695C1.23337 8.3963 2.22374 7.86798 2.60865 6.93871C2.99357 6.00944 2.66685 4.93557 1.86926 4.17581C2.49685 3.29798 3.27105 2.51528 4.17471 1.86911C4.9345 2.66716 6.0087 2.99416 6.93822 2.60914C7.86774 2.22412 8.3961 1.23332 8.369 0.131759C9.4649 -0.0503115 10.5658 -0.0443015 11.6303 0.132649C11.6036 1.23385 12.1319 2.22422 13.0612 2.60914C13.9904 2.99406 15.0643 2.66733 15.8241 1.86975C16.7019 2.49734 17.4846 3.27153 18.1308 4.1752C17.3327 4.93499 17.0057 6.00919 17.3907 6.93871C17.7757 7.86823 18.7665 8.3966 19.8681 8.3695C20.0502 9.4654 20.0442 10.5663 19.8672 11.6308C18.766 11.6041 17.7756 12.1324 17.3907 13.0616C17.0058 13.9909 17.3325 15.0648 18.1301 15.8245C17.5025 16.7024 16.7283 17.4851 15.8247 18.1312C15.0649 17.3332 13.9907 17.0062 13.0612 17.3912C12.1316 17.7762 11.6033 18.767 11.6303 19.8686C10.5344 20.0507 9.4335 20.0447 8.3691 19.8677C8.3958 18.7665 7.86749 17.7761 6.93822 17.3912C6.00895 17.0063 4.93508 17.333 4.17532 18.1306C3.29749 17.503 2.51479 16.7288 1.86862 15.8252C2.66667 15.0654 2.99367 13.9912 2.60865 13.0616C2.22363 12.1321 1.23284 11.6038 0.13127 11.6308ZM9.9997 13.0002C11.6565 13.0002 12.9997 11.657 12.9997 10.0002C12.9997 8.3433 11.6565 7.00018 9.9997 7.00018C8.3428 7.00018 6.99969 8.3433 6.99969 10.0002C6.99969 11.657 8.3428 13.0002 9.9997 13.0002Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SettingsIcon;