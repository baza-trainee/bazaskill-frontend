import type { HTMLProps } from 'react';

import React from 'react';

interface ArticlesIconProps
  extends HTMLProps<HTMLDivElement> {}
const ArticlesIcon: React.FC<ArticlesIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20ZM4 4V8H8V4H4ZM4 10V12H14V10H4ZM4 14V16H14V14H4ZM10 5V7H14V5H10Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ArticlesIcon;
