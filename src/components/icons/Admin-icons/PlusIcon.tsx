import React, { HTMLProps } from 'react';

interface PlusIconProps extends HTMLProps<HTMLDivElement> {}
const PlusIcon: React.FC<PlusIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest}>
      <svg
        width="123"
        height="123"
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61.5 112.75C89.8046 112.75 112.75 89.8046 112.75 61.5C112.75 33.1954 89.8046 10.25 61.5 10.25C33.1954 10.25 10.25 33.1954 10.25 61.5C10.25 89.8046 33.1954 112.75 61.5 112.75Z"
          stroke="#4DC760"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41 61.5H82"
          stroke="#4DC760"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M61.5 41V82"
          stroke="#4DC760"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;
