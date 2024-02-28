import React, { HTMLProps } from 'react';

interface EyeIconProps extends HTMLProps<HTMLDivElement> {}
const EyeIcon: React.FC<EyeIconProps> = ({
  className,
  width,
  height,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="black"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 12c-2.209 0-4 1.791-4 4s1.791 4 4 4v0c2.209 0 4-1.791 4-4s-1.791-4-4-4v0zM16 22.667c-3.682 0-6.667-2.985-6.667-6.667s2.985-6.667 6.667-6.667v0c3.682 0 6.667 2.985 6.667 6.667s-2.985 6.667-6.667 6.667v0zM16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10s12.36-4.147 14.667-10c-2.307-5.853-8-10-14.667-10z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default EyeIcon;
