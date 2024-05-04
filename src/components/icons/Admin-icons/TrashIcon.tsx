import React, { HTMLProps } from 'react';

interface TrashIconProps
  extends HTMLProps<HTMLDivElement> {}
const TrashIcon: React.FC<TrashIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.377 1.185c1.301 0 2.407 0.839 2.805 2.006l0.006 0.021 0.804 2.417h4.86c0.818 0 1.481 0.663 1.481 1.481s-0.663 1.481-1.481 1.481v0l-0.004 0.107-1.285 17.988c-0.17 2.314-2.089 4.128-4.432 4.128h-12.261c-2.343-0.001-4.261-1.814-4.431-4.113l-0.001-0.015-1.285-17.991c-0.002-0.031-0.004-0.067-0.004-0.104v-0c-0.818 0-1.481-0.663-1.481-1.481s0.663-1.481 1.481-1.481v0h4.86l0.804-2.417c0.404-1.188 1.51-2.027 2.811-2.027 0 0 0.001 0 0.001 0h6.753zM11.556 13.037c-0.001 0-0.001 0-0.002 0-0.756 0-1.38 0.567-1.469 1.3l-0.001 0.007-0.009 0.173v8.889c0.002 0.816 0.665 1.477 1.481 1.477 0.756 0 1.379-0.566 1.47-1.297l0.001-0.007 0.011-0.173v-8.887c0-0.818-0.663-1.481-1.481-1.481v0zM20.444 13.037c-0.817 0-1.48 0.663-1.48 1.48v0 8.889c0.025 0.799 0.678 1.437 1.481 1.437s1.456-0.638 1.481-1.435l0-0.002v-8.887c0-0.818-0.662-1.481-1.48-1.481h-0zM19.377 4.148h-6.755l-0.493 1.481h7.741l-0.493-1.481z" />
      </svg>
    </div>
  );
};

export default TrashIcon;
