import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[44px] w-[286px] rounded-md border border-white bg-[#212121] font-semibold text-white hover:bg-[#4B4B4B] hover:text-white active:bg-black disabled:bg-[#939393] disabled:text-white"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
