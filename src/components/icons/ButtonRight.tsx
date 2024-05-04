import React, { HTMLProps } from 'react';

interface ButtonRight extends HTMLProps<HTMLDivElement> {}
const ButtonRight: React.FC<ButtonRight> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="33"
        height="33"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.37727273,19.5227273 C1.11368228,19.2591368 1.11368228,18.8317723 1.37727273,18.5681818 L9.94545455,10 L1.37727273,1.43181818 C1.11368228,1.16822773 1.11368228,0.740863176 1.37727273,0.477272727 C1.64086318,0.213682278 2.06822773,0.213682278 2.33181818,0.477272727 L11.1474387,9.29289322 C11.537963,9.68341751 11.537963,10.3165825 11.1474387,10.7071068 L2.33181818,19.5227273 C2.06822773,19.7863177 1.64086318,19.7863177 1.37727273,19.5227273 Z" />
      </svg>
    </div>
  );
};

export default ButtonRight;
