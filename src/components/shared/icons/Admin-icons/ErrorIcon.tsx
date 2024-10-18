import type { HTMLProps } from 'react';

import React from 'react';

interface ErrorIconProps
  extends HTMLProps<HTMLDivElement> {}

const ErrorIcon: React.FC<ErrorIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={` ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 32 32"
        fill="#F92B2D"
      >
        <path
          d="M16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16zM14.4 20.8v3.2h3.2v-3.2h-3.2zM14.4 8v9.6h3.2v-9.6h-3.2z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ErrorIcon;
