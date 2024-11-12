import type { HTMLProps } from 'react';
import React from 'react';

interface CountersIconProps extends HTMLProps<HTMLDivElement> {}
const CountersIcon: React.FC<CountersIconProps> = ({ className, ...rest }) => {
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
          d="M9 0C8.4477 0 8 0.44771 8 1V18H6V9C6 8.4477 5.55228 8 5 8H3C2.44772 8 2 8.4477 2 9V18H1C0.44772 18 0 18.4477 0 19C0 19.5523 0.44772 20 1 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H18V6C18 5.44772 17.5523 5 17 5H15C14.4477 5 14 5.44772 14 6V18H12V1C12 0.44772 11.5523 0 11 0H9Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default CountersIcon;
