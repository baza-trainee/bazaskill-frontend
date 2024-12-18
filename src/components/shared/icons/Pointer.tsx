import type { HTMLProps } from 'react';
import React from 'react';

interface PointerProps extends HTMLProps<HTMLDivElement> {}
const Pointer: React.FC<PointerProps> = ({ className, ...rest }) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M8 9.5C7.2896 9.5 6.60829 9.23661 6.10596 8.76777C5.60363 8.29893 5.32143 7.66304 5.32143 7C5.32143 6.33696 5.60363 5.70107 6.10596 5.23223C6.60829 4.76339 7.2896 4.5 8 4.5C8.7104 4.5 9.39171 4.76339 9.89404 5.23223C10.3964 5.70107 10.6786 6.33696 10.6786 7C10.6786 7.3283 10.6093 7.65339 10.4747 7.95671C10.3401 8.26002 10.1428 8.53562 9.89404 8.76777C9.64531 8.99991 9.35002 9.18406 9.02505 9.3097C8.70007 9.43534 8.35175 9.5 8 9.5ZM8 0C6.01088 0 4.10322 0.737498 2.6967 2.05025C1.29018 3.36301 0.5 5.14348 0.5 7C0.5 12.25 8 20 8 20C8 20 15.5 12.25 15.5 7C15.5 5.14348 14.7098 3.36301 13.3033 2.05025C11.8968 0.737498 9.98912 0 8 0Z"
          fill="#020202"
        />
      </svg>
    </div>
  );
};

export default Pointer;
