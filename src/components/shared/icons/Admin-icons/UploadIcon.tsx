import type { HTMLProps } from 'react';
import React from 'react';

interface UploadIconProps extends HTMLProps<HTMLDivElement> {}
const UploadIcon: React.FC<UploadIconProps> = ({ className, ...rest }) => {
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
        <path d="M4 25.333h24v2.667h-24v-2.667zM17.333 13.333v10.667h-2.667v-10.667h-9.333l10.667-10.667 10.667 10.667h-9.333z" />
      </svg>
    </div>
  );
};

export default UploadIcon;
