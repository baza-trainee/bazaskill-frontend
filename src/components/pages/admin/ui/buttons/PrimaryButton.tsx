import type { ButtonHTMLAttributes } from 'react';

import React from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[44px] w-[286px] rounded-md border border-white bg-white font-semibold text-black hover:bg-[#4B4B4B] hover:text-white active:bg-black disabled:cursor-not-allowed disabled:bg-[#939393] disabled:text-white"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
