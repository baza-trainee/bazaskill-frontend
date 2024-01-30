import React, { HTMLProps } from 'react';

interface ButtonRight extends HTMLProps<HTMLDivElement> {}
const ButtonRight: React.FC<ButtonRight> = ({
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
        <path d="M17.79 15.771l-5.157 4.816c-0.179 0.168-0.29 0.405-0.29 0.668 0 0.242 0.094 0.461 0.246 0.625l-0.001-0.001c0.344 0.369 0.924 0.389 1.292 0.044l5.212-4.869c0.347-0.32 0.564-0.777 0.564-1.285s-0.216-0.964-0.562-1.283l-0.001-0.001-5.212-4.87c-0.163-0.152-0.382-0.245-0.623-0.245-0.001 0-0.001 0-0.002 0h0c-0.245 0-0.488 0.097-0.667 0.29-0.152 0.163-0.246 0.383-0.246 0.624 0 0.263 0.111 0.501 0.289 0.668l0.001 0 5.157 4.817z"></path>
      </svg>
    </div>
  );
};

export default ButtonRight;
