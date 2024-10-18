import type { HTMLProps } from 'react';

import React from 'react';

interface PartnersIconProps
  extends HTMLProps<HTMLDivElement> {}
const PartnersIcon: React.FC<PartnersIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1213 8.4792C12.7308 8.0886 12.0976 8.0886 11.7071 8.4792L11 9.1863C10.2189 9.9673 8.95259 9.9673 8.17154 9.1863C7.39049 8.4052 7.39049 7.13888 8.17154 6.35783L13.8022 0.72568C15.9061 0.24973 18.2008 0.83075 19.8388 2.46875C22.2582 4.88811 22.3716 8.7402 20.1792 11.2939L18.071 13.4289L13.1213 8.4792ZM2.16113 2.46875C4.33452 0.29536 7.66411 -0.0171697 10.17 1.53116L6.75732 4.94362C5.19523 6.50572 5.19523 9.0384 6.75732 10.6005C8.27209 12.1152 10.6995 12.1611 12.2695 10.7382L12.4142 10.6005L16.6568 14.8431L12.4142 19.0858C11.6331 19.8668 10.3668 19.8668 9.5858 19.0858L2.16113 11.6611C-0.377278 9.1227 -0.377278 5.00715 2.16113 2.46875Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default PartnersIcon;
