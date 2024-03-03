import React, { HTMLProps } from 'react';

interface WriteIconProps
  extends HTMLProps<HTMLDivElement> {}
const WriteIcon: React.FC<WriteIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="black"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.324 25.329h15.676v2.667h-24v-5.657l13.2-13.2 5.656 5.657-10.533 10.533zM19.084 7.253l2.829-2.828c0.241-0.241 0.575-0.39 0.943-0.39s0.701 0.149 0.943 0.39l3.772 3.771c0.242 0.241 0.391 0.575 0.391 0.943s-0.149 0.702-0.391 0.943l-2.829 2.828-5.656-5.657z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default WriteIcon;
