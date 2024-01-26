import React, { HTMLProps } from 'react';

interface ArrowIconProps
  extends HTMLProps<HTMLDivElement> {}
const ArrowIcon: React.FC<ArrowIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none">
        <path
          d="M7.99969 10C7.39739 10 6.81224 9.71875 6.39508 9.23001L0.308071 2.1038C-0.122797 1.59881 -0.0987961 0.807564 0.361787 0.336317C0.82237 -0.13243 1.54696 -0.107429 1.97669 0.396317L7.99969 7.44627L14.0227 0.396317C14.4524 -0.108679 15.1782 -0.13368 15.6376 0.336317C16.0982 0.807564 16.1233 1.59881 15.6925 2.1038L9.60545 9.23001C9.18715 9.71875 8.602 10 7.99969 10Z"
          fill="#020202"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
