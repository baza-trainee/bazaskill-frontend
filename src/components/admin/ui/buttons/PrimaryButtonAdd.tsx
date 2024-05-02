import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const PrimaryButtonAdd: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[44px] w-[286px] rounded-md border border-white bg-[#939393] font-semibold  hover:bg-[#4B4B4B]  disabled:cursor-not-allowed "
    >
      {text}
    </button>
  );
};

export default PrimaryButtonAdd;
