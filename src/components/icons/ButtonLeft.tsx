import React, { HTMLProps } from 'react';

interface ButtonLeft extends HTMLProps<HTMLDivElement> {}
const ButtonLeft: React.FC<ButtonLeft> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="70"
        height="70"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14.21 15.771l5.158-4.817c0.368-0.345 0.389-0.923 0.044-1.293-0.167-0.179-0.404-0.29-0.668-0.29-0.242 0-0.461 0.094-0.625 0.247l0-0-5.212 4.869c-0.347 0.32-0.564 0.777-0.564 1.285s0.216 0.964 0.562 1.283l0.001 0.001 5.212 4.87c0.176 0.165 0.4 0.246 0.624 0.246 0.245 0 0.488-0.097 0.667-0.29 0.152-0.163 0.246-0.383 0.246-0.624 0-0.263-0.111-0.501-0.289-0.668l-0-0-5.157-4.817z"></path>
      </svg>
    </div>
  );
};

export default ButtonLeft;
