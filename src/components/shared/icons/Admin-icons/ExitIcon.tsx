import React, { HTMLProps } from 'react';

interface ExitIconProps extends HTMLProps<HTMLDivElement> {}
const ExitIcon: React.FC<ExitIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0H15.5C15.7652 0 16.0196 0.105357 16.2071 0.292893C16.3946 0.48043 16.5 0.734784 16.5 1V19C16.5 19.2652 16.3946 19.5196 16.2071 19.7071C16.0196 19.8946 15.7652 20 15.5 20H1.5C1.23478 20 0.98043 19.8946 0.792893 19.7071C0.605357 19.5196 0.5 19.2652 0.5 19V1C0.5 0.734784 0.605357 0.48043 0.792893 0.292893C0.98043 0.105357 1.23478 0 1.5 0ZM5.5 9V6L0.5 10L5.5 14V11H11.5V9H5.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ExitIcon;
