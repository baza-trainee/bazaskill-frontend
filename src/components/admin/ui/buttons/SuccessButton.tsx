import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SuccessButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-[#0A871E] text-white disabled:cursor-not-allowed ">
      {text}
    </button>
  );
};

export default SuccessButton;
