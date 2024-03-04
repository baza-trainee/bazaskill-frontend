import React, { HTMLProps } from 'react';

interface PlusIconProps extends HTMLProps<HTMLDivElement> {}
const PlusIcon: React.FC<PlusIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="60"
        height="60"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="2.1333"
          d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333s-5.97-13.333-13.333-13.333-13.333 5.97-13.333 13.333 5.97 13.333 13.333 13.333zM10.667 16h10.667M16 10.667v10.667"></path>
      </svg>
    </div>
  );
};

export default PlusIcon;
